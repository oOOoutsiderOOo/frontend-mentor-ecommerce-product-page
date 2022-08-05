import React from "react";

export default function Details(props: { setAmount: (arg0: number) => void; amount: number; setCartAmount: (arg0: any) => void; cartAmount: any }) {
    const handleAmount = (e: any) => {
        e.target.id === "more" ? props.setAmount(props.amount + 1) : props.amount !== 0 ? props.setAmount(props.amount - 1) : null;
    };

    const addToCart = () => {
        props.setCartAmount(props.cartAmount + props.amount);
        props.setAmount(0);
    };

    return (
        <section className="details">
            <h3 className="brand-name">Sneaker Company</h3>
            <h1 className="title">Fall Limited Edition Sneakers</h1>
            <p className="description">
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything
                the weather can offer.
            </p>
            <div className="price">
                <div className="discount-wrapper">
                    <div className="discounted-price">$125.00</div>
                    <div className="discount">50%</div>
                </div>
                <div className="full-price">$250.00</div>
            </div>
            <div className="actions">
                <div className="amount">
                    <div className="less" id="less" onClick={e => handleAmount(e)}>
                        <img src="/images/icon-minus.svg" alt="remove one product from the cart" id="less" />
                    </div>
                    <div className="number">{props.amount}</div>
                    <div className="more" id="more" onClick={e => handleAmount(e)}>
                        <img src="/images/icon-plus.svg" alt="add one product from the cart" id="more" />
                    </div>
                </div>
                <div className="add-to-cart" onClick={() => addToCart()}>
                    <img src="/images/icon-cart.svg" alt="" />
                    <p>Add to cart</p>
                </div>
            </div>
        </section>
    );
}
