// import React from 'react';
// import ProjectListItem from './ProjectListItem';

// function ProjectList({ projects }) {
// 	// function ProjectList( props ) {

// 		// const projects = props.projects
// 		// //or
// 		// const { projects } = props

// 	const projectItems = projects.map((project) => {
// 		return (
// 			<ProjectListItem
// 			{...project}
// 			key={project.id}
// 			/>
// 		)
// 	})

//   	return (
// 		<section>
// 			<h2>Project List</h2>
// 			{projectItems}
// 		</section>
//   	)
// }

// export default ProjectList;



// we need searchResults for the projects?  Because i can calculate the search results based on the projects in props + contents of the input of state. i don't need to store them in state
// we need to store the contents of the input tag in state
import React, { useState } from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectList(props) {
	const [searchText, setSearchText] = useState("")//starts off as an empty string

	//built in method of filter for accessing the array of objects
	//if this string matches this string
	// after the return, is to make the input less case sensitive
	const searchResults = props.projects.filter((project) => {
		return (
			project.name.toLowerCase().includes(searchText.toLowerCase()) ||
			project.about.toLowerCase().includes(searchText.toLowerCase())
		);
	})


  // map over the array of project objects => return an array of ProjectItem components
  // [{},{},{},{}] => [<ProjectListItem />, <ProjectListItem />, <ProjectListItem />, <ProjectListItem />]
  const projectItems = searchResults.map((project) => {
    return <ProjectListItem key={project.id} {...project} />;
  });

  const handleSearch = ({target}) => {
	setSearchText(target.value)
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input 
	  	  type="text"
		  placeholder="Search..." 
		  onChange={handleSearch}
		  
	   />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
}

export default ProjectList;
