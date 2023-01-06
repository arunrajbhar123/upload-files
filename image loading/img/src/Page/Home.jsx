import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div style={{ display: 'grid', gap: '12px', maxWidth: '70%', margin: 'auto', marginTop: '12px' }}>
            <Button text="Image Page" color="black" bg="pink" link="img" />
            <Button text="Document Upload" color="black" bg="Yellow" link="upload" />
        </div>
    )
}

export default Home



export const Button = ({ text, color, bg, link }) => {

    return (<Link to={`/${link}`}>
        <button
            style={{ width: '100%', color: `${color}`, border: 'none', padding: '12px', borderRadius: '5px', background: `${bg}`, fontSize: "25px" }}
        >
            {text}
        </button></Link>)
}