
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData2 } from "../redux/TestFeature/TestFeatureSlice";

const ReduxTestComponent = () => {
  const temp = useSelector((state: any ) => state.testFeature.data2);

  const dispatch = useDispatch();

  const incrementValue = (newVal: number) => {
    dispatch(setData2(newVal));
  }

  return (
    <div>
        <button onClick={()=>incrementValue(temp+1)}>test</button>
        {temp}
    </div>
  );
};

export {ReduxTestComponent};


