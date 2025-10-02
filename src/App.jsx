import React from 'react'

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
      Hello world!
      </h1>
    </div>
  )
}

export default App
























// //  LEARN SOME BASICS OF REACT

// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// const  Card = ({title}) => {
//   const [count, setCount] = useState(0);
//   const [hasLiked, setHasLiked] = useState(false);

//   useEffect(() => {
//     console.log(`${title} has been liked: ${hasLiked}`);
//   }, [hasLiked]);


//   return (
//     <div className="card" onClick={() => setCount(count + 1)}>
//       <h2>{title} <br/> {count || null}</h2>

//       <button onClick={() => setHasLiked(!hasLiked)}>
//         {hasLiked ? "❤️" : "🤍"}
//       </button>
//     </div>
//   )
// }


// const App = () => {
  
//   return (
//     <div className="card-container">
//       <Card title="Star Wars" rating={5} isCool={true} />
//       <Card title="Avatar" />
//       <Card title="The Lion king" />
//     </div>
//   );
// };

// export default App
