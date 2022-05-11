import styled from "styled-components";
import ResourceList from "./components/ResourceList";
import Viewer from "./components/Viewer";

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
`;

const App = () => {
  return (
    <Page>
      <ResourceList />
      <Viewer />
    </Page>
  );
};

export default App;
