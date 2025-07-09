import type { Role } from '../../utils/roles'
import { roleColorMap } from '../../utils/rolesColors'

type BadgeProps = {
    role: Role
}

function Badge({ role }: BadgeProps) {
    const colorClass = roleColorMap[role] ?? 'bg-gray-200 text-gray-700'

    return <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${colorClass}`}>{role}</span>
}

export default Badge
