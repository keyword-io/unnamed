import React from 'react';
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Home from '../../../src/modules/home/Home';

test('loads and displays greeting', async () => {
  const { container } = render(<Home />)

  expect(container).toMatchSnapshot();

  const listItems = document.querySelectorAll('.list-item')
  expect(listItems.length).toBe(2);

  const item1 = await screen.findByText('item-1');
  expect(!!item1).toBeTruthy();

  await userEvent.click(item1);
  expect(item1.className.indexOf('__active') > -1).toBeTruthy();
})
