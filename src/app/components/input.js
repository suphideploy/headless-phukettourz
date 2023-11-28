const Input = ({required,type,id,className}) => (
    <input required={required} type={type} id={id} className={`border rounded border-slate-300 outline-0 py-1 px-3 hover:border-slate-900 focus:border-slate-900 ${className || ''}`} />
)