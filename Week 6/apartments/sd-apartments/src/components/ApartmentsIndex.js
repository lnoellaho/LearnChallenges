import React, { Component } from 'react'
import apartments from '../store/apartments'
import {Link} from 'react-router-dom'


class ApartmentsIndex extends Component {
  render() {
      var apartmentList = apartments.map(function(apartment, i) {
          // return ( <li key = {i}>
          //     <Link to={`/apartments/${apartment.id}`} > {apartment.name}
          //     </Link>
          //     </li>)

          return (<div class="list-group">
                    <a href={`/apartments/${apartment.id}`} class="list-group-item list-group-item-action flex-column  align-items-start active box1">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{apartment.name}</h5>
                        <small></small>
                      </div>
                      <p class="mb-1"></p>
                      <small></small>
                    </a>
                    <br />
              </div>)
      })


    return (
     <div>
      <br />
      <br />
        {apartmentList}
    </div>
    );
  }
}

export default ApartmentsIndex;
