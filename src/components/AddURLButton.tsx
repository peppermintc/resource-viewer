import { ChangeEvent, useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import useActionCreators from "../hooks/useActionCreators";

interface AddURLButtonProps {
  label: string;
}

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

const TextInputContainer = styled.div<{ isOpen?: boolean }>`
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

const AddURLButton = ({ label }: AddURLButtonProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>();

  const { addResource } = useActionCreators();

  const onAddButtonClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  useEffect(() => {
    if (value === undefined) return;
    if (isOpen === false) {
      addResource(value);
      setValue("");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <AddButtonContainer onClick={onAddButtonClick}>
      <span>{label}</span>
      <TextInputContainer isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <TextInput type="text" onChange={onInputChange} value={value} />
      </TextInputContainer>
    </AddButtonContainer>
  );
};

export default AddURLButton;
