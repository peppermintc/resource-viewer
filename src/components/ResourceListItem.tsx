import styled from "styled-components";
import EditIcon from "../img/editIcon.png";
import TrashIcon from "../img/trashIcon.png";

const Container = styled.div`
  background-color: white;
  width: 260px;
  height: 90px;
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  gap: 8px;
`;

const ResourceListItem = () => {
  return (
    <Container>
      <InputContainer>
        <input type="text" />
      </InputContainer>
      <ButtonContainer>
        <img src={EditIcon} alt="edit" />
        <img src={TrashIcon} alt="delete" />
      </ButtonContainer>
    </Container>
  );
};

export default ResourceListItem;
