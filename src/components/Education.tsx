import { Field } from "../utils/formHelpers";
import { AddExtra } from "../utils/AddExtra";
import { RemoveEntry } from "../utils/Remove";
import { Visibility, ShowHidden } from "../utils/Visibility";

type EducationEntry = {
    id: string;
    schoolName: string;
    degree: string;
    startDate: string;
    endDate: string;
    hidden: boolean;
}

export function Education({educations, onUpdateEducation, onAddEducation, onVisibilityToggle, onRemoveEducation}: {educations: EducationEntry[]; onUpdateEducation: (edu: EducationEntry) => void; onAddEducation: () => void; onVisibilityToggle: (edu : {id: string; hidden: boolean}) => void; onRemoveEducation: (edu: EducationEntry) => void;}) {
    return (
        <div className="form-component">
            <h1>Education</h1>
            <p>This section is for education.</p>

            {educations.map((edu: EducationEntry) => (
                <div key={edu.id}>
                    {edu.hidden ? 
                        <ShowHidden section={edu} displayName={edu.schoolName} onVisibilityToggle={onVisibilityToggle} /> 
                    : 
                    <div className="input-fields">
                        <Field id="schoolName:" textLabel="School Name:" type="text" value={edu.schoolName} onChange={(e) => onUpdateEducation({...edu, schoolName: e.target.value})} />
                        <Field id="degreeName:" textLabel="Degree Name:" type="text" value={edu.degree} onChange={(e) => onUpdateEducation({...edu, degree: e.target.value})} />
                        <Field id="startDate:" textLabel="Start Date:" type="date" value={edu.startDate} onChange={(e) => onUpdateEducation({...edu, startDate: e.target.value})} />
                        <Field id="endDate:" textLabel="End Date:" type="date" value={edu.endDate} onChange={(e) => onUpdateEducation({...edu, endDate: e.target.value})} />

                        <Visibility section={edu} onVisibilityToggle={onVisibilityToggle} />
                        <RemoveEntry handleOnClick={() => onRemoveEducation(edu)}/>
                    </div>
                    }
                </div>
            ))}
            <div className="add-button">
                <AddExtra handleOnClick={onAddEducation} />
            </div>
        </div>
    );
}