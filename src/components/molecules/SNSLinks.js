import React, { Component } from 'react';
import './SNSLinks.css';
import data from './json/snsLinks.json';
import { FaInstagram, FaLine } from 'react-icons/fa';
import { FaXTwitter, FaRegHeart, FaTwitch, FaYoutube, FaCloud, FaTiktok } from "react-icons/fa6";
import { BsHouseDoor } from "react-icons/bs"

import ProfileImage from './img/profile_image_sns_links.jpg'

class SNSLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: []
        };
    }

    componentDidMount() {
        this.setState({ links: data });
    }

    renderIcon(service) {
        switch (service) {
            case 'Home Page':
                return <BsHouseDoor />;
            case 'X':
                return <FaXTwitter />;
            case 'Instagram':
                return <FaInstagram />;
            case 'YouTube':
                return <FaYoutube />;
            case 'LINE':
                return <FaLine />;
            case 'Fantia':
                return <FaRegHeart />;
            case 'Twitch':
                return <FaTwitch />;
            case 'Mixi2':
                return <FaCloud />;
            case 'TikTok':
                return <FaTiktok />;
            default:
                return null;
        }
    }

    render() {
        const { links } = this.state;
        return (
            <div className='sns-section'>
                <div className="container-snslinks">
                    <div className="image-wrapper">
                        <img src={ProfileImage} alt="placeholder" />
                    </div>
                    <p className="image-label">Kalulu Yukimaru</p>
                </div>
                <div className="sns-links">
                    {links.map((link, index) => (
                        <a key={index} href={`${link.link}${link.userId}`} target="_blank" rel="noopener noreferrer" className="sns-item">
                            {this.renderIcon(link.service)}
                            <span>{link.service}</span>
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}

export default SNSLinks;
