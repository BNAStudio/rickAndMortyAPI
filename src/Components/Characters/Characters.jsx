import { useApiCall } from '../../Hooks/useApiCall'
import Card from '../Cards/Card'
import GridCard from '../Cards/GridCard'
import css from './Characters.module.css'

const CHAR_URL = "https://rickandmortyapi.com/api/character"

const Characters = () => {

    const { dataInfo } = useApiCall(CHAR_URL);
    const data = dataInfo.results

    return (
        <div className={css["characters-container"]}>
            <>
                <GridCard>
                    {
                        data && data.map(item => (
                            <Card key={item.id} data={item} />
                        ))
                    }
                </GridCard>
            </>
        </div>
    )
}

export default Characters