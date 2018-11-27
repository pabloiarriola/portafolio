import React, { Component } from 'react';
import './App.css'

class Card extends Component{
	render(){
		return(
			<div className='Card'>
				<a href={this.props.link}>
				<img className='bookpic' 
				src={this.props.imglink} 
				alt='foto'/>
				</a>
				<div className='description'>
					<a href={this.props.link}>
						<p className='cTitle' >{this.props.title}</p>
					</a>
					<p className='dd'>{this.props.parr}</p>
				</div>
			</div>
			);
	}
}
export default Card;