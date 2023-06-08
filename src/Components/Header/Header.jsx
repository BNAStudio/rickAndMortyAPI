import { Link } from 'react-router-dom'
import css from './Header.module.css'

// const URL = "https://rickandmortyapi.com/api"

const Header = () => {
    return (
        <header className={css.container}>
            <ul className={css["menu-icons"]}>
                <li >
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/characters">Characters</Link>
                </li>
                <li>
                    <Link to="/location">Location</Link>
                </li>
                <li>
                    <Link to="/episode">Episode</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header