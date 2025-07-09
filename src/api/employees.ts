import { request } from '../utils/request'
import useSWR from 'swr'
import type { EmployeeI, NewEmployeeI } from '../types/Employee'

export function useGetEmployees() {
    return useSWR<EmployeeI[]>(`/team`)
}
export function addEmployee(values: NewEmployeeI) {
    return request<any>('POST', '/team', values)
}

export function removeEmployee(employeeId: string) {
    return request<any>('DELETE', `/team/${employeeId}`)
}
