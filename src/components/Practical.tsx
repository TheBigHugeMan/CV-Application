import { Field } from "../utils/formHelpers"

export function Practical({practicalExp, setPracticalExp}) {
    
    return (
        <div className="form-component">
            <h1>Practical Experience</h1>
            <p>This section is for Practical Experience</p>
            <Field id="title" textLabel="Title:" type="text" onChange={(e) => setPracticalExp({...practicalExp, title: e.target.value})} />
            <Field id="company" textLabel="Company:" type="text"  onChange={(e) => setPracticalExp({...practicalExp, company: e.target.value})} />
            <Field id="startDate" textLabel="Start Date:" type="date" onChange={(e) => setPracticalExp({...practicalExp, startDate: e.target.value})} />
            <Field id="endDate" textLabel="End Date:" type="date" onChange={(e) => setPracticalExp({...practicalExp, endDate: e.target.value})} />
            <Field id="tasks" textLabel="Tasks:" type="text" onChange={(e) => setPracticalExp({...practicalExp, tasks: e.target.value})} />
        </div>
    );
}