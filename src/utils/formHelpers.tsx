export function Field(
    {id, textLabel, value, type = "text", onChange}: {id: string, textLabel: string, value?: string, type?: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}
) {
    return (
        <>
            <label htmlFor={id}>{textLabel}</label>
            <input type={type} value={value} onChange={onChange} />
        </>
    );
}
