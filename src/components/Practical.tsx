import { Field } from "../utils/formHelpers"

export function Practical({practicalExp, setPracticalExp}) {
    
    return (
        <div className="form-component">
            <h1>Practical Experience</h1>
            <p>This section is for Practical Experience</p>

            {Field("title", "Title", "text", (e) => setPracticalExp({...practicalExp, title: e.target.value}))}
            {Field("company", "Company", "text", (e) => setPracticalExp({...practicalExp, company: e.target.value}))}
            {Field("startDate", "Start Date", "date", (e) => setPracticalExp({...practicalExp, startDate: e.target.value}))}
            {Field("endDate", "End Date", "date", (e) => setPracticalExp({...practicalExp, endDate: e.target.value}))}
            {Field("tasks", "Tasks", "text", (e) => setPracticalExp({...practicalExp, tasks: e.target.value}))}
        </div>
    );
}