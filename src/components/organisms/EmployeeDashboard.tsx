import { useState } from 'react'
import EmployeeFilterDropdown from '../molecules/EmployeeFilterDropdown'
import EmployeeTable from '../organisms/EmployeeTable'
import Button from '../atoms/Button'
import { useGetEmployees } from '../../api/employees'
import type { EmployeeI } from '../../types/Employee'
import { filterEmployeesByRole } from '../../utils'
import EmployeeAddModal from '../molecules/EmployeeAddModal'
import EmployeeDetailsModal from '../molecules/EmployeeDetailsModal'
import EmployeeDeleteModal from '../molecules/EmployeeDeleteModal'
import EmployeeCounter from '../atoms/EmployeeCounter'

function EmployeeDashboard() {
    const { data, mutate } = useGetEmployees()
    const employees = data ?? []

    const [employee, setEmployee] = useState<EmployeeI>()
    const [employeeId, setEmployeeId] = useState('')
    const [filter, setFilter] = useState<string>('All')
    const [showForm, setShowForm] = useState(false)
    const [showDetail, setDetail] = useState(false)
    const [showDelete, setDelete] = useState(false)

    const filteredEmployees = filterEmployeesByRole(employees ?? [], filter)

    return (
        <>
            <div className="space-y-4">
                <div className="flex flex-row justify-between items-center">
                    <EmployeeFilterDropdown value={filter} onChange={setFilter} />
                    <Button onClick={() => setShowForm(true)}>{showForm ? 'Close' : 'Add'}</Button>
                </div>
                <EmployeeTable
                    employees={filteredEmployees}
                    onView={(emp) => {
                        setEmployee(emp), setDetail(true)
                    }}
                    onDelete={(id) => {
                        setEmployeeId(id), setDelete(true)
                    }}
                />
                <EmployeeCounter employees={filteredEmployees} />
            </div>
            <EmployeeDetailsModal employee={employee} visible={showDetail} onCloseRequest={() => setDetail(false)}></EmployeeDetailsModal>
            <EmployeeAddModal
                visible={showForm}
                onCloseRequest={() => setShowForm(false)}
                onAddEmployee={() => {
                    mutate()
                }}
            ></EmployeeAddModal>
            <EmployeeDeleteModal
                userId={employeeId ? employeeId : ''}
                visible={showDelete}
                onCloseRequest={() => setDelete(false)}
                onDeleteEmployee={() => {
                    mutate()
                }}
            ></EmployeeDeleteModal>
        </>
    )
}

export default EmployeeDashboard
