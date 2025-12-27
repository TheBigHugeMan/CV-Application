import { useState } from "react";
import { Field } from "../utils/formHelpers";

export function GeneralInfo({generalInfo, setGeneralInfo}) {
    
    return (
        <div className="form-component">
            <h1>General Information</h1>
            <p>This section is for general information.</p>
            <div>
                <Field id="fName" textLabel="First Name:" type="text"  onChange={(e) => setGeneralInfo({...generalInfo, fName: e.target.value})} />
                <Field id="lName" textLabel="Last Name:" type="text" onChange={(e) => setGeneralInfo({...generalInfo, lName: e.target.value})} />
            </div>
            <div>
                <Field id="city" textLabel="City:" type="text" onChange={(e) => setGeneralInfo({...generalInfo, city: e.target.value})} />
                <Field id="postCode" textLabel="Post Code:" type="text" onChange={(e) => setGeneralInfo({...generalInfo, postCode: e.target.value})} />
            </div>
            <div>
                <Field id="email" textLabel="Email:" type="email"  onChange={(e) => setGeneralInfo({...generalInfo, email: e.target.value})} />
                <Field id="phone" textLabel="Phone:" type="tel" onChange={(e) => setGeneralInfo({...generalInfo, phone: e.target.value})} />
            </div>
        </div>
    );
}


