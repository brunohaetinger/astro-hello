import React, { useState, useEffect } from "react";

export default function LazyImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const handleVisibility = () => {
      setImageSrc(src); // Only set the image src when the component is visible
    };

    requestIdleCallback(handleVisibility); // Uses browser idle time to load

    return () => cancelIdleCallback(handleVisibility);
  }, [src]);

  return (
    <div className="image-container">
      {!loaded && <p>Loading image...</p>}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          onLoad={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            width: "100%",
            height: "auto",
          }}
        />
      )}
    </div>
  );
}
