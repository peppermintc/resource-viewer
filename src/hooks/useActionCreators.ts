import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as communityActionCreators from "../modules/resource";

const useActionCreators = () => {
  const dispatch = useDispatch();

  const { setResourceList } = useMemo(
    () => bindActionCreators(communityActionCreators, dispatch),
    [dispatch]
  );

  return {
    setResourceList,
  };
};

export default useActionCreators;
