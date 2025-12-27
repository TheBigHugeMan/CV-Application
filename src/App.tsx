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

  
  const handleAddEducation = () => {  
    setEducations([...educations, {id: crypto.randomUUID(), schoolName: "", degree: "", startDate: "", endDate: "", hidden: false}])
  };

   const handleUpdateEducation = (newEducation) => {
    setEducations(educations.map(edu => edu.id !== newEducation.id ? edu : newEducation))
  };

  const handleOnRemoveEducation = (edu) => {
    setEducations(educations.filter(e => edu.id !== e.id));
  }

  const handleVisibilityToggle = (edu) => {
    setEducations(educations.map(e => e.id !== edu.id ? e : {...e, hidden: !e.hidden}))
  };

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
          {activeTab === "education" && <Education educations={educations} onAddEducation={handleAddEducation} onUpdateEducation={handleUpdateEducation} onVisibilityToggle={handleVisibilityToggle} onRemoveEducation={handleOnRemoveEducation} />}
        </div>
      </div>
      <div className="cv-preview-section">
        <CVPreview generalInfo={generalInfo} educations={educations} practicalExp={practicalExp} />
      </div>
    </div>
  )
}

export default App
