import type { EmployeeI } from '../../types/Employee'
import Detail from '../atoms/Detail'
import Modal from '../atoms/Modal'

export interface EmployeeDetailsModalProps {
    employee?: EmployeeI
    visible: boolean
    onCloseRequest: () => void
}

export default function EmployeeDetailsModal({ employee, visible, onCloseRequest }: EmployeeDetailsModalProps) {
    return (
        <Modal visible={visible} onCloseRequest={onCloseRequest}>
            <div className="bg-white p-10 rounded-xl flex flex-col items-center justify-center w-full space-y-4 shadow-2xl text-sm">
                <Detail label="Name" value={employee?.fullName} />
                <Detail label="Role" value={employee?.role} />
                <Detail label="Email" value={employee?.email} />
                <Detail label="Phone" value={employee?.phoneNumber} />
                <Detail label="Birthdate" value={employee?.birthDate} />
                <Detail label="Hiring Date" value={employee?.hiringDate} />
                <Detail label="Dismissal Date" value={employee?.dismissalDate} />
            </div>
        </Modal>
    )
}
