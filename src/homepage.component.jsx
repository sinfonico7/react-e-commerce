import React from 'react';
import './homepage.styles.scss';
const HomePage = () => {
    return(
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Hat</h1>
                        <span className='subtitle'>Shop Now!</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Snakers</h1>
                        <span className='subtitle'>Shop Now!</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Women's Cloth</h1>
                        <span className='subtitle'>Shop Now!</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Men's Cloth</h1>
                        <span className='subtitle'>Shop Now!</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Sockets</h1>
                        <span className='subtitle'>Shop Now!</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;