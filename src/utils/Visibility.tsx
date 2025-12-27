
export function Visibility({ section, onVisibilityToggle }: { section: { id: string; hidden: boolean }; onVisibilityToggle: (section: { id: string; hidden: boolean }) => void }) {
    return <button className="save-button" onClick={() => onVisibilityToggle(section)}>
        {section.hidden ? "Show" : "Hide"}
    </button>
}

export function ShowHidden({section, displayName, onVisibilityToggle}: {section: { id: string; hidden: boolean }; displayName: string; onVisibilityToggle: (section: { id: string; hidden: boolean }) => void}) {
    return (
        <div>
            <div key={section.id}>
                <h3>{displayName}</h3>
                <p>This entry is hidden. Click "Show" to edit.</p>
                <Visibility section={section} onVisibilityToggle={onVisibilityToggle} />
            </div>
        </div>
    );
}
