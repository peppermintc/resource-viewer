import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../modules";
import URLViewer from "./URLViewer";

const Container = styled.div`
  background-color: #e5e5e5;
  flex: 1;
`;

const Viewer = () => {
  const currentContent = useSelector(
    (state: RootState) => state.resource.currentContent
  );

  return (
    <Container>
      {currentContent !== "" && <URLViewer contentSrc={currentContent} />}
    </Container>
  );
};

export default Viewer;
