import React from 'react'
import './style.css'
import HighlightIcon from '@mui/icons-material/Highlight';


function header() {
  return (
    <div>
        <h1 className='keep_ttl'><HighlightIcon/>KEEPER<span style={{ fontFamily: 'cursive' }}>Keep your Information safe</span></h1>
    </div>
  )
}

export default header