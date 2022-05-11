import styled from "styled-components";
import useActionCreators from "../hooks/useActionCreators";
import CloseIcon from "../img/closeSmall.png";

interface URLViewerProps {
  contentSrc: string;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

const Content = styled.div`
  width: 800px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CloseButton = styled.img`
  width: 19px;
  height: 19px;
  cursor: pointer;
`;

const Iframe = styled.iframe`
  width: 100%;
  flex: 1;
  border: none;
`;

const URLViewer = ({ contentSrc }: URLViewerProps) => {
  const { setCurrentContent } = useActionCreators();

  const onCloseClick = () => setCurrentContent("");

  return (
    <Container>
      <Header>
        <Content>{contentSrc}</Content>
        <CloseButton src={CloseIcon} alt="close" onClick={onCloseClick} />
      </Header>
      <Iframe src={contentSrc} />
    </Container>
  );
};

export default URLViewer;
