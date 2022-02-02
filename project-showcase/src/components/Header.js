// import React, { useState } from 'react';

// function Header() {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   //not going to directly reassign / modify to the variables, we can use const instead. we'll get a variable, which points to it by reference

//   return (
//     <header>
//       <h1>
//         <span className="logo">{"//"}</span>
//         Project Showcase
//       </h1>
//       <button>Dark Mode</button>
//     </header>
//   );
// }

// export default Header;



//create ternary expression to do conditional rendering
import React, { useState } from 'react';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  //not going to directly reassign / modify to the variables, we can use const instead. we'll get a variable, which points to it by reference

  //handle helper fn is not inline but extracted out of JSX
  //toggle between true and false
  const handleClick = (event) => {
    // setIsDarkMode(!isDarkMode);
    // callback fn syntax.  target state is evaluated based on the previous state. current state ==> new state
    setIsDarkMode(isDarkMode => !isDarkMode);
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{isDarkMode ? 'Dark' : 'Light'} Mode</button>
    </header>
  );
}

export default Header;