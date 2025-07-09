import { useField } from 'formik'

type InputProps = {
    name: string
    label: string
    type?: string
}

function Input({ name, label, type = 'text' }: InputProps) {
    const [field, meta] = useField(name)

    return (
        <div>
            <label htmlFor={name} className="text-sm font-medium">
                {label}
            </label>
            <input id={name} type={type} {...field} className={`mt-1 block w-full px-3 py-2 border rounded text-sm ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'}`} />
            {meta.touched && meta.error && <p className="text-sm text-red-500 mt-1">{meta.error}</p>}
        </div>
    )
}

export default Input
