import { useRef } from "react";
import styled from "styled-components";

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

const AddImageButton = ({ label }: { label: string }) => {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const onAddButtonClick = () => {
    imageInputRef?.current?.click();
  };

  return (
    <AddButtonContainer onClick={onAddButtonClick}>
      <span>{label}</span>

      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
      />
    </AddButtonContainer>
  );
};

export default AddImageButton;
