
import React, { useContext } from 'react'

import { TemaVerisi } from '../App'


function Icerik() {
    return (
        <div style={useContext(TemaVerisi)}>

            <p>selsm tstst </p>
            <h1>react deneme</h1>
            <h2>useContext ile components arası veri taşıma</h2>
            <p>lorem ipsum loram 1add...</p>
            <p>lorem ipsum loram 2add...</p>
            <p>lorem ipsum loram 3add...</p>

        </div>
    )
}

export default Icerik