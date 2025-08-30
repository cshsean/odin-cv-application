import { useState } from 'react'
import './App.css'
import PreviewScreen from './components/preview/PreviewScreen'
import MainHeader from './MainHeader'
import EditScreen from './components/edit/EditScreen'

function App() {
  const [screen, setScreen] = useState("edit");

  const [generalInfo, setGeneralInfo] = useState({name: "John Doe", email: "john@example.com", phone: "123-456-7890"});
  const [education, setEducation] = useState([
    { school: "University of XYZ", title: "BSc Computer Science", date: "2015 – 2019" },
  ]);
  const [work, setWork] = useState([
    {
      company: "Tech Solutions Inc.",
      position: "Software Engineer",
      responsibilities: "Developed web applications, collaborated with cross-functional teams, maintained codebase.",
      dateFrom: "Jan 2020",
      dateTo: "Dec 2022"
    },
    {
      company: "Creative Labs",
      position: "Frontend Developer",
      responsibilities: "Implemented responsive UI, optimized performance, worked closely with designers.",
      dateFrom: "Feb 2023",
      dateTo: "Present"
    }
  ]);

  return (
    <div className="mainContainer">
      <MainHeader mode={screen} setMode={setScreen}/>
      {screen === "edit" ? (
          <EditScreen
            generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}
            education={education} setEducation={setEducation}
            work={work} setWork={setWork} 
          />
        ) : (
          <PreviewScreen 
            generalInfo={generalInfo}
            education={education}
            work={work}
          />
        )
      }
    </div>
  )
}

export default App
