import '../style/header.css'
import { init } from 'ityped'
import { useEffect, useRef } from 'react';
const Header = () => {
	
const textRef = useRef()

useEffect(() => {
	init(textRef.current,{
		backDelay:1500,
		showCursor:true,
		strings:[
			'¡Tenemos las mejores pizzas que podrás encontrar!',
			'Comparte  con tu familia o amigos ',
			'Disfrutar una rica Pizza ',
			'La pizza conecta emociones, conecta personas',
			'Trozos perfectos, precios perfectos, pizzas perfectas'
		]
	})
}, [])
	return (
		<section className="hero ">
			<div className='hero-text'>
			<h1 className='h1'>¡Pizzeria Mamma Mia!</h1>
			<h3>🍕 <span ref={textRef}></span></h3>
			</div>
		</section>
	)
};

export default Header;
