import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import MainMenu from '../headers/component/main-menu';
import HeaderTopRight from '../headers/component/header-top-right';
import SearchPopup from '../../components/common/popup-modal/search-popup';
import useSticky from '../../hooks/use-sticky';
import { wishlistItems } from '../../redux/features/wishlist-slice';
import useCartInfo from '../../hooks/use-cart-info';
import OffCanvas from '../../components/common/sidebar/off-canvas';


const Header = ({ header_style, no_top_bar, disable_full_width, disable_category }) => {
    const { sticky } = useSticky();
    const { quantity } = useCartInfo();
    const wishlists = useSelector(wishlistItems);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className={`edu-header header-style-${header_style ? header_style : '1'} ${ disable_full_width ? 'disbale-header-fullwidth' : 'header-fullwidth' } ${no_top_bar ? 'no-topbar' : ''}`}>
                { ! no_top_bar && 
                    <div className="header-top-bar">
                        <div className="container-fluid">
                            <div className="header-top">
                                <div className="header-top-right">
                                    <HeaderTopRight />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div id="edu-sticky-placeholder"></div>
                <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
                    <div className="container-fluid">
                        <div className="header-navbar">
                            <div className="header-brand">
                                <div className="logo">
                                    <Link href={'/'}>
                                        <a>
                                            <img className="logo-light" src='/assets/images/logo/logo-dark.png' alt="logo" />
                                            <img className="logo-dark" src='/assets/images/logo/logo-white.png' alt="logo" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="header-mainnav">
                                <nav className="mainmenu-nav">
                                    {/* main menu start */}
                                    <MainMenu />
                                    {/* main menu end */}
                                </nav>
                            </div>
                            <div className="header-right">
                                <ul className="header-action">
                                    <li className="search-bar">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search" />
                                            <button className="search-btn" type="button">
                                                <i className="icon-2"></i>
                                            </button>
                                        </div>
                                    </li>
                                    <li className="icon search-icon">
                                        <a style={{cursor:'pointer'}} onClick={() => setIsSearchOpen(true)} className="search-trigger">
                                            <i className="icon-2"></i>
                                        </a>
                                    </li>
                                
                                    <li className="mobile-menu-bar d-block d-xl-none">
                                        <button className="hamberger-button" onClick={() => setIsOpen(true)}>
                                            <i className="icon-54"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Start Search Popup  --> */}
                <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
                {/* <!-- End Search Popup  --> */}
            </header>

            {/* sidebar start */}
            <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* sidebar end */}
        </>
    )
}

export default Header;