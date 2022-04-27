
export default function Navbar() {

    return (
    <nav className="nav">
        <h2>
            <a href="/fightFrontEnd/">Home</a>
        </h2>
        <ul className="nav-links">
            <li>
                <a href="/fightFrontEnd/#/fighters">Fighters</a>
            </li>          
            <li>
                <a href="/fightFrontEnd/#/fights">Fights</a>
            </li>
            <li>
                <a href="/fightFrontEnd/#/picks">Model Picks</a>
            </li>
            <li>
                <a href="/fightFrontEnd/#/about">About</a>
            </li>
        </ul>
    
    </nav>
    )
}