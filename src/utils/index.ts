import type { EmployeeI } from '../types/Employee'

export function filterEmployeesByRole(employees: EmployeeI[], roleFilter: string): EmployeeI[] {
    if (roleFilter === 'All') return employees

    return employees.filter((emp) => emp.role === roleFilter)
}
