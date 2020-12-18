import React, { useState } from 'react'
import Element from './Element'
import Information from './display/Information'
import EvaluateOutput from './display/EvaluateOutput'
let reactants = [];

const PeriodicTable = ({ elements }) => 
{

    const [reactant, setReactant] = useState('');
    const [info, setInfo] = useState('');

    function eleOnClick(atom) {
        // Pass element obj to info component
        infoOnChange(atom)

        setReactant(prevReactant => {

            // Init symbol
            if (reactant === '') {
                reactants.push(1)
                reactants.push(atom.symbol)
                reactants.push(0)
                
                // Console Actions
                console.log(reactants)
                return `${atom.symbol}`
            }
            // Reoccuring Symbol
            else if (reactants.includes(atom.symbol)) {

                // incrementReactant(index)
                incrementReactant(reactants.lastIndexOf(atom.symbol), atom)

                // join to evaluation
                joinRectant(reactants)

                // Console Actions
                console.log(reactants)
                return `${reactants}`
            }
            // New Symbol Instances
            else {
                reactants.push(1)
                reactants.push(atom.symbol)
                reactants.push(0)

                // Console Actions
                console.log(reactants)
                return `${prevReactant} + ${atom.symbol}`
            }
        })
    }

    // Increment Reactant
    function incrementReactant(index, atom) {
        // Reactant
        let coefficient = reactants[index - 1]
        let reactant = reactants[index]
        let subscript = reactants[index + 1]

        let diatoms = ["H", "N", "O", "F", "Cl"]
        diatoms.forEach(diatom => {
            (diatom === reactant) ? isDiatom = true : isDiatom = false
        });

        

        reactants[index - 1] = coefficient
        reactants[index] = reactant
        reactants[index + 1] = subscript
    }

    function joinRectant() {

    }

    function infoOnChange({name}) {
        setInfo(name)
    }

    return (
        <div className="periodic-table">
            <div className="title"></div>
            {/* Elements */}
            { elements.map(element => {
                return <Element eleOnClick={eleOnClick} key={element.atomicNum} element={element} />
            }) }

            {/* Evaluation form e.g. Evaluate reactant button & Species input textbox */}
            <Information infoOnChange={infoOnChange} info={info}/>
            <button className="evaluate-btn">Evaluate</button>
            <EvaluateOutput reactant={reactant}/>
            <button className="clear-btn">Clear</button>

        </div>
    )
}

export default PeriodicTable;