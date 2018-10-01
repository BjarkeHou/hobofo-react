import React from 'react';

import './Header.css';

const Header = () => (
	<div>
		<header className = "header" >
	        <img className="header_logo" src='/HBFLOGO_BW_sort.jpg'  alt = "logo" />
	        <h1 className = "header_title" > Hovedstadens Bordfodboldklub </h1>
        </header>
	</div>
);

export default Header;