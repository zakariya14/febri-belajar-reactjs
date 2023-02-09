import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCheckingAct, increment } from "../../../app/Features/Counter/action";

const Counter = () => {
  let { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="container my-2">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center my-4">
          <button className="btn btn-outline-info btn-sm" onClick={() => dispatch(decrementCheckingAct(1))}>
            -
          </button>
          <span className="me-2 ms-2">{count}</span>
          <button className="btn btn-outline-info btn-sm" onClick={() => dispatch(increment(1))}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
