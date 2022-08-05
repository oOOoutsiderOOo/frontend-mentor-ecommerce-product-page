export default function GalleryMobile(props) {
    const nextPic = () => {
        props.picture === 4 ? props.setPicture(1) : props.setPicture(props.picture + 1);
    };

    const previousPic = () => {
        props.picture === 1 ? props.setPicture(4) : props.setPicture(props.picture - 1);
    };

    return (
        <div className="m-gallery-container">
            <div className="mg-previous" onClick={() => previousPic()}>
                <img src="/images/icon-previous.svg" alt="" />
            </div>
            <img src={`/images/image-product-${props.picture}.jpg`} alt="" className="mg-main-picture" />
            <div className="mg-next" onClick={() => nextPic()}>
                <img src="/images/icon-next.svg" alt="" />
            </div>
        </div>
    );
}
