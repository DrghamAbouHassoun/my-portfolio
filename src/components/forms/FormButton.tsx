import { ButtonHTMLAttributes } from 'react'

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const FormButton = (props: FormButtonProps) => {
  return (
    <button
      {...props}
      className={`p-2 text-bold text-center w-full rounded-md bg-primary-200 hover:bg-primary-300 transition-colors duration-300 cursor-pointer flex justify-center items-center gap-2 uppercase ${props.className}`}
    />
  )
}

export default FormButton