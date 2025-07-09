import React from 'react'

type ModalProps = {
    visible: boolean
    onCloseRequest: () => void
    title?: string
    children: React.ReactNode
}

function Modal({ visible, onCloseRequest, title, children }: ModalProps) {
    if (!visible) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
                <button onClick={onCloseRequest} className="absolute top-2 right-2 text-red-500 hover:text-red-300">
                    ✕
                </button>
                {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Modal
