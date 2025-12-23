import { useState } from "react";
import { Field } from "../utils/formHelpers";

export function GeneralInfo({generalInfo, setGeneralInfo}) {
    
    return (
        <div className="form-component">
            <h1>General Information</h1>
            <p>This section is for general information.</p>
            <div>
            {Field("fName", "First Name:", "text", (e: React.ChangeEvent<HTMLInputElement>) => setGeneralInfo({...generalInfo, fName: e.target.value}))}
            {Field("lName", "Last Name:", "text", (e: React.ChangeEvent<HTMLInputElement>) => setGeneralInfo({...generalInfo, lName: e.target.value}))}
            </div>
            <div>
            {Field("city", "City:", "text", (e: React.ChangeEvent<HTMLInputElement>) => setGeneralInfo({...generalInfo, city: e.target.value}))}
            {Field("postCode", "Postal Code:", "text", (e: React.ChangeEvent<HTMLInputElement>) => setGeneralInfo({...generalInfo, postCode: e.target.value}))}
            </div>
            <div>
            {Field("email", "Email:", "email", (e: React.ChangeEvent<HTMLInputElement>) => setGeneralInfo({...generalInfo, email: e.target.value}))}
            {Field("phone", "Phone Number:", "tel", (e: React.ChangeEvent<HTMLInputElement>) => setGeneralInfo({...generalInfo, phone: e.target.value}))}
            </div>
        </div>
    );
}


