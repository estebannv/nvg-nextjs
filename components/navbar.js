import Link from 'next/link';

export default function Navbar() {
    return (
        
        <header id="site-header" className="site-header site-header-onepage bg-dark-1">
            <div className="octf-main-header is-fixed">
                <div className="octf-area-wrap">
                    <div className="container octf-mainbar-container">
                        <div className="octf-mainbar">
                            <div className="octf-mainbar-row octf-row">
                                <div className="octf-col logo-col">
                                    <div id="site-logo" className="site-logo">
                                        <a href="index.html">

                                        </a>
                                    </div>
                                </div>
                                <div className="octf-col menu-col justify-content-end">
                                    <nav id="site-navigation" className="main-navigation">
                                        <ul className="menu">
                                            <li><Link className="scroll-target" href="/">Inicio</Link></li>
                                            <li><Link className="scroll-target" href="/projects">Proyectos</Link></li>
                                            <li><Link className="scroll-target" href="/about">Nosotros</Link></li>
                                            <li><Link className="scroll-target" href="/contact">Contacto</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_mobile">
                <div className="container">
                    <div className="octf-mainbar-row octf-row">
                        <div className="octf-col">
                            <div className="mlogo_wrapper clearfix">
                                <div className="mobile_logo">
                                    <a href="index.html">
                                        
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="octf-col justify-content-end">
                            <div className="octf-menu-mobile octf-cta-header pr-0">
                                <div id="mmenu-toggle" className="mmenu-toggle">
                                    <button><i className="ot-flaticon-menu"></i></button>
                                </div>
                                <div className="site-overlay mmenu-overlay"></div>
                                <div id="mmenu-wrapper" className="mmenu-wrapper on-right">
                                    <div className="mmenu-inner">
                                        <a className="mmenu-close" href="#"><i className="ot-flaticon-right-arrow"></i></a>
                                        <div className="mobile-nav">
                                            <ul id="menu-main-menu" className="mobile_mainmenu none-style">
                                                <li><Link className="scroll-target" href="/">Inicio</Link></li>
                                                <li><Link className="scroll-target" href="/projects">Proyectos</Link></li>
                                                <li><Link className="scroll-target" href="/about">Nosotros</Link></li>
                                                <li><Link className="scroll-target" href="/contact">Contacto</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}