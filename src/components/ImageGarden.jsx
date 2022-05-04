import React, { useState } from "react";
import { photos } from "../assets/Photos";
import ImageModal from "./ImageModal";
import Heading from "./Reusables/Heading";

const ImageGarden = () => {
    const [currentImage, setCurrentImage] = useState("");
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const handleClose = () => {
        setViewerIsOpen(false);
    }

    return (
        <div className="flex flex-col w-full justify-between px-4 md:px-8 lg:px-20 relative" id="gallery">
            <Heading heading5="Images" heading1="Explore our Gallery" />
            <div className="w-full flex flex-wrap gap-x-1 gap-y-1 py-4">
                {
                    photos.map((photo, index) => (
                        <img className="h-52 w-auto object-fit object-top" src={photo.src} alt="Gallery" key={index} onClick={() => {setCurrentImage(photo.src); setViewerIsOpen(true);}} />
                    ))
                }
            </div>
            {
                viewerIsOpen && (<ImageModal img={currentImage} handleClose={handleClose} />)
            }
        </div>
    );
}

export default ImageGarden