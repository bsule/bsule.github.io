import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <div className='bg'></div>
                <div className='container mx-auto'>
                    <Navbar />
                        
                    <AnimatedRoutes />
                </div>
        </Router>
    );
}

export default App;