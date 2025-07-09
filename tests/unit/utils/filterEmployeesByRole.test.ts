// src/utils/__tests__/filterEmployeesByRole.test.ts
import { describe, expect, it } from 'vitest'
import { filterEmployeesByRole } from '../../../src/utils/index'

describe('filterEmployeesByRole', () => {
    const employees = [
        { id: '1', fullName: 'Mario Rossi', role: 'Developer', email: 'mario@example.com', phoneNumber: '1234567890', birthDate: '1990-01-01', hiringDate: '2020-06-01', dismissalDate: null },
        { id: '2', fullName: 'Lucia', role: 'User', email: 'mario@example.com', phoneNumber: '1234567890', birthDate: '1990-01-01', hiringDate: '2020-06-01', dismissalDate: null },
    ]

    it('should return all employees for "All"', () => {
        const result = filterEmployeesByRole(employees, 'All')
        expect(result).toHaveLength(2)
    })

    it('should return only Admins', () => {
        const result = filterEmployeesByRole(employees, 'Admin')
        expect(result).toEqual([])
    })
})
