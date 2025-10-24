# TicketHub - Ticket Management Web App

A modern, beautiful ticket management system built with **React**, **Vite**, **Tailwind CSS**, and **TypeScript**.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)

---

## ✨ Features

- 🔐 **User Authentication** - Secure login and signup with form validation
- 📊 **Dashboard** - Overview of ticket statistics and quick actions
- 🎫 **Ticket Management** - Full CRUD operations with beautiful modals
- 📱 **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ⚡ **Real-time Updates** - Instant feedback with toast notifications
- ♿ **Accessibility** - WCAG compliant with semantic HTML and ARIA attributes

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v6
- **Icons:** Lucide React
- **State Management:** React Context API
- **Storage:** LocalStorage for persistence

---

## 📁 Project Structure

```
src/
├── assets/             # SVGs and decorative elements
├── components/         # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Modal.tsx
│   ├── Toast.tsx
│   ├── FormInput.tsx
│   ├── StatCard.tsx
│   └── TicketCard.tsx
├── contexts/           # React Context providers
│   ├── AuthContext.tsx
│   ├── TicketContext.tsx
│   └── ToastContext.tsx
├── pages/              # Page components
│   ├── Landing.tsx
│   ├── Auth/
│   │   ├── Login.tsx
│   │   └── Signup.tsx
│   ├── Dashboard.tsx
│   └── Tickets.tsx
├── routes/             # Route protection
│   └── ProtectedRoute.tsx
├── styles/             # Global styles
│   └── globals.css
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js 16+ and npm/yarn

### Steps

1. **Clone or download the project:**

```bash
git clone <repository-url>
cd ticket-management-app
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start development server:**

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

4. **Build for production:**

```bash
npm run build
```

---

## 🔑 Demo Credentials

Use these credentials to test the app:

- **Email:** `test@example.com`
- **Password:** `Password123!`

---

## 📖 Usage

### Authentication

- Sign up with a new email and password (min 6 characters)
- Login with your credentials
- Session is stored in localStorage and persists across page refreshes

### Dashboard

- View ticket statistics (total, open, resolved)
- Quick navigation to ticket management
- Logout button to clear session

### Ticket Management

- **Create:** Click "New Ticket" button to open modal
- **Read:** View all tickets in a responsive grid
- **Update:** Click edit icon on any ticket to modify
- **Delete:** Click delete icon and confirm in modal

### Form Validation

- Email must be in valid format
- Password must be at least 6 characters
- Ticket title is required
- Inline error messages appear below inputs
- Toast notifications confirm actions

---

## 🎨 Design System

### Colors

| Type    | Color                     |
|---------|---------------------------|
| Primary | Blue (`#2563EB`)         |
| Success | Green (`#10B981`)        |
| Warning | Amber (`#F59E0B`)        |
| Error   | Red (`#EF4444`)          |
| Neutral | Gray scale               |

### Typography

- **Headings:** Bold, 1.5rem - 3rem
- **Body:** Regular, 1rem
- **Small:** 0.875rem

### Components

- **Rounded corners:** 0.5rem - 1rem
- **Shadows:** Subtle to medium
- **Spacing:** 4px - 32px scale

---

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color combinations
- Focus states on interactive elements
- Screen reader friendly

---

## ⚠️ Error Handling

- Form validation with inline error messages
- Toast notifications for success/error feedback
- Unauthorized access redirects to login
- 404 routes redirect to home page
- Graceful error messages for failed operations

---

## 🗂️ State Management

### AuthContext

- Manages user authentication state
- Stores session in localStorage
- Provides login, signup, and logout functions

### TicketContext

- Manages ticket data
- Persists tickets in localStorage
- Provides CRUD operations and statistics

### ToastContext

- Manages toast notifications
- Auto-dismisses after 3 seconds
- Supports success, error, and info types

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## ⚠️ Known Limitations

- Uses localStorage for data persistence (not suitable for production)
- No real backend API integration
- Single user per browser session
- No email verification for signup

---

## 🚧 Future Enhancements

- [ ] Backend API integration
- [ ] Real authentication with JWT
- [ ] Database persistence
- [ ] User roles and permissions
- [ ] Ticket filtering and search
- [ ] Email notifications
- [ ] File attachments
- [ ] Comments and activity log

---

## 📦 Key Dependencies

```json
{
  "react": "^18.x",
  "react-router-dom": "^6.x",
  "lucide-react": "^0.x",
  "typescript": "^5.x",
  "vite": "^5.x",
  "tailwindcss": "^4.x"
}
```

---

## 📄 License

MIT License – feel free to use this project for learning and development.

---

## 💬 Support

For issues or questions, please open an issue in the repository.

---

## 🙏 Acknowledgments

Built with ❤️ using React and modern web technologies.

---

**Happy Coding! 🎉**