import React from 'react'

const Information = ({info}) => {

    return <>
        <div className="info-container">
            <div className="info-header">{info}</div>
            <div className="info-body">{info}</div>
        </div>
    </>
}

export default Information;