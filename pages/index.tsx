import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Gallery from "../components/gallery";
import Details from "../components/details";
import Navbar from "../components/navbar";
import GalleryMobile from "../components/GalleryMobile";
import Lightbox from "../components/lightbox";

const Home: NextPage = () => {
    const [picture, setPicture] = useState<number>(1);
    const [lbVisible, setLbVisible] = useState(false);
    const [amount, setAmount] = useState(0);
    const [cartAmount, setCartAmount] = useState(0);

    return (
        <>
            <Lightbox picture={picture} setPicture={setPicture} setLbVisible={setLbVisible} lbVisible={lbVisible} />
            <Navbar cartAmount={cartAmount} setCartAmount={setCartAmount} />
            <GalleryMobile picture={picture} setPicture={setPicture} />
            <main>
                <Gallery picture={picture} setPicture={setPicture} setLbVisible={setLbVisible} />
                <Details amount={amount} setAmount={setAmount} cartAmount={cartAmount} setCartAmount={setCartAmount} />
            </main>
        </>
    );
};

export default Home;
