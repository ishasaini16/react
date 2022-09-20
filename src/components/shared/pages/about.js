// const About = () => {
//     return <h1>About</h1>;
//   };
import React from "react";

class About extends React.Component{
  constructor(){
   super();
   this.state={"name":"Isha"};
  }
  
  render() {
    return <h2>My Name is {this.state.name}</h2>

  
  }

}

export default About;