import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx'
import QualificationTimeline from './components/QualificationTimeline.jsx'
import Projects from './components/Projects.jsx'
import ContactForm from './components/ContactForm.jsx'
import Navbar from './components/Navbar.jsx'

import education from './data/education.json'
import experience from './data/experience.json'
import projects from './data/projects.json'
import skills from './data/skills.json'

export default function App() {
  return (
    
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={<AboutMe skills={skills} />}
        />

        <Route
          path="/qualification"
          element={
            <QualificationTimeline
              education={education}
              experience={experience}
            />
          }
        />

        <Route
          path="/projects"
          element={<Projects projects={projects} />}
        />

        <Route
          path="/contact"
          element={<ContactForm />}
        />
      </Routes>
    </>
  );
}