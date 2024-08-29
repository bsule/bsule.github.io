import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import Navbar from './components/Navbar';
import AboutPicture from './components/AboutPicture';

function App() {
    return (
        <Router>
            <div className='bg'></div>
                <div className='container mx-auto'>
                    <Navbar />
                    <AboutPicture/>
                        
                    <AnimatedRoutes />
                </div>
        </Router>
    );
}

export default App;