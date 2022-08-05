import { MouseEvent, ReactElement } from "react";
import { useState } from "react";

function Gallery(props: { picture: any; setPicture: (arg0: number) => void; setLbVisible: (arg0: boolean) => void }) {
    const handleSelectPicture = (e: any) => {
        document.getElementById(`${props.picture}`)?.classList.remove("selected");
        props.setPicture(Number(e.currentTarget.attributes.id.value));
        e.currentTarget.classList.add("selected");
    };

    const openLightbox = () => {
        props.setLbVisible(true);
    };

    return (
        <div className="photos-container">
            <div className="main-photo">
                <img src={`/images/image-product-${props.picture}.jpg`} alt="" onClick={() => openLightbox()} />
            </div>
            <div className="photo-selector">
                <div className="photo">
                    <img src="/images/image-product-1-thumbnail.jpg" alt="" id={"1"} onClick={e => handleSelectPicture(e)} />
                </div>
                <div className="photo">
                    <img src="/images/image-product-2-thumbnail.jpg" alt="" id={"2"} onClick={e => handleSelectPicture(e)} />
                </div>
                <div className="photo">
                    <img src="/images/image-product-3-thumbnail.jpg" alt="" id={"3"} onClick={e => handleSelectPicture(e)} />
                </div>
                <div className="photo">
                    <img src="/images/image-product-4-thumbnail.jpg" alt="" id={"4"} onClick={e => handleSelectPicture(e)} />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
