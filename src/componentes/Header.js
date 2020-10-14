import React from 'react';

const Header = (props) => {
    return (
        <div>
            <nav>
                <div className='nav-wrapper light-gray darken-2'>
                    <div className='brand-logo'>{props.titulo}</div>
                </div>
            </nav>
        </div>
    );
};

export default Header;