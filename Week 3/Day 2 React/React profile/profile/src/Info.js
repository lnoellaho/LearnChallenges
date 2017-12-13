import React, {Component} from 'react'

class Info extends Component{
  render(){
    return (
      <div className='About'>
      <div className='jordan'>
        <h2>Jordan Cook:</h2>
        <div><img className='chip' src={require('./potato-chip.jpg')} alt='rock shaped like a potato chip'/></div>

        <p>Age:24</p>
        <p>Location: San Diego</p>
        <p>Hobbies: Soccer, hiking, drinking, playing video games</p>
        <p>I moved to San Diego at the age of 6 from Utah. I played soccer for 17 years before going to SDSU. I recently started to code a few months ago and became really interested in how everything works.</p>
        <p>I have traveled to various cities in Mexico includng Rosarito.  I have also driven accross half the US.</p>
        <div><img className='Rosarito' src={require('./rosarito.jpg')} alt='The beach of Rosarito'/></div>
      </div>
      <div className='leeann'>
        <h2>Leeann Ho: </h2>
        <div><img className='ninja' src={require('./ninja.jpg')} alt='motorcycle ninja'/></div>
        <p>Age: 24</p>
        <p>Location: San Diego</p>
        <p>Hobbies: Drinking coffee, riding, baking </p>
        <p>PA->SF->SD Small town girl from Pennsylvania who moved to San Francisco for a short time before coming to San Diego.</p>
        <p>I have traveled to Europe and Asia when I was younger.</p>
        <div><img className='hong' src={require('./hong.jpg')} alt='hong kong skyline'/></div>
      </div>
      </div>
    )
  }
}

export default Info
