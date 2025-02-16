import ImageGalleryItem from "../ImageCard/ImageCard";
import { UnsplashPhoto } from "../../api/photos-api";
import styled from "styled-components";

interface ImageGalleryProps {
  images: UnsplashPhoto[];
  onImageClick: (url: string) => void;
}

const Gallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 15px;
  padding: 20px;
  list-style: none;
  justify-content: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); 
  }
`;

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <Gallery>
      {images.map(({ id, urls, alt_description }) => (
        <ImageGalleryItem
          key={id}
          smallImage={urls.small}
          largeImage={urls.regular}
          alt={alt_description}
          onClick={onImageClick}
        />
      ))}
    </Gallery>
  );
};

export default ImageGallery;