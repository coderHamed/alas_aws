import React from 'react';
import menu_data from '../menu-data';
import Link from 'next/link';

const MainMenu = () => {
    return (
        <ul className="mainmenu">
            {menu_data.map((menu, i) => (
                <li key={i} className="has-droupdown"><Link href={`${menu.link}`}>{menu.title}</Link>
                    {menu.mega_menu && 
                        <ul className="mega-menu">
                            {menu.submenus.map((nav, i) => (
                                <li key={i}>
                                    <h6 className="menu-title">{nav.title}</h6>
                                    <ul className="submenu mega-sub-menu-01">
                                        {nav.mega_submenu.map((m, i) => (
                                            <li key={i}>
                                                <Link href={`${m.link}`}>
                                                    <a>{m.title}</a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    }
                </li>
            ))}
        </ul>
    )
}

export default MainMenu;