# 📘 Django React Notes App

A full-stack **Notes Application** built with **Django REST Framework** as the backend API and **React** as the frontend UI. Users can create, view, update, and delete notes through a modern, responsive React interface that seamlessly interacts with the Django REST API.

---

## 🎬 Video Preview

> https://github.com/user-attachments/assets/b0983ab4-5f29-4ab6-aef1-9e4c9b12142f

## 🛠️ Features

✔️ **Full CRUD Operations** - Create, Read, Update, and Delete notes  
✔️ **Django REST API** - Robust backend with RESTful endpoints  
✔️ **React Frontend** - Dynamic, modern UI with component-based architecture  
✔️ **Axios Integration** - Smooth API communication  
✔️ **CORS Configured** - Seamless frontend-backend requests  
✔️ **Responsive Design** - Works on desktop, tablet, and mobile  
✔️ **Real-time Updates** - Instant feedback on all operations  

---

## 🧱 Project Structure

```
django-react-notes-app/
├── backend/                    # Django REST API
│   ├── api/                   # Notes API application
│   │   ├── models.py         # Note model
│   │   ├── serializers.py    # DRF serializers
│   │   ├── views.py          # API views
│   │   └── urls.py           # API routes
│   ├── mynotes/              # Django project settings
│   │   ├── settings.py       # Project configuration
│   │   ├── urls.py           # Main URL configuration
│   │   └── wsgi.py           # WSGI configuration
│   ├── manage.py             # Django management script
│   ├── db.sqlite3            # SQLite database
│   └── requirements.txt      # Python dependencies
│
├── frontend/                  # React Application
│   ├── public/               # Static files
│   │   └── index.html        # HTML template
│   ├── src/                  # React source code
│   │   ├── components/       # React components
│   │   ├── App.js            # Main App component
│   │   ├── App.css           # Application styles
│   │   └── index.js          # Entry point
│   ├── package.json          # Node dependencies
│   └── package-lock.json     # Locked versions
│
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- ✅ **Python 3.8+** - [Download Python](https://www.python.org/downloads/)
- ✅ **Node.js 14+** & **npm** - [Download Node.js](https://nodejs.org/)
- ✅ **Git** - [Download Git](https://git-scm.com/)

---

### 🔧 Backend Setup (Django REST API)

#### 1. Clone the Repository

```bash
git clone https://github.com/mirz7/django-react-notes-app.git
cd django-react-notes-app
```

#### 2. Navigate to Backend Directory

```bash
cd backend
```

#### 3. Create Virtual Environment

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**Linux / macOS:**
```bash
python3 -m venv venv
source venv/bin/activate
```

#### 4. Install Dependencies

```bash
pip install -r requirements.txt
```

**If `requirements.txt` is missing, install manually:**
```bash
pip install django djangorestframework django-cors-headers
```

#### 5. Run Migrations

```bash
python manage.py migrate
```

#### 6. Create Superuser (Optional)

```bash
python manage.py createsuperuser
```

#### 7. Start Django Server

```bash
python manage.py runserver
```

✅ **Backend running at:** `http://127.0.0.1:8000/`

---

### 📦 Frontend Setup (React)

#### 1. Open New Terminal & Navigate to Frontend

```bash
cd frontend
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Start React Development Server

```bash
npm start
```

✅ **Frontend running at:** `http://localhost:3000/`

---

## 🧪 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes/` | Retrieve all notes |
| `GET` | `/api/notes/:id/` | Retrieve a specific note |
| `POST` | `/api/notes/` | Create a new note |
| `PUT` | `/api/notes/:id/` | Update an existing note |
| `PATCH` | `/api/notes/:id/` | Partially update a note |
| `DELETE` | `/api/notes/:id/` | Delete a note |

### Example API Request

**Create a Note:**
```bash
curl -X POST http://127.0.0.1:8000/api/notes/ \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Note",
    "content": "This is a test note"
  }'
```

---

## 💻 Usage

1. **Open the React App** at `http://localhost:3000/`
2. **Create a Note** - Click "Add Note" or start typing
3. **Edit a Note** - Click on any note to edit
4. **Delete a Note** - Click the delete/trash icon
5. **Auto-save** - Changes are saved automatically

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Backend** | Django 3.2+, Django REST Framework |
| **Frontend** | React 17+, Axios |
| **Database** | SQLite (Development) |
| **Styling** | CSS3, Modern UI Design |
| **API** | RESTful API Architecture |
| **CORS** | django-cors-headers |

---

## 📦 Deployment

### Deploy to Production

#### Backend (Django)
1. Update `ALLOWED_HOSTS` in `settings.py`
2. Set `DEBUG = False`
3. Configure production database (PostgreSQL recommended)
4. Collect static files: `python manage.py collectstatic`
5. Deploy to **Render**, **Railway**, **Heroku**, or **AWS**

#### Frontend (React)
1. Build production bundle:
   ```bash
   npm run build
   ```
2. Deploy to **Vercel**, **Netlify**, or serve via Django static files

---

## 🎨 Customization

### Modify Styles
- Edit `frontend/src/App.css` for global styles
- Update component-specific styles in respective CSS files

### Add New Features
- **Backend:** Add new models in `backend/api/models.py`
- **Frontend:** Create new components in `frontend/src/components/`

### Configure CORS
Update `backend/mynotes/settings.py`:
```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://your-production-domain.com",
]
```

---

## 🐛 Troubleshooting

**CORS Issues:**
- Ensure `django-cors-headers` is installed
- Check `CORS_ALLOWED_ORIGINS` in settings.py

**API Connection Failed:**
- Verify backend is running on port 8000
- Check frontend API URL configuration

**Dependencies Missing:**
- Run `pip install -r requirements.txt` for backend
- Run `npm install` for frontend

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** your feature branch: `git checkout -b feature/AmazingFeature`
3. **Commit** your changes: `git commit -m 'Add some AmazingFeature'`
4. **Push** to the branch: `git push origin feature/AmazingFeature`
5. **Open** a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Muhammed Mirza P N**

- GitHub: [@mirz7](https://github.com/mirz7)
- Repository: [django-react-notes-app](https://github.com/mirz7/django-react-notes-app)

---

## 🙏 Acknowledgments

- Built with ❤️ using Django and React
- Inspired by modern note-taking applications
- Thanks to the open-source community

---

## ⭐ Support

If you found this project helpful:

- ⭐ **Star this repository**
- 🐛 **Report issues** on GitHub
- 💡 **Suggest new features**
- 🔀 **Submit pull requests**

---

## 📞 Contact & Support

Need help or have questions?

- 📧 Open an issue on GitHub
- 💬 Start a discussion
- 🐛 Report bugs in the Issues tab

---

**Happy Note Taking! 📝✨**

*Made with Django REST Framework & React*






