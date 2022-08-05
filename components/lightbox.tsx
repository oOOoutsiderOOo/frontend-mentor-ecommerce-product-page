import { MouseEvent, useEffect, useRef } from "react";

export default function Lightbox(props: {
    setLbVisible: (arg0: boolean) => void;
    picture: number;
    lbVisible: unknown;
    setPicture: (arg0: number) => void;
}) {
    const lb: any = useRef(null);

    const handleClose = () => {
        props.setLbVisible(false);
        document.getElementById(`${props.picture}b`)?.classList.remove("selected");
    };

    useEffect(() => {
        lb.current.classList.toggle("hidden");
    }, [props.lbVisible]);

    const handleSelectPicture = (e: any) => {
        document.getElementById(`${props.picture}b`)?.classList.remove("selected");
        props.setPicture(Number(e.target.attributes.id.value[0]));
        e.target.classList.add("selected");
        console.log(e);
    };

    const nextPic = () => {
        if (props.picture === 4) {
            document.getElementById(`${props.picture}b`)?.classList.remove("selected");
            props.setPicture(1);
            document.getElementById(`1b`)?.classList.add("selected");
        } else {
            document.getElementById(`${props.picture}b`)?.classList.remove("selected");
            document.getElementById(`${props.picture + 1}b`)?.classList.add("selected");
            props.setPicture(props.picture + 1);
        }
    };

    const previousPic = () => {
        if (props.picture === 1) {
            document.getElementById(`${props.picture}b`)?.classList.remove("selected");
            props.setPicture(4);
            document.getElementById(`4b`)?.classList.add("selected");
        } else {
            document.getElementById(`${props.picture}b`)?.classList.remove("selected");
            document.getElementById(`${props.picture - 1}b`)?.classList.add("selected");
            props.setPicture(props.picture - 1);
        }
    };

    return (
        <div className="lb-backdrop hidden" ref={lb} onClick={() => handleClose()}>
            <div className="lb-container" onClick={e => e.stopPropagation()}>
                <img src="/images/icon-close.svg" alt="" className="lb-close-btn" onClick={() => handleClose()} />
                <div className="lb-main-picture-container">
                    <div className="lb-previous" onClick={() => previousPic()}>
                        <img src="/images/icon-previous.svg" alt="" />
                    </div>
                    <img src={`/images/image-product-${props.picture}.jpg`} alt="" className="lb-main-picture" />
                    <div className="lb-next" onClick={() => nextPic()}>
                        <img src="/images/icon-next.svg" alt="" />
                    </div>
                </div>
                <div className="lb-photo-selector">
                    <div className="lb-photo">
                        <img src="/images/image-product-1-thumbnail.jpg" alt="" id="1b" onClick={e => handleSelectPicture(e)} />
                    </div>
                    <div className="lb-photo">
                        <img src="/images/image-product-2-thumbnail.jpg" alt="" id="2b" onClick={e => handleSelectPicture(e)} />
                    </div>
                    <div className="lb-photo">
                        <img src="/images/image-product-3-thumbnail.jpg" alt="" id="3b" onClick={e => handleSelectPicture(e)} />
                    </div>
                    <div className="lb-photo">
                        <img src="/images/image-product-4-thumbnail.jpg" alt="" id="4b" onClick={e => handleSelectPicture(e)} />
                    </div>
                </div>
            </div>
        </div>
    );
}
