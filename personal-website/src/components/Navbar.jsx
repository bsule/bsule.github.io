import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="flex justify-end">
            <div className="flex-col p-4 text-right">
                <p><Link to='/'>Home</Link></p>
                <p><Link to='about/'>About</Link></p>
                <p><Link to='projects/'>Projects</Link></p>
            </div>
        </div>
    );
}

export default Navbar;