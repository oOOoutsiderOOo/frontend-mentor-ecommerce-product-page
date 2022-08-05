import { useState, useRef } from "react";
import Cart from "../components/Cart";

function Navbar(props) {
    const [showCart, setShowCart] = useState(false);
    const mobileMenu = useRef(null);

    const openMenu = () => {
        mobileMenu.current.classList.remove("hidden");
        setTimeout(() => {
            mobileMenu.current.classList.remove("mm-hidden");
        }, 200);
    };

    const closeMenu = () => {
        mobileMenu.current.classList.add("mm-hidden");
        setTimeout(() => {
            mobileMenu.current.classList.add("hidden");
        }, 200);
    };

    return (
        <>
            <nav>
                <div className="mm-wrapper mm-hidden hidden" ref={mobileMenu}>
                    <div className="mobile-menu ">
                        <div className="mb-close">
                            <img src="/images/icon-close.svg" alt="logo" onClick={() => closeMenu()} />
                        </div>
                        <div className="mm-links">
                            <div className="mm-link-box">
                                <a href="#">Collections</a>
                            </div>
                            <div className="mm-link-box">
                                <a href="#">Men</a>
                            </div>
                            <div className="mm-link-box">
                                <a href="#">Women</a>
                            </div>
                            <div className="mm-link-box">
                                <a href="#">About</a>
                            </div>
                            <div className="mm-link-box">
                                <a href="#">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hamburger-menu">
                    <img src="/images/icon-menu.svg" alt="" onClick={() => openMenu()} />
                </div>
                <div className="logo">
                    <img src="/images/logo.svg" alt="logo" />
                </div>
                <div className="links">
                    <div className="link-box">
                        <a href="#">Collections</a>
                    </div>
                    <div className="link-box">
                        <a href="#">Men</a>
                    </div>
                    <div className="link-box">
                        <a href="#">Women</a>
                    </div>
                    <div className="link-box">
                        <a href="#">About</a>
                    </div>
                    <div className="link-box">
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="menus">
                    <div className="cart" onClick={() => setShowCart(!showCart)}>
                        {props.cartAmount !== 0 && <div className="amount-in-cart">{props.cartAmount}</div>}
                        <img src="/images/icon-cart.svg" alt="" />
                    </div>
                    <div className="user">
                        <img src="/images/image-avatar.png" alt="" />
                    </div>
                </div>
            </nav>
            {showCart && <Cart setShowCart={setShowCart} cartAmount={props.cartAmount} setCartAmount={props.setCartAmount} />}
        </>
    );
}

export default Navbar;
