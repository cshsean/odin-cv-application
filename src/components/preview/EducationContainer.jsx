import './EducationContainer.css'

function EducationContainer({ education }) {
  return (
    <div className="educationContainer">
      <div className="educationTitle">Education</div>
      <div className="educationHistoryList">
        {education.map((edu, index) => (
          <div className="educationHistoryItem" key={index}>
            <p className="studyDate">{edu.date}</p>
            <div className="studyDetails">
                <h3 className="schoolName">{edu.school}</h3>
                <p className="studyTitle">{edu.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationContainer;