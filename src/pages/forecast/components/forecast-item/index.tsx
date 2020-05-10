import { Props } from "./state-props";
import React from "react";
import moment from "moment";
import "./styles.scss";

const ForecastItem = (props: Readonly<Props>) => {
  return (
    <div className="col-2 forecastItem">
      <span className="forecastItem__day">{moment(props.nameOfDay).format("dddd")}</span>
      <span>Min: {props.minDegree.toFixed(2)}</span>
      <span>Max {props.maxDegree.toFixed(2)}</span>
    </div>
  )
}

export default ForecastItem;