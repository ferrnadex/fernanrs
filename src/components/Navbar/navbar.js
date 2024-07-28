import "./navbar.css"

function Navbar() {
    return (
        <header className="header">

            <a href="/" className="logo">Logo</a>
            <nav className="navbar">
                <a href="/">Portflio</a>
                <a href="/">Contact</a>

            </nav>

        </header>
    )
}

export { Navbar }