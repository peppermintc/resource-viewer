import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  height: 30px;
  background-color: #38a5e1;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: white;
  padding: 20px;
`;

const Toast = () => {
  return <Container>Invalid URL Resource</Container>;
};

export default Toast;
