import '../styles/Header.css';

function Header() {
    return (
        <div>
            <h1>Ellen Kolbly</h1>
            <nav>
                <ul>
                    <li className='here'>About Me</li>
                    <li>Portfolio</li>
                    <li>Resume</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;