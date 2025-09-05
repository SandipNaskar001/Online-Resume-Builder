
# 📝 Online Resume Builder (MERN Stack)

## ✨ Overview

The **Online Resume Builder** is a modern web application that helps users create **professional resumes** quickly and easily. Users can input personal, educational, and professional details, choose from multiple templates, preview the resume **in real-time**, and download it as a **PDF**.

---

## 🛠 Tech Stack

| Layer          | Technology                      |
| -------------- | ------------------------------- |
| Frontend       | React.js, Tailwind CSS          |
| Backend        | Node.js, Express.js             |
| Database       | MongoDB (Atlas)                 |
| PDF Generation | jsPDF, html2canvas, html2pdf.js |

---

## 🌟 Features

*  User registration and login (**JWT authentication**)
*  Create, edit, and delete resumes
*  Multiple resume templates/themes
*  Dynamic sections for **Education, Experience, Skills, and Projects**
*  Real-time resume preview
*  Export resume as PDF (**client-side**)

---

## 🔗 Live Demo

[Try the Resume Builder Online](https://online-resume-builder-sandip.onrender.com/resume/68baa90109bc41177bc0fe88)

---

## 🏗 Project Architecture

```
Frontend (React)
  └── Components: ResumeForm, ThemeSelector, ResumePreview
Backend (Node.js + Express)
  └── Routes: /auth, /resumes, /templates
  └── Controllers: handle CRUD operations for resumes
Database (MongoDB)
  └── Collections: Users, Resumes, Templates
```







