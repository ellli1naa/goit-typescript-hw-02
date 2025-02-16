import styled from "styled-components";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const Button = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: #283593;
  }
`;

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick} style={{ display: "block", margin: "20px auto" }}>
      Завантажити ще
    </Button>
  );
};

export default LoadMoreBtn;