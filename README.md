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

## 📱 Pages & Routes

- `/` - Home page with hero slider, popular services, winter care tips, expert vets and testimonials
- `/services` - Complete catalog of all available winter pet care services
- `/details/:serviceId` - Detailed service information with booking form (Protected Route)
- `/login` - User login page with email/password and Google authentication
- `/register` - User registration page with validation
- `/my-profile` - User profile management with update functionality (Protected Route)
- `/forgot-password` - Password reset page with email prefill

## Tech Stack
 
- **Frontend:** React 19, React Router 7, Vite
- **Styling:** Tailwind CSS 4, daisyUI
- **Authentication:** Firebase Authentication
- **UI & Animation:** Swiper, motion, animate.css, react-toastify, react-icons
- **Hosting:** Netlify

## Dependencies
 
| Package | Used for |
|---|---|
| react, react-dom | UI |
| react-router | Routing |
| firebase | Authentication |
| tailwindcss, @tailwindcss/vite, daisyui | Styling |
| swiper | Hero slider |
| motion, animate.css | Animations |
| react-toastify | Toast notifications |
| react-icons | Icons |
 
## Run Locally
 
**Prerequisites:** Node.js and a Firebase project with Email/Password and Google sign-in enabled.
 
```bash
git clone https://github.com/Hasnat-Sayed/WarmPaws.git
cd WarmPaws
npm install
```
 
Create a `.env.local` file in the project root with your Firebase config:
 
```env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
```
 
Start the dev server:
 
```bash
npm run dev
```

## Links
 
- **Live site:** [warmpaws2099.netlify.app](https://warmpaws2099.netlify.app/)
- **Repository:** [github.com/Hasnat-Sayed/WarmPaws](https://github.com/Hasnat-Sayed/WarmPaws)
- **Author:** Hasnat Bin Sayed — [GitHub](https://github.com/Hasnat-Sayed) · [LinkedIn](https://linkedin.com/in/hasnat-bin-sayed)


## 📞 Support

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/Hasnat-Sayed/WarmPaws/issues).

---

**Made with ❤️ for pets and their owners during the cold season** 🐾 ❄️