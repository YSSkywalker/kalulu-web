import React from 'react';
import { Link } from 'react-router-dom';
import './Top.css';
import { FaTwitterSquare, FaYoutubeSquare, FaLine, FaAngleRight } from "react-icons/fa"

import CornerDecoration from './img/corner-decoration.png'
import ProfileImage from './img/profile-image.JPG'
import FantiaBanner from './img/fantia-banner.png'
import InstagramBanner from './img/instagram-banner.png'

class EN extends React.Component {
    render() {
        return (
            <div>
                <div className="top-body top-background">
                    <div className="outer-border">
                        <div className="mid-border">
                            <div className="inner-border">
                                <img className="corner-decoration corner-left-top" alt='corner decoration' src={CornerDecoration}></img>
                                <img className="corner-decoration corner-right-top" alt='corner decoration' src={CornerDecoration}></img>
                                <img className="corner-decoration corner-right-bottom" alt='corner decoration' src={CornerDecoration}></img>
                                <img className="corner-decoration corner-left-bottom" alt='corner decoration' src={CornerDecoration}></img>
                                <img className="vertical-decoration top" alt='edge decoration' src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"></img>
                                <img className="vertical-decoration bottom" alt='edge decoration' src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"></img>

                                {/* <!-- Page Content --> */}
                                <div className="container">
                                    <div className="row social-row">
                                        {/* <a href="#" target="_blank" class="d-none" style="background-image: url(https://i.ibb.co/k0JQYv4/instagram-social-button.png)"></a> */}

                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 text-center">
                                            {/* <img class="logo" src="https://i.ibb.co/J2tzs0F/five-bells-logo.png" alt="Five Bells logo"></img> */}
                                            <h1 className="text-uppercase black-text countach top-name-kalulu">Kalulu Yukimaru</h1>
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
                <div className='top-profile'>
                    <div className='top-profile-contents'>
                        <h2 className='title-center'>Profile</h2>
                        <div className='flex'>
                            <div className='profile-image-block'>
                                <section>
                                    <p className='dots-background'><img src={ProfileImage} alt="profile" className='profile-image'></img></p>
                                </section>
                            </div>
                            <div class="profile-box profile-info-block">
                                <p className='profile-name'>Kalulu Yukimaru</p>
                                <p className='profile-detail'>She works as an office worker and works on her cosplay and YouTube activities. She cries every night about the lack of time.</p>
                                <p className='profile-detail'>Born on June 28th</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='top-works'>
                    <div className='works-contents'></div>
                        <h2 className='title-center'>Works</h2>
                    <iframe src="https://www.youtube.com/embed/DEVZRDsSsNA" className='youtube-window' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
                <div className='top-sns'>
                    <h2 className='title-center'>SNS</h2>
                    <div className='sns-icons'>
                        <a href='https://twitter.com/kaluluyukimaru' target="_blank" rel="noopener noreferrer" className='twitter-icon sns-icon'><FaTwitterSquare /></a>
                        <a href='http://www.youtube.com/channel/UCUTIT3Kj9mrdyMvR6EEY6IQ?sub_confirmation=1' target="_blank" rel="noopener noreferrer" className='youtube-icon sns-icon'><FaYoutubeSquare /></a>
                        <a href='https://lin.ee/9DzGkyr' target="_blank" rel="noopener noreferrer" className='line-icon sns-icon'><FaLine /></a>
                    </div>
                    <div className='sns-banners'>
                        <div className='sns-banners-block'>
                            <a className="btn fantia sns-banner" target="_blank" href="https://fantia.jp/fanclubs/65018" rel="noopener noreferrer" style={{ 'opacity': '1;' }}>
                                <img className='sns-banner-img' src={FantiaBanner} alt="Official Fantia"></img>
                            </a>
                            <a className="btn instagram sns-banner" target="_blank" href="https://www.instagram.com/kalulu_nya" rel="noopener noreferrer" style={{ 'opacity': '1;' }}>
                                <img className='sns-banner-img' src={InstagramBanner} alt="Official Instagram"></img>
                            </a>
                        </div>
                    </div>
                    <div className='language-link-block'>
                        <p><Link to="/" className='language-link vertical-align-middle'>日本語 <FaAngleRight className='vertical-align-middle' /></Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default EN