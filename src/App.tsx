import { BrowserRouter as Router } from 'react-router-dom'
import { Navigation } from './navigation/Navigation'
import { Suspense } from 'react'

function App() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Router>
                    <Navigation />
                </Router>
            </Suspense>
        </>
    )
}

export default App
