import { useRef } from "react";
import styled from "styled-components";
import useActionCreators from "../hooks/useActionCreators";

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

  const { addResource } = useActionCreators();

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!imageInputRef) return;
    if (!e.target) return;
    if (e.target.files === null) return;

    const fileList = e.target.files;

    const updateImageList = () => {
      for (let i = 0; i < fileList.length; i++) {
        const currentFile = fileList[i];

        const fileReader = new FileReader();
        fileReader.onload = () => {
          if (typeof fileReader.result !== "string") return;

          const inputImageUrl: string = fileReader.result;
          addResource(inputImageUrl);
        };

        fileReader.readAsDataURL(currentFile);
      }
    };

    updateImageList();
  };

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
        multiple={true}
        onChange={onFileInputChange}
      />
    </AddButtonContainer>
  );
};

export default AddImageButton;
