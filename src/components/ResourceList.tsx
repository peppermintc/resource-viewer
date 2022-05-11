import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../modules";
import AddImageButton from "./AddImageButton";
import AddURLButton from "./AddURLButton";
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
  const resourceList = useSelector(
    (state: RootState) => state.resource.resourceList
  );

  return (
    <Container>
      <Header>
        <AddURLButton label={"URL 추가"} />
        <AddImageButton label={"이미지 추가"} />
      </Header>
      <List>
        {resourceList.map((item, index) => (
          <ResourceListItem key={index} item={item} index={index} />
        ))}
      </List>
    </Container>
  );
};

export default ResourceList;
