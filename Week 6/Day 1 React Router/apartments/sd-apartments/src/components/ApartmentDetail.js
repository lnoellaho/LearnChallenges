import React, {Component} from 'react'
import apartments from '../store/apartments'
import {Link} from 'react-router-dom'

class ApartmentDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            apartments: apartments
        }
    }
    componentWillMount(){
        const id = this.props.match.params.id
        this.setState({apartmentsId: id})
        let apartment = this.state.apartments.find(function(listing){
            return listing.id === parseInt(id)
        })
        if(apartment){
            this.setState({apartment: apartment})
        }
    }
    render(){
        return(
            <div>
                <br />
                <Link to='/'><button type="button" class="btn btn-outline-secondary">Home</button></Link>
                <br />
                <h2>{this.state.apartment.name}</h2>
                <p>
                {this.state.apartment.details.size}
                <br />
                {this.state.apartment.details.ammenities}
                <br />
                {this.state.apartment.details.location}
                <br />
                <br />
                </p>
                <img src={this.state.apartment.images} alt="this is an apartment"/>
            </div>
        )
    }
}

export default ApartmentDetail
