# 🐾 WarmPaws - Winter Pet Care Platform

A cozy winter companion platform designed for pet owners to ensure their furry friends stay warm, safe, and healthy during the cold season.

## 🌐 Live URL
**[Click Here🛩️](https://warmpaws2099.netlify.app)**

## 📖 Purpose
WarmPaws provides a comprehensive solution for pet owners to access winter care services, expert advice, and professional grooming options. The platform connects pet owners with trusted service providers specializing in cold-weather pet care.

## ✨ Key Features

### 🔐 Authentication & User Management
- **Secure Authentication**: Email/password and Google Sign-In integration using Firebase
- **User Profile Management**: Update profile picture and display name with real-time updates
- **Password Validation**: Enforces strong password requirements (uppercase, lowercase, minimum 6 characters)
- **Protected Routes**: Service details and Profile page is accessible only to logged-in users with automatic redirect
- **Persistent Login**: Stay logged in across sessions
- **Forgot Password**: Password reset functionality with email prefill
- **Password Toggle**: Show/hide password in login and register forms

### 🐕 Service Management
- **Browse Services**: View 9 winter pet care services with detailed information
- **Service Categories**: Clothing, Grooming, Daycare, Healthcare, Training, and Consultation
- **Service Details**: Complete information including provider details, pricing, ratings, and available slots
- **Book Services**: Easy booking form with instant toast confirmation


### 🎨 User Experience
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Modern UI**: Clean, minimalist design with smooth animations using Animate.css and Motion
- **Hero Slider**: Engaging Swiper.js carousel showcasing winter pet care
- **Toast Notifications**: Real-time feedback using React-Toastify

### 📋 Additional Sections
- **Winter Care Tips**: 4 expert tips for keeping pets safe in cold weather with icons
- **Expert Vets**: Meet our team of 3 specialized veterinarians with booking options
- **Testimonials**: 4 real reviews from satisfied pet owners in 4-column grid

### 🚀 Technical Features
- **SPA Architecture**: Single Page Application with no reload errors on any route
- **Environment Variables**: Secure Firebase configuration keys
- **Form Validation**: Client-side validation for all forms
- **Error Handling**: Graceful error handling with user-friendly messages
- **Loading States**: Visual loading spinners during data fetching

## 🛠️ NPM Packages Used

### Core Dependencies
- **react** (^19.2.0) - UI library
- **react-dom** (^19.2.0) - React rendering
- **react-router** (^7.9.6) - Routing and navigation

### UI & Styling
- **tailwindcss** (^4.1.17) - Utility-first CSS framework
- **@tailwindcss/vite** (^4.1.17) - Tailwind CSS Vite integration

### Animation & Interaction
- **motion** (^12.23.24) - Modern animation library for React
- **animate.css** (^4.1.1) - CSS animation library
- **swiper** (^12.0.3) - Touch-enabled slider for hero section

### Firebase & Authentication
- **firebase** (^12.6.0) - Backend services and authentication

### Utilities
- **react-toastify** (^11.0.5) - Toast notifications for user feedback
- **react-icons** (^5.5.0) - Comprehensive icon library

## 📱 Pages & Routes

- `/` - Home page with hero slider, popular services, winter care tips, expert vets and testimonials
- `/services` - Complete catalog of all available winter pet care services
- `/details/:serviceId` - Detailed service information with booking form (Protected Route)
- `/login` - User login page with email/password and Google authentication
- `/register` - User registration page with validation
- `/my-profile` - User profile management with update functionality (Protected Route)
- `/forgot-password` - Password reset page with email prefill

## 👨‍💻 Author

**Hasnat Bin Sayed**
- GitHub: [Hasnat-Sayed](https://github.com/Hasnat-Sayed)
- Project: [WarmPaws](https://github.com/Hasnat-Sayed/WarmPaws)
- Live Site: [warmpaws2099.netlify.app](https://warmpaws2099.netlify.app)

## 📞 Support

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/Hasnat-Sayed/WarmPaws/issues).

---

**Made with ❤️ for pets and their owners during the cold season** 🐾 ❄️