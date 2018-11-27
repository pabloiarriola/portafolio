import React, { Component } from 'react';
import Card from './Card'
import ImgCalc from './ImgCalc.png';
import ImgChat from './ImgChat.png';
import ImgMemoria from './ImgMemoria.png';
import ImgKyra from './ImgKyra.png';
import ImgHistoria from './ImgHistoria.png';
import ImgMaze from './ImgMaze.png';

class CardView extends Component{
	render(){
		return(
			<div className='viewer'>
				<Card 
				title='Basic html'
				imglink={ImgHistoria}
				link='http://34.210.35.174/131115/lab2/index.html'
				parr='El fin de este laboratorio fue aprender a crear paginas web simples, dando como resultado la historia de Hill House'
				/>
				<Card
				title='CSS only'
				imglink={ImgKyra}
				link='https://codepen.io/pabloiarriola/pen/LXrQNb'
				parr='El fin de este laboratorio fue practicar conceptos básicos de css alrededor de posicionamiento y layout, dando como resultado a Kyra'
				/>
				<br />
				<Card
				title='Chat: comunicación cliente-servidor'
				imglink={ImgChat}
				link='http://34.210.35.174/131115/chat4/index.html'
				parr='El proposito de este laboratorio fue  practicar conceptos básicos de javascript al rededor de fetch, dando como resultado un chat simple'
				/>
				<Card
				title='Memoria - React'
				imglink={ImgMemoria}
				link='https://github.com/pabloiarriola/Lab6'
				parr='El fin de este laboratorio fue configurar un ambiente mínimo para desarrollar en react, dando como resultado una memoria de Pokemon'
				/>
				<br />
				<Card
				title='Laberinto'
				imglink={ImgMaze}
				link='https://github.com/pabloiarriola/Laberinto'
				parr='El fin de este laboratorio fue practiquen combinar los temas de fetch con los temas de react, dando como resultado una aventura de Link'
				/>
				<Card
				title='Calculadora'
				imglink={ImgCalc}
				link='http://34.210.35.174/131115/Lab8-Calculadora/index.html'
				parr='El proposito de este laboratorio fue practicar conceptos alrededor de diseño de aplicaciones en base a componentes,dando como resultado la TS100'
				/>
			</div>
			)
	}
}
export default CardView;