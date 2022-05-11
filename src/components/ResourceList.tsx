import { useState } from "react";
import styled from "styled-components";
import ResourceListItem from "./ResourceListItem";

const Container = styled.div`
  width: 280px;
  border-right: 1px solid #c4c4c4;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 50px;
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 10px;
`;

const AddButtonContainer = styled.button`
  width: 125px;
  height: 30px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background-color: white;
  font-size: 12px;
  cursor: pointer;
  margin: 0;
  position: relative;
`;

const TextInputContainer = styled.div<{ isOpen: boolean }>`
  background-color: white;
  position: absolute;
  top: 100%;
  left: 0;
  width: 260px;
  height: 40px;
  margin-top: 2px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const TextInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #38a5e1;
  border-radius: 5px;
`;

const List = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  gap: 10px;
`;

const AddURLButton = ({ label }: { label: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onAddButtonClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <AddButtonContainer onClick={onAddButtonClick}>
      <span>{label}</span>
      <TextInputContainer isOpen={isOpen}>
        <TextInput type="text" />
      </TextInputContainer>
    </AddButtonContainer>
  );
};

const AddImageButton = ({ label }: { label: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onAddButtonClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <AddButtonContainer onClick={onAddButtonClick}>
      <span>{label}</span>
      <TextInputContainer isOpen={isOpen}>
        <TextInput type="text" />
      </TextInputContainer>
    </AddButtonContainer>
  );
};

const ResourceList = () => {
  return (
    <Container>
      <Header>
        <AddURLButton label={"URL 추가"} />
        <AddImageButton label={"이미지 추가"} />
      </Header>
      <List>
        <ResourceListItem />
        <ResourceListItem />
        <ResourceListItem />
      </List>
    </Container>
  );
};

export default ResourceList;
