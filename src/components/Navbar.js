import React, {useEffect , useState} from 'react';
import '../css/nav.css';

const Navbar = () => {
	
	const [show, setShow] = useState(false);
	
	useEffect(()=> {
		const fun = () => {
			if(window.scrollY > 100) {
				setShow(true);
			} else {
				setShow(false);
			}
		}
		window.addEventListener("scroll", fun);
		return () => {
			window.removeEventListener("scroll", fun);
		}
	},[]);
	
	return (
		<nav className={`nav ${show && "nav-black"}`}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="NETFLIX" />
		</nav>
	)
};

export default Navbar;