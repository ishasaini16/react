import React from "react";

class Contact extends  React.Component{
 constructor(props){
  super(props);
   this.state= {"number": "9878787878","address":"chandigarh"};
 }
  render(){
    return <p>My Phone number is : {this.state.number} and my address is : {this.state.address}</p>
    
    
  }

}

export default Contact;