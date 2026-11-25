export default function EditableText({
    value,
    onChange,
    editing,
    as: Tag = 'span',
    multiline = false,
    className= '',

}) {
    if (!editing) return <Tag className={className}>{value}</Tag>

    const shared = `${className} w-full border-b border-dashed border-current bg-transparent outline-none`

    if (multiline) {
        return (
            <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={4}
            className={`${shared} resize-none`}
            />
        )
    }
    return <input value={value} onChange={(e) => onChange(e.target.value)} className={shared} />
    
}