import { ROLES } from '../../utils/roles'
import type { Role } from '../../utils/roles'

type EmployeeFilterDropdownProps = {
    value: string
    onChange: (value: string) => void
}

const EmployeeFilterDropdown = ({ value, onChange }: EmployeeFilterDropdownProps) => {
    return (
        <div className="mb-4">
            <label htmlFor="roleFilter" className="block mb-1 font-semibold">
                Filter by Role
            </label>
            <select
                id="roleFilter"
                value={value}
                onChange={(e) => {
                    const value = e.target.value as Role | 'All'
                    onChange(value)
                }}
                className="border rounded px-3 py-2 w-full max-w-xs"
            >
                <option value="All">All</option>
                {ROLES.map((role) => (
                    <option key={role} value={role}>
                        {role}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default EmployeeFilterDropdown
