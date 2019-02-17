import React from 'react';
import './App.css';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Table } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import data from './data/oneStar.json' 

class App extends React.Component{
  constructor(props)
  {
    super(props);
this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state={
      data:data,
      collapsed:true
    };
   
   

  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  
 toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render(){
    const columns=[
    {
      Header:"Name",
      accessor:"name",
       width:300,
    maxWidth:300,
    minWidth:300
    },

  {
      Header:"Price",
      //id:'price',
      accessor: "price",
       width:100,
    maxWidth:100,
    minWidth:100,
 Cell:props =>{
  return(
   
 <div><span className='number'>{props.value}</span><p>US$</p>
</div>

    )
 }

    },  
    {
      Header:"Etoile",
      accessor:"etoile",
       width:70,
    maxWidth:70,
    minWidth:70
    },
  {
      Header:"Description",
      accessor:"description",
      sortable:false,
      filterable:false
    },
    {
      Header:"Type",
      accessor:"type",
      sortable:true,
      filterable:true,
        width:200,
    maxWidth:200,
    minWidth:200
    },
     {
      Header:"Departement",
      accessor:"region",
      sortable:true,
      filterable:true,
        width:200,
    maxWidth:200,
    minWidth:200
    },
    {
      Header:"Lien",
       sortable:false,
      filterable:false,
     Cell:props =>{
      return(
        
        <Button variant="outline-dark" className=""  onClick={()=> window.open(props.original.lien, "_blank")
      }

        >Réserver</Button> )

     },
      width:100,
    maxWidth:100,
    minWidth:100
    }




    ]
    return ( 
    
        <div className="App">
        <Navbar color="dark" dark >
          <NavbarBrand href="/" class="" className="navbar-brand">Ainsi va la vie !</NavbarBrand>
          
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink class="text-white" href="https://www.relaischateaux.com/fr/">Relais & Châteaux</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://restaurant.michelin.fr/#navbar">Michelin Restaurants</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>


       
<ReactTable   columns={columns} data={this.state.data}
filterable
noDataText={"Aucun résultat"}
   SubComponent={row => {
  return (<div>{row.row.description}</div>)
            
          }
        }
      
>

</ReactTable>
</div>
  
    );
}
  }
  

export default App