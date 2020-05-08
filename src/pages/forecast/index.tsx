import React from "react";
import { IRootReducers } from "../../store/store.reducers";
import { IActionTyped } from "../../models";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { FormControl, Form, Button } from "react-bootstrap";
import ForecastItem from "./components/forecast-item";
import forecastActions from "../../store/forecast/forecast.actions";
import { State, Props } from './state-props';

class Forecast extends React.Component<Props, State> {

  /**
   *
   */
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      location: ""
    }
  }

  clearTimeout: any
  onEnterSubmit = (e: any) => {
    clearTimeout(this.clearTimeout)
    this.clearTimeout = setTimeout(() => {
      this.props.filterLocation(this.state.location)
    }, 300);
  }

  render() {
    return (
      <div>
        <div className="form-inline">
          <FormControl type="text" placeholder="Search" className="mr-sm-2"
            onKeyPress={this.onEnterSubmit}
          />
          <Button variant="outline-success" type="button" onClick={this.onEnterSubmit}>Search</Button>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (rootReducer: IRootReducers) => ({})
const mapDispatchToProps = (dispatch: Dispatch<IActionTyped>) => ({
  filterLocation: (location: string) => dispatch(forecastActions.filterLocation(location))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forecast);