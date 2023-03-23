import Link from 'next/link';
import React from 'react';

const social_share = [
    { link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook' },
    { link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter' },
    { link: 'https://www.linkedin.com/', target: '_blank', icon: 'icon-linkedin2' },
    { link: 'https://www.instagram.com/', target: '_blank', icon: 'icon-instagram' }
]

const HeaderTopRight = () => {
    return (
        <ul className="header-info">
            <li><a href="tel:+011235641231"><i className="icon-phone"></i>Call: +994559567868</a></li>
            <li><a href="mailto:info@edublink.com" rel="noreferrer" target="_blank"><i className="icon-envelope"></i>Email: alasacademy@gmail.com</a></li>
            <li className="social-icon">
                {social_share.map((social, i) => (
                    <a key={i} href={social.link} target={social.target ? social.target : ''} className={`${social.color}`}>
                        <i className={social.icon}></i>
                    </a>
                ))}
            </li>
        </ul>
    )
}

export default HeaderTopRight;