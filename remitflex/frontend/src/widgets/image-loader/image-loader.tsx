import { useRef, useEffect, useState } from "react";
import { ImageLoaderWrapper } from "./image-loader.styles";

interface ImageLazyLoadProps {
  src: string;
  alt: string;
}

function ImageLazyLoad({ src, alt }: ImageLazyLoadProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.unobserve(imageRef.current!);
        }
      },
      { rootMargin: "0px 0px 100px 0px" }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <ImageLoaderWrapper>
      <div className={`lazy-image-container ${isVisible ? " visible" : ""}`}>
        <div className={`loading-overlay ${isLoading ? " visible" : ""}`}>
          <div className="loading-card"></div>
        </div>

        <img
          ref={imageRef}
          src={isVisible ? src : ""}
          alt={alt}
          className={`lazy-image ${isVisible ? " visible" : ""}`}
          onLoad={handleImageLoad}
        />
      </div>
    </ImageLoaderWrapper>
  );
}

export default ImageLazyLoad;
