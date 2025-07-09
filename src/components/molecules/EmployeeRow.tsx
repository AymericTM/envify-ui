import Badge from '../atoms/Badge'
import Button from '../atoms/Button'
import type { EmployeeI } from '../../types/Employee'
import type { Role } from '../../utils/roles'

type EmployeeRowProps = {
    employee: EmployeeI
    onView: (employee: EmployeeI) => void
    onDelete: (employee: EmployeeI) => void
}

function EmployeeRow({ employee, onView, onDelete }: EmployeeRowProps) {
    const isEmployed = !employee.dismissalDate

    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="p-2">{employee.fullName}</td>
            <td className="p-2">
                <Badge role={employee.role as Role} />
            </td>
            <td className="p-2">
                <span className={`text-xs font-medium px-2 py-1 rounded ${isEmployed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{isEmployed ? 'Yes' : 'No'}</span>
            </td>
            <td className="p-2 space-x-2">
                <Button variant="primary" onClick={() => onView(employee)}>
                    View
                </Button>
                <Button variant="danger" onClick={() => onDelete(employee)}>
                    Delete
                </Button>
            </td>
        </tr>
    )
}

export default EmployeeRow
