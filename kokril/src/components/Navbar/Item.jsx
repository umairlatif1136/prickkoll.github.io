  import React from "react";
  import Navitems from "./Navbar"
  import navbar from 'react-bootstrap/Navbar';
  import "./item.css"
import Form from "../Loggain";
import{ Link } from "react-router-dom"
let Item=(props)=>{
      return(<div>
   <nav  class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><h1>prickkoll</h1></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">{props.items[0].work}</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/">{props.items[0].learn}</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link active" to="/" >{props.items[0].contact}</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active"   to='loggain'>{props.items[0].login}</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active"   to='signup'>{props.items[0].signin}</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
      )

    }
    export default Item