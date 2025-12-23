
export function CVPreview({practicalExp, generalInfo, education}) {
    return(
        <>
        <div id="top-bar">
        <h1>{generalInfo.fName} {generalInfo.lName}</h1>
        <p>{generalInfo.phone} | {generalInfo.email} | {generalInfo.city} | {generalInfo.postCode} </p>
        </div>

        <div>
            <h2>Practical Experience</h2>
            <div className="exp-section">
                <h3>{practicalExp.company}</h3>
                <h4>{practicalExp.title}</h4>
                <p>{practicalExp.startDate} - {practicalExp.endDate}</p>
                <p>{practicalExp.tasks}</p>
            </div>
        </div>

        <div>
            <h2>Education</h2>
            <div className="education-section">
                <h3>{education.schoolName}</h3>
                <p>{education.degree}</p>
                <p>{education.startDate} - {education.endDate}</p>
            </div>
        </div>
        </>
    )
}