import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Note from "../components/Note";
import "../styles/style1.css";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser();
    getNotes();
  }, []);

  const getCurrentUser = () => {
    api
      .get("/api/user/")
      .then((res) => res.data)
      .then((data) => {
        setCurrentUser(data);
        console.log("Current user:", data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        if (error.response?.status === 401) {
          navigate("/login/");
        }
      });
  };

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((error) => alert(error));
  };

  const deleteNotes = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted!");
        else alert("Unable to delete");
        getNotes();
      })
      .catch((error) => alert(error));
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) {
          alert("Note Created!");
          setTitle("");
          setContent("");
        } else {
          alert("Failed to create the note!");
        }
        getNotes();
      })
      .catch((error) => alert(error));
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    navigate("/logout/");
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <div className="greeting-section">
          <h1 className="greeting-title">
            {getGreeting()}{currentUser ? `, ${currentUser.username}` : ""}!
          </h1>
          <p className="greeting-subtitle">Capture your thoughts and ideas</p>
        </div>
        <button className="logout-button" onClick={handleLogoutClick}>
          Logout
        </button>
      </header>

      {/* Main Content Grid */}
      <div className="content-grid">
        {/* Create Note Section */}
        <aside className="create-section">
          <div className="create-card">
            <h2 className="section-title">Create Note</h2>
            <form onSubmit={createNote} className="note-form">
              <div className="form-group">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-input"
                  placeholder="Enter note title..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="content" className="form-label">
                  Content
                </label>
                <textarea
                  name="content"
                  id="content"
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="form-textarea"
                  placeholder="Write your note here..."
                />
              </div>

              <button type="submit" className="submit-button">
                Create Note
              </button>
            </form>
          </div>
        </aside>

        {/* Notes List Section */}
        <main className="notes-section">
          <div className="notes-header">
            <h2 className="section-title">Your Notes</h2>
            <span className="notes-count">{notes.length} notes</span>
          </div>

          <div className="notes-list">
            {notes.length === 0 ? (
              <div className="empty-state">
                <p className="empty-message">No notes yet</p>
                <p className="empty-hint">
                  Create your first note to get started
                </p>
              </div>
            ) : (
              notes.map((note) => (
                <Note note={note} key={note.id} onDelete={deleteNotes} />
              ))
            )}
          </div>
        </main>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="modal-overlay" onClick={cancelLogout}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <h2 className="modal-title">Logout Confirmation</h2>
            <p className="modal-message">
              Are you sure you want to logout? 
            </p>
            <div className="modal-actions">
              <button className="modal-button cancel-button" onClick={cancelLogout}>
                Cancel
              </button>
              <button className="modal-button confirm-button" onClick={confirmLogout}>
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;