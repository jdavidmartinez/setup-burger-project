import React from 'react';

import burgerLogo from '../../assests/images/Logopeque.png'

import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo} >
        <img src={burgerLogo} alt="My burger" ></img>
    </div>
);

export default logo;