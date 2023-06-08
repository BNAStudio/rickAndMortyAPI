import { Link } from 'react-router-dom'
import css from './Home.module.css'


const Home = () => {
    return (
        <div className={css["home-container"]}>
            <div className={css.titles}>
                <h1 className={css["main-title"]}>Rick And Morty</h1>
                <h2 className={css["sub-title"]}>App</h2>

            </div>
            <div className={css["container-btn"]}>
                <Link to="/characters">
                    <button className={css.btn}>Get in</button>
                </Link>
            </div>
        </div>
    )
}

export default Home