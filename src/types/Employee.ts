export type EmployeeI = {
    id: string
    fullName: string
    role: string
    email: string
    phoneNumber: string
    birthDate: string
    hiringDate: string
    dismissalDate: string | null
}

export type NewEmployeeI = Omit<EmployeeI, 'id'>
