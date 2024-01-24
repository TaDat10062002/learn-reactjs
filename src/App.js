// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Ta Dat 2024 quyet dinh hoc Reactjs va Nodejs
//           Va lam do an
//         </p>

//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
function ColorBox(props) {
    const { color } = props; // destruturing object

    return (
        <div className="box" style={{ backgroundColor: color }}></div>
    )
}

export default ColorBox;