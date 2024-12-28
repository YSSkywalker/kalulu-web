import React from 'react';
import { Link } from 'react-router-dom';
import './Top.css';
import { FaYoutubeSquare, FaLine, FaAngleRight } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";

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
                                    </div>
                                    <div className="row">
                                        <div>
                                            <h1 className="top-name-kalulu black-text countach">Kalulu Yukimaru</h1>
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
                            <div className="profile-box profile-info-block">
                                <p className='profile-name'>雪丸かるる</p>
                                <p className='profile-detail'>会社員をしながらコスプレとYouTubeの活動に勤しんでいる。時間が足りなくて毎晩泣いている。</p>
                                <p className='profile-detail'>A型 6月28日生まれ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='top-works'>
                    <div className='works-contents'></div>
                    <h2 className='title-center'>Works</h2>
                    <h3 className='title-center'>Music</h3>
                    <iframe src="https://open.spotify.com/embed/album/77ITiWghjAZcQYH1ZFEXje?utm_source=generator&theme=0" className='spotify-window' title="Spoify player" width="50%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <h3 className='title-center'>YouTube</h3>
                    <iframe src="https://www.youtube.com/embed/pbF2PD-woPU?si=ZrbIGCIM4GoMWv2y" className='youtube-window' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                </div>
                <div className='top-sns'>
                    <h2 className='title-center'>SNS</h2>
                    <div className='sns-icons'>
                        <a href='https://twitter.com/kalulu_nya' target="_blank" rel="noopener noreferrer" className='twitter-icon sns-icon'><FaXTwitter /></a>
                        <a href='https://www.youtube.com/@KaluluYukimaru' target="_blank" rel="noopener noreferrer" className='youtube-icon sns-icon'><FaYoutubeSquare /></a>
                        <a href='https://lin.ee/9DzGkyr' target="_blank" rel="noopener noreferrer" className='line-icon sns-icon'><FaLine /></a>
                    </div>
                    <div className='sns-banners'>
                        <div className='sns-banners-block'>
                            <a className="btn fantia sns-banner" target="_blank" href="https://fantia.jp/fanclubs/65018" rel="noopener noreferrer" style={{ 'opacity': '1' }}>
                                <img className='sns-banner-img' src={FantiaBanner} alt="Official Fantia"></img>
                            </a>
                            <a className="btn instagram sns-banner" target="_blank" href="https://www.instagram.com/kalulu_nya" rel="noopener noreferrer" style={{ 'opacity': '1' }}>
                                <img className='sns-banner-img' src={InstagramBanner} alt="Official Instagram"></img>
                            </a>
                        </div>
                    </div>
                    <div className='language-link-block'>
                        <p><Link to="/EN" className='language-link vertical-align-middle'>English <FaAngleRight className='vertical-align-middle' /></Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Top