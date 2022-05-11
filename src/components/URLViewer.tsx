import styled from "styled-components";
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
  align-items: center;
  padding: 0 15px;
`;

const Content = styled.div`
  flex: 1;
  font-size: 14px;
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
  return (
    <Container>
      <Header>
        <Content>{contentSrc}</Content>
        <CloseButton src={CloseIcon} alt="close" />
      </Header>
      <Iframe src={contentSrc} />
    </Container>
  );
};

export default URLViewer;
