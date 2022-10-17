import React from 'react';
import './Top.css';
import { FaTwitterSquare, FaYoutubeSquare, FaLine } from "react-icons/fa"

import CornerDecoration from './img/corner-decoration.png'
import ProfileImage from './img/profile-image.JPG'
import FantiaBanner from './img/fantia-banner.png'
import InstagramBanner from './img/instagram-banner.png'

class Top extends React.Component {
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
                                <p className='profile-name'>雪丸かるる</p>
                                <p className='profile-detail'>会社員をしながらコスプレとYouTubeの活動に勤しんでいる。時間が足りなくて毎晩泣いている。</p>
                                <p className='profile-detail'>A型 6月28日生まれ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='top-sns'>
                    <h2 className='title-center'>SNS</h2>
                    <div className='sns-icons'>
                        <a href='https://twitter.com/kalulu_nya' className='twitter-icon sns-icon'><FaTwitterSquare /></a>
                        <a href='http://www.youtube.com/channel/UCUTIT3Kj9mrdyMvR6EEY6IQ?sub_confirmation=1' className='youtube-icon sns-icon'><FaYoutubeSquare /></a>
                        <a href='https://lin.ee/9DzGkyr' className='line-icon sns-icon'><FaLine /></a>
                    </div>
                    <div className='sns-banners'>
                        <div className='sns-banners-block'>
                            <a className="btn fantia sns-banner" target="_blank" href="https://lineblog.me/enakorin/" rel="noopener noreferrer" style={{ 'opacity': '1;' }}>
                                <img className='sns-banner-img' src={FantiaBanner} alt="Official Fantia"></img>
                            </a>
                            <a className="btn instagram sns-banner" target="_blank" href="https://lineblog.me/enakorin/" rel="noopener noreferrer" style={{ 'opacity': '1;' }}>
                                <img className='sns-banner-img' src={InstagramBanner} alt="Official Instagram"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Top