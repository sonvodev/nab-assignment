import React from "react";
import { IRootReducers } from "../../store/store.reducers";
import { IActionTyped, ILocationListing } from "../../models";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import ForecastItem from "./components/forecast-item";
import forecastActions from "../../store/forecast/forecast.actions";
import { State, Props } from './state-props';
import { AsyncTypeahead as Autocomplete } from "react-bootstrap-typeahead";
import { ActivityStatus } from "../../common";

class Forecast extends React.Component<Props, State> {

  /**
   *
   */
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      location: "",
      selectedLocation: [],
    }
  }

  clearTimeout: any
  onEnterSubmit = (e: any) => {
    clearTimeout(this.clearTimeout)
    this.clearTimeout = setTimeout(() => {
      this.props.filterLocation!(this.state.location)
    }, 300);
  }

  clearTimeoutWorker = (callback: Function, debound: number = 300) => {
    clearTimeout(this.clearTimeout)
    this.clearTimeout = setTimeout(callback, 300);
  }

  handleSearch = (query: string) => {
    this.clearTimeoutWorker(() => {
      this.setState({ location: query }, () => {
        if (query.length >= 2) {
          this.props.filterLocation!(query)
        }
      })
    })
  }

  handleSelectingLocation = (selectedItem: ILocationListing[]) => {
    this.props.fetchForecast!(selectedItem[0]);
  }


  componentDidMount() {
    this.props.fetchForecast!(this.props.storeDefaultLocation!.payload!);
  }

  render() {

    const { payload: options, activity } = this.props.storeLocations!;
    const isLoading = activity === ActivityStatus.Loading;
    const { payload: forecast } = this.props.storeForecast!;

    return (
      <div>
        <div className="form-inline">
          <Autocomplete
            options={options!}
            isLoading={isLoading}
            id="filter-location"
            labelKey="title"
            onSearch={this.handleSearch}
            onChange={this.handleSelectingLocation}
            placeholder="Filter a location..."
            selected={this.state.selectedLocation}
          />
        </div>
        <div className="row center pt-3 pb-3 pl-3">
          {forecast!.consolidated_weather.slice(0, 5).map(x => <ForecastItem key={x.id}
            nameOfDay={x.applicable_date}
            maxDegree={x.max_temp}
            minDegree={x.min_temp}
          />)}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (rootReducer: IRootReducers) => ({
  storeLocations: rootReducer.forecastReducer.locations,
  storeForecast: rootReducer.forecastReducer.forecast,
  storeDefaultLocation: rootReducer.forecastReducer.defaultLocation,
})
const mapDispatchToProps = (dispatch: Dispatch<IActionTyped>) => ({
  filterLocation: (location: string) => dispatch(forecastActions.filterLocation(location)),
  fetchForecast: (location: ILocationListing) => dispatch(forecastActions.fetchForecast(location))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forecast);