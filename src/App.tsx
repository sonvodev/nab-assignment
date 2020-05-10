import React from 'react';
import './App.scss';
import { Provider } from "react-redux";
import './plugins/axios.plugin';

import createStore from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppHeader } from "./components";
import Forecast from "./pages/forecast";



class App extends React.Component {

  store: any = createStore();


  componentDidMount() {
    console.log(process.env.REACT_APP_BASE_URL);
  }
  render() {
    return <Provider store={this.store}>
      <div >
        <AppHeader />
        <div className="col-12 mt-2">
          <Forecast />
        </div>
      </div>
    </Provider>
  }
}

export default App;
