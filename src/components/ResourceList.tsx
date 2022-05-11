import styled from "styled-components";
import ResourceListItem from "./ResourceListItem";

const Container = styled.div`
  width: 280px;
  border-right: 1px solid #c4c4c4;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 50px;
  border-bottom: 1px solid #c4c4c4;
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 10px;
`;

const AddButton = styled.button`
  width: 125px;
  height: 30px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background-color: white;
  font-size: 12px;
  cursor: pointer;
  margin: 0;
`;

const List = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  gap: 10px;
`;

const ResourceList = () => {
  return (
    <Container>
      <Header>
        <AddButton>URL 추가</AddButton>
        <AddButton>이미지 추가</AddButton>
      </Header>
      <List>
        <ResourceListItem />
        <ResourceListItem />
        <ResourceListItem />
      </List>
    </Container>
  );
};

export default ResourceList;
