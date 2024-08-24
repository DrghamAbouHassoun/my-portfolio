import { InputHTMLAttributes } from "react"

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput = (props: TextInputProps) => {
  return (
    <input 
      {...props}
      className={`bg-black block p-2 w-full rounded-md border border-gray-600 outline-primary-200 transition-colors duration-300 ${props.className}`}
    />
  )
}

export default TextInput