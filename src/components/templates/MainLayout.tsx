import EmployeeDashboard from '../organisms/EmployeeDashboard'

function MainLayout() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="ext-2xl font-bold mb-4">Employee Management System</h1>
            <EmployeeDashboard />
        </div>
    )
}

export default MainLayout
