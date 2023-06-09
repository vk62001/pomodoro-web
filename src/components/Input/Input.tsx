interface IInput {
    placeholder: string;
    type: string,
    value: string;
    onChange: (text:string)=>void
}

export const Input = ({placeholder, type, value, onChange}:IInput) => {


  return (
    <input className="inputClass" placeholder={placeholder} type={type} value={value} onChange={(e)=>onChange(e.target.value)}/>
  )
}
