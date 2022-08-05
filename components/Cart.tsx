import { ReactElement, JSXElementConstructor, ReactFragment } from "react";

export default function Cart(props: { setCartAmount: (arg0: number) => void; setShowCart: (arg0: boolean) => void; cartAmount: number }) {
    const handleCheckout = () => {
        props.setCartAmount(0);
    };

    return (
        <div className="cart-backdrop" onClick={() => props.setShowCart(false)}>
            <div className="cart-container" onClick={e => e.stopPropagation()}>
                <div className="cart-first-row">Cart</div>
                {props.cartAmount === 0 && (
                    <div className="empty">
                        <p>Your cart is empty</p>
                    </div>
                )}
                {props.cartAmount !== 0 && (
                    <div className="cart-second-row">
                        <div className="cart-info">
                            <img src="/images/image-product-1-thumbnail.jpg" alt="" className="cart-product-pic" />
                            <div className="cart-prod-info">
                                <p className="cart-prod-name">Fall Limited Edition Sneakers</p>
                                <p className="cart-total">
                                    $125.00 x {props.cartAmount} <span>${125 * props.cartAmount}.00</span>
                                </p>
                            </div>
                            <div className="delete">
                                <img src="/images/icon-delete.svg" alt="" onClick={() => props.setCartAmount(0)} />
                            </div>
                        </div>
                        <div className="checkout" onClick={() => handleCheckout()}>
                            <span>Checkout</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
