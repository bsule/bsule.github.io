import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/about'>About</Link></p>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about'>About</Route>
            </Routes>
        </Router>
    );
}

export default App