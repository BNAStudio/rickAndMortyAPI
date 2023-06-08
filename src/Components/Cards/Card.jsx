/* eslint-disable react/prop-types */
import css from './Card.module.css'

const Card = ({ data }) => {
    // console.log(data);
    return (
        <div className={css.card}>{data}</div>
    )
}

export default Card