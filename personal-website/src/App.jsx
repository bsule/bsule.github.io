import { BrowserRouter as Router } from 'react-router-dom';
import { GlowCapture } from '@codaworks/react-glow';
import AnimatedRoutes from './components/AnimatedRoutes';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            {/* GlowCapture tracks cursor position across the whole page.
                Glow is intentionally NOT applied to the background — only to
                individual glass cards in Home, About, and Projects. */}
            <GlowCapture>
                <div className="sticky top-0 z-50 navbar-glass">
                    <Navbar />
                </div>
                <div className="container mx-auto">
                    <AnimatedRoutes />
                </div>
            </GlowCapture>
        </Router>
    );
}

export default App;
