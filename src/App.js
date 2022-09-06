// -- Part 1 Introduction
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const a = 10
//   const b = 15
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <ul>
//           <li>Apple</li>
//           <li>Banana</li>
//           <li>Grape</li>
//         </ul>
//         <h1 data-testid="intro">Hello! I'm testing using testid</h1>
//         <span title="sumNumber">total is {a+b}</span>
//       </header>
//     </div>
//   );
// }

// export default App;

// Part 2 Login Form
import './App.css';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
