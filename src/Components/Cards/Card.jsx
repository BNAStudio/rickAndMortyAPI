/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import css from './Card.module.css'

const renderingEpisodes = (episode) => {
    return (
        <>
            {
                episode && episode.map((item, i) => (
                    <div key={`episode-${i + 1}`}>
                        <Link to={item}>{`Episode ${i + 1}`}</Link>
                    </div>
                )
                )
            }

        </>
    )
}

const Card = ({ data }) => {
    const { name, status, species, image, episode } = data
    return (
        <div className={css.card}>
            <img src={image} className={css["image"]} />

            <div className={css["character-info-container"]}>
                <h3 className={css["character-name"]}>{name}</h3>

                <div className={css.general}>
                    <p className={css["info-character"]}><b>Status:</b> {status}</p>
                    <p className={css["info-character"]}><b>Specie:</b> {species}</p>
                </div>
                <div className={css["episodes-list"]}>
                    <p className={css["info-character"]}><b>Episodes:</b></p>
                    <ol>
                        {renderingEpisodes(episode)}
                    </ol>
                </div>

            </div>
        </div>
    )
}

export default Card
