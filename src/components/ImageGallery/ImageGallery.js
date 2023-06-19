import React from "react";
import Gallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGallery.css";

const RenderVideo = (url) => {
    return (
        <div>
            <iframe
                width="100%"
                height="600"
                src={url}
                title="Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </div>
    );
};

export const ImageGallery = (props) => {
    const imageList = props?.images?.map((image) => {
        return {
            original: image,
            thumbnail: image,
            ...(image?.includes?.("http")
                ? { embedUrl: image, renderItem: () => RenderVideo(image) }
                : {}),
        };
    });

    return (
        <div>
            <Gallery items={imageList} showBullets showThumbnails={false} />
        </div>
    );
};
