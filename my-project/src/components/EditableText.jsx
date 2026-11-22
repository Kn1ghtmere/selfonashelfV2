export default function EditableText({ value, onChange, editing, as: Tag ='span', className='' }) {
    if(!editing) return <Tag className={className}>{value}</Tag>


    return (
        <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${className} w-full border-b border-dashed border-current bg-transparent outline-none`}
        />
    )
}