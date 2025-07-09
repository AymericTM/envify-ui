import React from 'react'

type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'danger' | 'secondary'
    className?: string
}

function Button({ children, onClick, type = 'button', variant = 'primary', className = '' }: ButtonProps) {
    const base = 'px-4 py-2 rounded text-sm font-medium'
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    }

    return (
        <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
            {children}
        </button>
    )
}

export default Button
