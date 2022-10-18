import React from 'react';
import './NotFound.css';
import Image404 from './img/404.png'

class NotFound extends React.Component {
    render() {
        return (
            <div className='not-found-body'>
                <h2 className='not-found-title'>404 Not Found</h2>
                <div className='not-found-detail'>
                    <p>The page you looking for doesn't exist or another error occured.</p>
                </div>
                <img src={Image404} className='image-404' alt='not found'></img>
            </div>
        );
    }
}

export default NotFound