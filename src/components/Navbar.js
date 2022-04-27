
export default function Navbar() {

    return (
    <nav className="nav">
        <h2>
            <a href="/fight-model/">Home</a>
        </h2>
        <ul className="nav-links">
            <li>
                <a href="/fight-model/#/fighters">Fighters</a>
            </li>          
            <li>
                <a href="/fight-model/#/fights">Fights</a>
            </li>
            <li>
                <a href="/fight-model/#/picks">Model Picks</a>
            </li>
            <li>
                <a href="/fight-model/#/about">About</a>
            </li>
        </ul>
    
    </nav>
    )
}