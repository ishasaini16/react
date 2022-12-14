//import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css';
export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }

  async getUsersData(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data)
    this.setState({loading:false, users: res.data})
  }
  componentDidMount(){
    this.getUsersData()
  }
  render() {
    const columns = [{  
      Header: 'ID',  
      accessor: 'id',
     }
     ,{  
      Header: 'Name',  
      accessor: 'name' ,
      }
     
     ,{  
     Header: 'Username',  
     accessor: 'username' ,
     }
     ,{  
     Header: 'Phone',  
     accessor: 'phone',
     },
     {  
      Header: 'Email',  
      accessor: 'email',
      },
      {  
        Header: 'Website',  
        accessor: 'website',
        }
  ]
    return (
      <ReactTable  
      data={this.state.users}  
      pageSize={(this.state.users.length > 5) ? 5  : this.state.users.length}
      columns={columns}  
   />
    )
  }
}