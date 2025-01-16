import React from 'react';
import logo from '../assets/logo.png'; // Update the path to your logo image

function Logo({ width = '150px' }) {
    return <img src={logo} alt="Logo" style={{ width }} />;
}

export default Logo;