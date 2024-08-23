import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className='container mx-auto'>
            <Router>
                <Navbar/>
                <AnimatedRoutes/>
            </Router>
        </div>
    );
}

export default App