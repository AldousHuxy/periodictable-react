import React, { useState } from 'react';
import PeriodicTable from './components/PeriodicTable';

const App = props => {
  const [elements] = useState([
    { atomicNum: 1, symbol: "H", name: "Hydrogen", atomicMass: 1.008},
    { atomicNum: 2, symbol: "He", name: "Helium", atomicMass: 1.008},
    { atomicNum: 3, symbol: "Li", name: "Lithium", atomicMass: 6.94},
    { atomicNum: 4, symbol: "Be", name: "Beryllium", atomicMass: 9.0122},
    { atomicNum: 5, symbol: "B", name: "Boron", atomicMass: 10.81},
    { atomicNum: 6, symbol: "C", name: "Chlorine", atomicMass: 12.011},
    { atomicNum: 7, symbol: "N", name: "Nitrogen", atomicMass: 14.007},
    { atomicNum: 8, symbol: "O", name: "Oxygen", atomicMass: 15.999},
    { atomicNum: 9, symbol: "F", name: "Fluorine", atomicMass: 18.998},
    { atomicNum: 10, symbol: "Ne", name: "Neon", atomicMass: 20.180},
    { atomicNum: 11, symbol: "Na", name: "Sodium", atomicMass: 22.990},
    { atomicNum: 12, symbol: "Mg", name: "Magnesium", atomicMass: 24.305},
    { atomicNum: 13, symbol: "Al", name: "Aluminum", atomicMass: 26.982},
    { atomicNum: 14, symbol: "Si", name: "Silicon", atomicMass: 28.085},
    { atomicNum: 15, symbol: "P", name: "Phosphorus", atomicMass: 30.974},
    { atomicNum: 16, symbol: "S", name: "Sulfur", atomicMass: 32.06},
    { atomicNum: 17, symbol: "Cl", name: "Chlorine", atomicMass: 35.45},
    { atomicNum: 18, symbol: "Ar", name: "Argon", atomicMass: 39.948}
  ]);

  return (
    <div className="app">
        <PeriodicTable className="periodic-table" elements={elements} />
    </div>
  );
}

export default App;
