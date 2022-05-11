import styled from "styled-components";
import CloseIcon from "../img/closeSmall.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
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
  height: 100%;
  border: none;
`;

const URLViewer = () => {
  return (
    <Container>
      <Header>
        <Content>http://asdfjlasjdfklajskdl</Content>
        <CloseButton src={CloseIcon} alt="close" />
      </Header>
      <Iframe src="https://www.robinwieruch.de/react-libraries/" />
    </Container>
  );
};

export default URLViewer;