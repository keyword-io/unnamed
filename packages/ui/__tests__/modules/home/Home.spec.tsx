import React from 'react';
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../../../src/modules/home/Home';
import { MockedProvider } from "@apollo/client/testing";
import { AllUsersDocument } from '../../../src/generated/react-hooks'

test('loads and displays greeting', async () => {
  const mocks = [
    {
      request: {
        query: AllUsersDocument,
      },
      result: {
        data: {
          allUsers: [
            {
              id: '1',
              name: 'item-1'
            },
            {
              id: '2',
              name: 'item-2'
            }
          ]
        }
      }
    }
  ];

  const { container } = render(
    <MockedProvider mocks={mocks}>
      <Home />
    </MockedProvider>
  )
  expect(container).toMatchSnapshot();

  expect(await screen.findByText('loading...')).toBeInTheDocument()

  const item1 = await screen.findByText('item-1');
  expect(item1).toBeInTheDocument();

  const listItems = document.querySelectorAll('.list-item')
  expect(listItems.length).toBe(2);

  await userEvent.click(item1);
  expect(item1.className.indexOf('__active') > -1).toBeTruthy();
})
