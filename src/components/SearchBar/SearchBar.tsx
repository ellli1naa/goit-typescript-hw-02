import { useState } from "react";
import styled from "styled-components";

interface SearchbarProps {
  onSubmit: (query: string) => void;
}

const Header = styled.header`
  background-color: #3f51b5;
  padding: 15px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 250px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  background-color: #ff9800;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #e68900;
  }
`;

const Searchbar: React.FC<SearchbarProps> = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;
    onSubmit(searchTerm);
    setSearchTerm("");
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Пошук зображень..."
        />
        <Button type="submit">🔍</Button>
      </Form>
    </Header>
  );
};

export default Searchbar;