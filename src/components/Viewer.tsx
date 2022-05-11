import styled from "styled-components";
import URLViewer from "./URLViewer";

const Container = styled.div`
  background-color: #e5e5e5;
  flex: 1;
`;

const Viewer = () => {
  return (
    <Container>
      <URLViewer />
    </Container>
  );
};

export default Viewer;
