import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom/extend-expect";
import CardContainer from './components/CardContainer';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div); 
// });

test('Nav title renders correctly', () => {
  //arrange
  const { queryByText } = render(<App/>);
  //act
  const nav = queryByText(/Lambda Sprint Challenge/i);
  const btn = queryByText(/secret mode/i)


  //assert
  expect(nav).toBeTruthy();
  expect(btn).toBeTruthy();
  // expect(nav).toMatch();

});
test('button title correct', () => {
  //arrange
  const { queryByText, queryByTitle } = render(<App/>);
  //act
  
  const btn = queryByText(/secret mode/i);
  //assert
  
  expect(btn).toBeInTheDocument();  

});

// test('onePlayers renders correctly', () => {
//   //arrange
//   const { getByText, getAllByDisplayValue } = render(<App />);
//   //act  
//   const player = getAllByDisplayValue(/Alex Morgan/i);
//   //assert
  
//   expect(player).toBeInTheDocument();
  

// });
