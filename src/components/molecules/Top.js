import React from 'react';
import './Top.css';

import CornerDecoration from './img/corner-decoration.png'

class Top extends React.Component {
    render() {
        return (
            <div>
                <div class="top-body top-background">
                    <div class="outer-border">
                        <div class="mid-border">
                            <div class="inner-border">
                                <img class="corner-decoration corner-left-top" alt='corner decoration' src={CornerDecoration}></img>
                                <img class="corner-decoration corner-right-top" alt='corner decoration' src={CornerDecoration}></img>
                                <img class="corner-decoration corner-right-bottom" alt='corner decoration' src={CornerDecoration}></img>
                                <img class="corner-decoration corner-left-bottom" alt='corner decoration' src={CornerDecoration}></img>
                                <img class="vertical-decoration top" alt='edge decoration' src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"></img>
                                <img class="vertical-decoration bottom" alt='edge decoration' src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"></img>

                                {/* <!-- Page Content --> */}
                                <div class="container">
                                    <div class="row social-row">
                                        {/* <a href="#" target="_blank" class="d-none" style="background-image: url(https://i.ibb.co/k0JQYv4/instagram-social-button.png)"></a> */}

                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 text-center">
                                            {/* <img class="logo" src="https://i.ibb.co/J2tzs0F/five-bells-logo.png" alt="Five Bells logo"></img> */}
                                            <h1 class="text-uppercase black-text countach top-name-kalulu">Kalulu Yukimaru</h1>
                                            {/* <p class="lead skintone-text">
                                                <span class="name skintone-text countach">Add your own washed</span>
                                                <span class="place skintone-text tilda-petite">Creative Logo</span>
                                            </p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Top