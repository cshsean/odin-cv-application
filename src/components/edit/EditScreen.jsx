import { useState } from "react";
import './EditScreen.css';

function EditScreen({ generalInfo, setGeneralInfo, education, setEducation, work, setWork }) {
  const [editingGeneral, setEditingGeneral] = useState(true);
  const [editingEducationIndex, setEditingEducationIndex] = useState(null);
  const [editingWorkIndex, setEditingWorkIndex] = useState(null);

  const addEducation = () => {
    setEducation([...education, { school: "", title: "", date: "" }]);
    setEditingEducationIndex(education.length); 
  };

  const addWork = () => {
    setWork([...work, { company: "", position: "", responsibilities: "", dateFrom: "", dateTo: "" }]);
    setEditingWorkIndex(work.length);
  };

  return (
    <div className="editScreenContainer">
      {/* General Info */}
      <section className="editSection">
        <h2>General Information</h2>
        {editingGeneral ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEditingGeneral(false);
            }}
          >
            <input
              type="text"
              placeholder="Name"
              value={generalInfo.name}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              value={generalInfo.email}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, email: e.target.value })
              }
            />
            <input
              type="tel"
              placeholder="Phone"
              value={generalInfo.phone}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, phone: e.target.value })
              }
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <p><strong>{generalInfo.name}</strong></p>
            <p>{generalInfo.email}</p>
            <p>{generalInfo.phone}</p>
            <button onClick={() => setEditingGeneral(true)}>Edit</button>
          </div>
        )}
      </section>

      {/* Education */}
      <section className="editSection">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="entryBlock">
            {editingEducationIndex === index ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEditingEducationIndex(null);
                }}
              >
                <input
                  type="text"
                  placeholder="School"
                  value={edu.school}
                  onChange={(e) => {
                    const updated = [...education];
                    updated[index].school = e.target.value;
                    setEducation(updated);
                  }}
                />
                <input
                  type="text"
                  placeholder="Title of Study"
                  value={edu.title}
                  onChange={(e) => {
                    const updated = [...education];
                    updated[index].title = e.target.value;
                    setEducation(updated);
                  }}
                />
                <input
                  type="text"
                  placeholder="Date of Study"
                  value={edu.date}
                  onChange={(e) => {
                    const updated = [...education];
                    updated[index].date = e.target.value;
                    setEducation(updated);
                  }}
                />
                <button type="submit">Submit</button>
              </form>
            ) : (
              <div>
                <p><strong>{edu.school}</strong></p>
                <p>{edu.title}</p>
                <p>{edu.date}</p>
                <button onClick={() => setEditingEducationIndex(index)}>Edit</button>
              </div>
            )}
          </div>
        ))}
        <button onClick={addEducation}>+ Add Education</button>
      </section>

      {/* Work */}
      <section className="editSection">
        <h2>Practical Experience</h2>
        {work.map((job, index) => (
          <div key={index} className="entryBlock">
            {editingWorkIndex === index ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEditingWorkIndex(null);
                }}
              >
                <input
                  type="text"
                  placeholder="Company"
                  value={job.company}
                  onChange={(e) => {
                    const updated = [...work];
                    updated[index].company = e.target.value;
                    setWork(updated);
                  }}
                />
                <input
                  type="text"
                  placeholder="Position Title"
                  value={job.position}
                  onChange={(e) => {
                    const updated = [...work];
                    updated[index].position = e.target.value;
                    setWork(updated);
                  }}
                />
                <textarea
                  placeholder="Main Responsibilities"
                  value={job.responsibilities}
                  onChange={(e) => {
                    const updated = [...work];
                    updated[index].responsibilities = e.target.value;
                    setWork(updated);
                  }}
                />
                <input
                  type="text"
                  placeholder="Date From"
                  value={job.dateFrom}
                  onChange={(e) => {
                    const updated = [...work];
                    updated[index].dateFrom = e.target.value;
                    setWork(updated);
                  }}
                />
                <input
                  type="text"
                  placeholder="Date To"
                  value={job.dateTo}
                  onChange={(e) => {
                    const updated = [...work];
                    updated[index].dateTo = e.target.value;
                    setWork(updated);
                  }}
                />
                <button type="submit">Submit</button>
              </form>
            ) : (
              <div>
                <p><strong>{job.company}</strong></p>
                <p>{job.position}</p>
                <p>{job.responsibilities}</p>
                <p>{job.dateFrom} – {job.dateTo}</p>
                <button onClick={() => setEditingWorkIndex(index)}>Edit</button>
              </div>
            )}
          </div>
        ))}
        <button onClick={addWork}>+ Add Work</button>
      </section>
    </div>
  );
}

export default EditScreen;
