import { BrowserRouter as Router } from 'react-router-dom'
import { Navigation } from './navigation/Navigation'
import { Suspense } from 'react'

function App() {
    return (
        <>
            <Suspense
                fallback={
                    <div className='min-h-screen relative bg-[#d1c4a0]'>
                        <h1 className='absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>
                            Loading...
                        </h1>
                    </div>
                }
            >
                <Router>
                    <Navigation />
                </Router>
            </Suspense>
        </>
    )
}

export default App
