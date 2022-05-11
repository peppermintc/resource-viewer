/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useActionCreators from "../hooks/useActionCreators";
import EditIcon from "../img/editIcon.png";
import TrashIcon from "../img/trashIcon.png";
import { RootState } from "../modules";

interface ResourceListItemProps {
  item: string;
  index: number;
}

const Container = styled.div<{ isSelected: boolean }>`
  background-color: white;
  width: 260px;
  height: 90px;
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 1px solid ${({ isSelected }) => (isSelected ? "#38A5E1" : "none")};
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

const ResourceListItem = ({ item, index }: ResourceListItemProps) => {
  const [value, setValue] = useState<string>("");
  const [modifiedValue, setModifiedValue] = useState<string | undefined>();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const currentContent = useSelector(
    (state: RootState) => state.resource.currentContent
  );
  const { changeResourceListItem, deleteResource, setCurrentContent } =
    useActionCreators();

  const isSelected = currentContent === item;

  const onEditClick = () => {
    setIsEdit((prevIsEdit) => !prevIsEdit);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    setValue(newInputValue);
  };

  const onDeleteClick = () => {
    deleteResource(index);
  };

  const onContainerClick = () => {
    setCurrentContent(item);
  };

  useEffect(() => {
    setValue(item);
  }, [item]);

  useEffect(() => {
    setModifiedValue(value);
  }, [value]);

  useEffect(() => {
    if (modifiedValue === undefined) return;
    if (isEdit === false) changeResourceListItem(index, modifiedValue);
  }, [isEdit, modifiedValue]);

  return (
    <Container onClick={onContainerClick} isSelected={isSelected}>
      <InputContainer>
        {isEdit && (
          <TextWrite type="text" value={value} onChange={onInputChange} />
        )}
        {!isEdit && <TextRead>{value}</TextRead>}
      </InputContainer>
      <ButtonContainer>
        <img src={EditIcon} alt="edit" onClick={onEditClick} />
        <img src={TrashIcon} alt="delete" onClick={onDeleteClick} />
      </ButtonContainer>
    </Container>
  );
};

export default ResourceListItem;
