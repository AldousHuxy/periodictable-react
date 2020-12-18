import React, { useState } from 'react'

const Element = ({ element, eleOnClick }) => {
    /*
        Element Component
            functionality:  display element infomation on click
                            append evaluation array on click
    */
    const [atom, setAtom] = useState(element);

    const handleEvent = e => {
        e.preventDefault();
        if (!atom) return;
        setAtom(atom)
        eleOnClick(atom);
    }

    return <> 
        <button onClick={handleEvent} className={"element " + element.name.toLowerCase()}>
            <div className="atomicNum">{ element.atomicNum }</div>
            <div className="symbol">{ element.symbol }</div>
            <div className="atomicMass">{ element.atomicMass }</div>
        </button>  
    </>
};

export default Element;
