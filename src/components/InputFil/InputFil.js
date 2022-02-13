import './InputFil.css';
import React, { Component } from 'react'

class InputFil extends Component {
	
	
  render() {
	return (
	  <div>
			<form className='form'>
				<label className='m-3'><h1>What needs to be done?</h1></label>
				<input className='p-3 my-3' type="text" name="" onChange={this.props.onChange} value={this.props.value}/>
				<button className='py-2 btn btn-dark' type="submit" onClick={this.props.onClick}>Add</button>
		  </form>
	  </div>
	)
  }
}

export default InputFil
