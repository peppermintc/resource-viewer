import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as communityActionCreators from "../modules/resource";

const useActionCreators = () => {
  const dispatch = useDispatch();

  const {
    setResourceList,
    changeResourceListItem,
    setCurrentContent,
    addResource,
    deleteResource,
  } = useMemo(
    () => bindActionCreators(communityActionCreators, dispatch),
    [dispatch]
  );

  return {
    setResourceList,
    changeResourceListItem,
    setCurrentContent,
    addResource,
    deleteResource,
  };
};

export default useActionCreators;
