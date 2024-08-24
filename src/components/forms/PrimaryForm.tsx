import { FormHTMLAttributes } from "react"

interface PrimaryFormProps extends FormHTMLAttributes<HTMLFormElement> {}

const PrimaryForm = (props: PrimaryFormProps) => {
  return (
    <form 
      {...props}
      className={`flex-1 p-4 border border-1 border-gray-500 rounded-md ${props.className}`}
    />
  )
}

export default PrimaryForm