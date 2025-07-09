import { Field, Form, Formik } from 'formik'
import { addEmployee } from '../../api/employees'
import Modal from '../atoms/Modal'
import { ROLES, type Role } from '../../utils/roles'
import type { NewEmployeeI } from '../../types/Employee'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import { employeeSchema } from '../../utils/validators/employee'

export interface EmployeeAddModalProps {
    visible: boolean
    onCloseRequest: () => void
    onAddEmployee?: () => void
}

export default function EmployeeAddModal({ visible, onCloseRequest, onAddEmployee }: EmployeeAddModalProps) {
    async function onSubmit(values: NewEmployeeI) {
        try {
            await addEmployee({
                fullName: values.fullName,
                role: values.role,
                email: values.email,
                phoneNumber: values.phoneNumber,
                birthDate: values.birthDate,
                hiringDate: values.hiringDate,
                dismissalDate: values.dismissalDate,
            })
            onCloseRequest()
            onAddEmployee && onAddEmployee()
        } catch (error) {
            onCloseRequest()
        }
    }

    return (
        <>
            <Modal visible={visible} onCloseRequest={onCloseRequest}>
                <div className="bg-white p-4 rounded-xl flex flex-col items-center justify-center w-full space-y-6 shadow-2xl">
                    <Formik
                        initialValues={{
                            fullName: '',
                            role: ROLES[0] as Role,
                            email: '',
                            phoneNumber: '',
                            birthDate: '',
                            hiringDate: '',
                            dismissalDate: '',
                        }}
                        onSubmit={onSubmit}
                        validationSchema={employeeSchema}
                    >
                        {() => (
                            <Form className="space-y-4">
                                <Input name="fullName" label="Name" />
                                <div>
                                    <label className="text-sm font-medium">Role</label>
                                    <Field as="select" name="role" className="w-full border px-3 py-2 rounded text-sm">
                                        {ROLES.map((role) => (
                                            <option key={role} value={role}>
                                                {role}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <Input name="email" label="Email" />
                                <Input name="phoneNumber" label="Phone" />
                                <Input name="birthDate" label="Birthdate" type="date" />
                                <Input name="hiringDate" label="Hiring Date" type="date" />
                                <Input name="dismissalDate" label="Dismissal Date" type="date" />

                                <div className="flex justify-end gap-2 pt-2">
                                    <Button type="submit">Add Employee</Button>
                                    <Button type="button" variant="primary" onClick={onCloseRequest}>
                                        Cancel
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Modal>
        </>
    )
}
