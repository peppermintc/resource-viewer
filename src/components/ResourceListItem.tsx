import { ChangeEvent, useState } from "react";
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
  cursor: pointer;
`;

const TextRead = styled.span`
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const TextWrite = styled.input`
  width: 100%;
  height: 30px;
  font-size: 14px;
  border: 1px solid #38a5e1;
  border-radius: 5px;
  background-color: #f7f7f7;
`;

const ResourceListItem = () => {
  const [value, setValue] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const onEditClick = () => {
    setIsEdit((prevIsEdit) => !prevIsEdit);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    setValue(newInputValue);
  };

  return (
    <Container>
      <InputContainer>
        {isEdit && (
          <TextWrite type="text" value={value} onChange={onInputChange} />
        )}
        {!isEdit && <TextRead>{value}</TextRead>}
      </InputContainer>
      <ButtonContainer>
        <img src={EditIcon} alt="edit" onClick={onEditClick} />
        <img src={TrashIcon} alt="delete" />
      </ButtonContainer>
    </Container>
  );
};

export default ResourceListItem;
