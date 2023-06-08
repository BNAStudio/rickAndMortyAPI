import { useMemo } from 'react'
import { useApiCall } from '../../Hooks/useApiCall'
import Card from '../Cards/Card'
import GridCard from '../Cards/GridCard'
import css from './Characters.module.css'

const CHAR_URL = "https://rickandmortyapi.com/api/character"

const Characters = () => {

    const { dataInfo, loading } = useApiCall(CHAR_URL);

    const data = useMemo(() => {
        return dataInfo
    }, [dataInfo])

    console.log(data.results);

    return (
        <div className={css["characters-container"]}>
            <GridCard>
                <Card data="online" />
            </GridCard>
        </div>
    )
}

export default Characters