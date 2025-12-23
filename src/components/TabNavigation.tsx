type TabNavigationProps = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

export function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
    return (
        <nav className="tab-navigation">
            <button
                className={activeTab === "general" ? "tab-button active" : "tab-button"}
                onClick={() => setActiveTab("general")}
            >
                General Info
            </button>
            <button
                className={activeTab === "practical" ? "tab-button active" : "tab-button"}
                onClick={() => setActiveTab("practical")}
            >
                Practical Experience
            </button>
            <button
                className={activeTab === "education" ? "tab-button active" : "tab-button"}
                onClick={() => setActiveTab("education")}
            >
                Education
            </button>
        </nav>
    );
}
