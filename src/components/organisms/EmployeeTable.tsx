import EmployeeRow from '../molecules/EmployeeRow'
import type { EmployeeI } from '../../types/Employee'

type Props = {
    employees: EmployeeI[]
    onView: (employee: EmployeeI) => void
    onDelete: (employeeId: string) => void
}

function EmployeeTable({ employees, onView, onDelete }: Props) {
    return (
        <table className="w-full text-left border-collapse text-sm">
            <thead>
                <tr className="border-b font-semibold">
                    <th className="py-2">Name</th>
                    <th className="py-2">Role</th>
                    <th className="py-2">Currently Employed</th>
                    <th className="py-2">Actions</th>
                </tr>
            </thead>
            <tbody>{employees?.map((emp) => (emp?.id ? <EmployeeRow key={emp.id} employee={emp} onView={() => onView(emp)} onDelete={() => onDelete(emp.id)} /> : null))}</tbody>
        </table>
    )
}

export default EmployeeTable
