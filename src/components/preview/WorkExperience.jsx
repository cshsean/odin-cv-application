import './WorkExperience.css';

function WorkExperience({ work }) {
  return (
    <div className="workContainer">
      <div className="workTitle">Work Experience</div>
      <div className="workHistoryList">
        {work.map((work, index) => (
          <div className="workHistoryItem" key={index}>
            <div className="workDate">{work.dateFrom} – {work.dateTo}</div>
            <div className="workDetails">
              <h3 className="workName">{work.company}</h3>
              <p className="workPosition">{work.position}</p>
              <p className="workResponsibilities">{work.responsibilities}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;