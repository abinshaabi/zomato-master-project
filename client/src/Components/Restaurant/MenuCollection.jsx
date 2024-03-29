import React, { useState } from 'react'

import ImageViewer from 'react-simple-image-viewer';

const MenuCollection = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    
  
    const openImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(true);
    };
  
    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };


    return (
        <>
            {isViewerOpen && (
                <ImageViewer
                src={ props.image }
                currentIndex={ currentImage }
                disableScroll={ false }
                closeOnClickOutside={ true }
                onClose={ closeImageViewer }
                />
            )}
            <div className="w-32 h-32 md:w-48 flex flex-col md:h-48">
                <div className="w-full h-full overflow-hidden  rounded-lg">
                    <img
                        src={props.image[0]}
                        alt="menu"
                        className="w-full h-full transform transition duration-400 rounded-lg hover:scale-110"
                        onClick={ () => openImageViewer() }
                    />
                </div>
                <div>
                    <strong className="font-medium">{props.menuTitle}</strong>
                    <p className="text-xs">{props.image.length} Pages</p>
                </div>
            </div>
        </>
    )
}

export default MenuCollection
