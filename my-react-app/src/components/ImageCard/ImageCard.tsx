import styled from "styled-components";

interface ImageGalleryItemProps {
  smallImage: string;
  largeImage: string;
  alt: string;
  onClick: (url: string) => void;
}

const Card = styled.li`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
`;

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({ smallImage, largeImage, alt, onClick }) => {
  return (
    <Card onClick={() => onClick(largeImage)}>
      <Img src={smallImage} alt={alt} />
    </Card>
  );
};

export default ImageGalleryItem;