import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom/extend-expect";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div); 
// });

test('Nav title renders correctly', () => {
  //arrange
  const { queryByText, queryByTitle } = render(<App/>);
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
  
  const btn = queryByText(/secret mode/i)
  //assert
  
  expect(btn).toBeTruthy();  

});

test('onePlayers renders correctly', () => {
  //arrange
  const { queryByText, queryByTitle, queryAllByText } = render(<App/>);
  //act
  
  const player = queryByText(/Megan Rapinoe/i)


  //assert
  
  expect(player).toBeInTheDocument();
  

});
