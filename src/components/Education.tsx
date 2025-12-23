import { useState } from "react";
import { Field } from "../utils/formHelpers";

export function Education({education, setEducation}) {
    return (
        <div className="form-component">
            <h1>Education</h1>
            <p>This section is for education.</p>

            {Field("schoolName", "School Name:", "text", (e: React.ChangeEvent<HTMLInputElement>) => setEducation({...education, schoolName: e.target.value}))}
            {Field("degree", "Degree Name:", "text", (e: React.ChangeEvent<HTMLInputElement>) => setEducation({...education, degree: e.target.value}))}
            {Field("startDate", "Start Date:", "date", (e: React.ChangeEvent<HTMLInputElement>) => setEducation({...education, startDate: e.target.value}))}
            {Field("endDate", "End Date:", "date", (e: React.ChangeEvent<HTMLInputElement>) => setEducation({...education, endDate: e.target.value}))}
        </div>
    );
}