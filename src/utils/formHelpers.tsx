export function Field(
    id: string,
    textLabel: string,
    type: string = "text",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
) {
    return (
        <>
            <label htmlFor={id}>{textLabel}</label>
            <input type={type} onChange={onChange} />
        </>
    );
}
