import * as Yup from 'yup'

export const employeeSchema = Yup.object({
    fullName: Yup.string().required('Name is required'),
    role: Yup.string().required('Role is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string()
        .matches(/^\+?[0-9\s\-()]{7,20}$/, 'Invalid phone number')
        .required('Phone number is required'),
    birthDate: Yup.date().max(new Date(), 'Birthdate cannot be in the future').required('Birthdate is required'),
    hiringDate: Yup.date().max(new Date(), 'Hiring date cannot be in the future').required('Hiring date is required'),
    dismissalDate: Yup.date().nullable().min(Yup.ref('hiringDate'), 'Dismissal date must be after hiring date'),
})
