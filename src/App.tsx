import './App.css'
import MainLayout from './components/templates/MainLayout'
import { SWRConfig } from 'swr'
import { fetcher } from './utils/request.ts'

function App() {
    return (
        <SWRConfig value={{ fetcher }}>
            <MainLayout />
        </SWRConfig>
    )
}

export default App
