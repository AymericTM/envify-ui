import { removeEmployee } from '../../api/employees'
import Button from '../atoms/Button'
import Modal from '../atoms/Modal'

export interface EmployeeDeleteModalProps {
    userId: string
    visible: boolean
    onCloseRequest: () => void
    onDeleteEmployee?: () => void
}

export default function EmployeeDeleteModal({ userId, visible, onCloseRequest, onDeleteEmployee }: EmployeeDeleteModalProps) {
    async function onSubmit() {
        await removeEmployee(userId)
        onDeleteEmployee && onDeleteEmployee()
        onCloseRequest()
    }

    return (
        <>
            <Modal visible={visible} onCloseRequest={onCloseRequest}>
                <div className="bg-white p-4 rounded-xl flex flex-col items-center justify-center w-full space-y-6 shadow-2xl">
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <p className="text-xl text-primary font-medium text-center whitespace-pre-wrap">Confirm delete?</p>
                    </div>
                    <Button className="bg-red-600 rounded-full text-white px-4 py-2 w-full" onClick={() => onSubmit()}>
                        Delete
                    </Button>{' '}
                    <Button className="bg-primary rounded-full text-white px-4 py-2 w-full" onClick={onCloseRequest}>
                        Cancel
                    </Button>
                </div>
            </Modal>
        </>
    )
}
