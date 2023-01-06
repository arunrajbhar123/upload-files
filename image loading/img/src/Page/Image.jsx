import React from 'react'
import { useFetchData } from '../components/Fetch';
import ImgBox from '../components/ImgBox';

const Image = () => {
    const { data } = useFetchData()
    return (
        <div>
            <div
                style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
            >
                {data.map((el, index) => (
                    <ImgBox key={index} {...el} />
                ))}
            </div>

        </div>
    )
}

export default Image