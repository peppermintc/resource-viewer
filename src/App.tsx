import { useSelector } from "react-redux";
import styled from "styled-components";
import ResourceList from "./components/ResourceList";
import Toast from "./components/Toast";
import Viewer from "./components/Viewer";
import { RootState } from "./modules";

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
`;

const App = () => {
  const showToast = useSelector((state: RootState) => state.resource.showToast);

  return (
    <Page>
      <ResourceList />
      <Viewer />
      {showToast && <Toast />}
    </Page>
  );
};

export default App;
