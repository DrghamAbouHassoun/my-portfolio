import { TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = (props: TextareaProps) => {
  return (
    <textarea
      {...props}
      className={`bg-black block p-2 w-full rounded-md border border-gray-600 outline-primary-200 transition-colors duration-300 h-[200px] ${props.className}`}
    />
  )
}

export default Textarea