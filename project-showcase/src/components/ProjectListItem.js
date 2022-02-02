// import React from 'react';

// //destructured props makes it easier to tell what props a component expects to be passed down from its parent
// function ProjectListItem({
//     id,
//     name,
//     about,
//     phase,
//     link,
//     image
// }) {
    
//   return (
//     <li>
//         <figure>
//             <img src={image} alt={name} />
//             <button>clap{0}</button>
//         </figure>

//         <article className="details">
//             <h4>{name}</h4>
//             <p>{about}</p>
//             <p><a href={link}>View Live</a></p>
//         </article>
//     </li>
//   );
// }

// export default ProjectListItem;


/* 
use state to implement a "clap" feature
when the clap button is clicked, 
update the number of claps for the project

- import the useState hook
- create your initial state
- update the JSX to use the state variable to display the number of claps
- add an event listener to the button for a click event
- when the button is clicked, update state and increment the number of claps

- BONUS: fix the accessibility issue with the button!

https://reactwithhooks.netlify.app/docs/handling-events.html
*/


import React, { useState } from "react";

function ProjectItem({
  id,
  name,
  about,
  phase,
  link,
  image
}) {

  const [ claps, setClaps ] = useState(0);

  function handleClapClick(event) {
    setClaps(claps => claps + 1)
    //if we did setClaps(claps++), this will return an error because this approach is reassignment
    // claps++ is equivalent to claps = claps + 1
    //and `claps` is a const; this will throw an error
  }

  // optionally we can destructure individual properties from project
  //line72 has the emoji clap {claps}; {claps} was updated to the variable used in line 60
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClapClick} className="claps">👏{claps}</button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  );
}

export default ProjectItem;
