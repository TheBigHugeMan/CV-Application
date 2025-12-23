import { useState } from 'react'
import { GeneralInfo } from './components/GeneralInfo.tsx'
import { Education } from './components/Education.tsx'
import { Practical } from './components/Practical.tsx'
import { CVPreview } from './components/CVPreview.tsx'
import { TabNavigation } from './components/TabNavigation.tsx'
import './styles/CVApp.css'

function App() {
  // Tab state to track which form is currently visible
  const [activeTab, setActiveTab] = useState("general");

  const [generalInfo, setGeneralInfo] = useState({
    fName: "",
    lName: "",
    city: "",
    postCode: "",
    email: "",
    phone: ""
  });

  const [education, setEducation] = useState({
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: ""
  });

  const [practicalExp, setPracticalExp] = useState({
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    tasks: ""
  });

  return (
    <div className="app-container">
      <div className="forms-section">
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="form-content">
          {activeTab === "general" && <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />}
          {activeTab === "practical" && <Practical practicalExp={practicalExp} setPracticalExp={setPracticalExp} />}
          {activeTab === "education" && <Education education={education} setEducation={setEducation} />}
        </div>
      </div>
      <div className="cv-preview-section">
        <CVPreview generalInfo={generalInfo} education={education} practicalExp={practicalExp} />
      </div>
    </div>
  )
}

export default App
