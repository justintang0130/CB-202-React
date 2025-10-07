import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FavoriteTeacher from './FavoriteTeacher.jsx'

function StudentCard() {
  return (
    <div className = "student-card">
      <h2>Student Name: Justin</h2>
      <p>Grade: A</p>
      <FavoriteTeacher />
    </div>
  )
}

export default StudentCard
