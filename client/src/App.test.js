import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Crashing', () => {
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
})

describe('Contains Expected', () => {

test('text includes Player', () => {
  const { getByText } = render(<App />);
  getByText(/player/i);
});

test('text includes Searches', () => {
  const { getByText } = render(<App />);
  getByText(/searches/i);
});

test('text includes Country', () => {
  const { getByText } = render(<App />);
  getByText(/country/i);
});

test('text includes Megan Rapinoe', () => {
  const { getByText } = render(<App />);
  getByText(/Megan Rapinoe/i);
});
})
