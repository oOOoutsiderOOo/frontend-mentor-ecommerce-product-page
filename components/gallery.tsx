import { MouseEvent, ReactElement } from "react";
import { useState } from "react";

function Gallery(props: any) {
    const handleSelectPicture = (e: MouseEvent<HTMLImageElement, MouseEvent>) => {
        document.getElementById(`${props.picture}`)?.classList.remove("selected");
        props.setPicture(Number(e.target.attributes.id.value));
        e.target.classList.add("selected");
        console.log(e);
    };

    const openLightbox = () => {
        props.setLbVisible("true");
    };

    return (
        <div className="photos-container">
            <div className="main-photo">
                <img src={`/images/image-product-${props.picture}.jpg`} alt="" onClick={() => openLightbox()} />
            </div>
            <div className="photo-selector">
                <div className="photo">
                    <img src="/images/image-product-1-thumbnail.jpg" alt="" id={1} onClick={e => handleSelectPicture(e)} />
                </div>
                <div className="photo">
                    <img src="/images/image-product-2-thumbnail.jpg" alt="" id={2} onClick={e => handleSelectPicture(e)} />
                </div>
                <div className="photo">
                    <img src="/images/image-product-3-thumbnail.jpg" alt="" id={3} onClick={e => handleSelectPicture(e)} />
                </div>
                <div className="photo">
                    <img src="/images/image-product-4-thumbnail.jpg" alt="" id={4} onClick={e => handleSelectPicture(e)} />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
