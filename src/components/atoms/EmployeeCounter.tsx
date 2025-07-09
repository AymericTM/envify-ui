import type { EmployeeI } from '../../types/Employee'

interface EmployeeCounterProps {
    employees: EmployeeI[]
}

export default function EmployeeCounter({ employees }: EmployeeCounterProps) {
    return (
        <div className="text-sm text-gray-700 my-2">
            {employees.length} {employees.length === 1 ? 'employee' : 'employees'} found
        </div>
    )
}
