import React from 'react';
import { render } from '@testing-library/react';
import ForecastItem from './index';
import moment from "moment";


test('renders forecast item', () => {

  const today = moment()

  const { getByText } = render(<ForecastItem
    nameOfDay={today.format("YYYY-MM-DD")} maxDegree={32} minDegree={25}
  />);
  const linkElement = getByText(today.format("dddd"));
  expect(linkElement).toBeInTheDocument();
});
