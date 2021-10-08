import React, { useCallback, useState } from 'react'
import ImageViewer from 'react-simple-image-viewer';



const PhotosCollection = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <>
            
            {isViewerOpen && (
                <ImageViewer
                src={ props.photos }
                currentIndex={ currentImage }
                disableScroll={ false }
                closeOnClickOutside={ true }
                onClose={ closeImageViewer }
                />
            )}
            <div className="grid grid-cols-3 md:grid-cols-5  gap-3">
                {props.photos.map((image,index) => (
                    <div className="w-28 h-28 md:w-32 md:h-32  lg:w-52 lg:h-52 overflow-hidden  rounded-lg">
                        <img
                            src={image}
                            alt="menu"
                            className="w-full object-cover  h-full transform transition duration-400 rounded-lg hover:scale-105"
                            onClick={ () => openImageViewer(index) }
                        />
                    </div>
                ))}
                
            </div>
        </>
    )
}

export default PhotosCollection
