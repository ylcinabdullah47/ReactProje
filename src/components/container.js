import React from 'react'
import Header from './header'
export default function Container(props) {
    return (
        <div style={{ width: "400px", height: "400px", border: "2px solid black", margin: "0px auto" }}>
            <p>{props.title}</p>
            <p>{props.numara}</p>
            <Header />

        </div>
    )
}
