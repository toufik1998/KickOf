import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useSelector, useDispatch } from 'react-redux';
import PlayersScreen from '../screens/PlayersScreen';

// Mock the react-redux hooks
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

// Mock the fetchPlayers and fetchPlayerDetails functions
jest.mock('../slices/playersApiSlice.js', () => ({
  fetchPlayers: jest.fn(),
  fetchPlayerDetails: jest.fn(),
}));

// Mock the react-navigation module
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('PlayersScreen', () => {
  it('renders correctly', () => {
    // Mock the useSelector hook
    useSelector.mockImplementation((selector) => selector({
      players: {
        entities: {
          data: [
            {
              id: '1',
              common_name: 'Player 1',
              image_path: 'http://example.com/image.jpg',
              country: {
                borders: ['Country 1'],
                image_path: 'http://example.com/country.jpg',
              },
            },
            {
              id: '2',
              common_name: 'Player 2',
              image_path: 'http://example.com/image.jpg',
              country: {
                borders: ['Country 2'],
                image_path: 'http://example.com/country.jpg',
              },
            },
          ],
        },
        loading: false,
      },
    }));

    const { getByText, getByPlaceholderText } = render(<PlayersScreen />);

    // Check if the players are displayed
    expect(getByText('Player 1')).toBeTruthy();
    expect(getByText('Country 1')).toBeTruthy();
    expect(getByText('Player 2')).toBeTruthy();
    expect(getByText('Country 2')).toBeTruthy();

    // Check if the search input works
    const searchInput = getByPlaceholderText('Search players');
    fireEvent.changeText(searchInput, 'Player 1');

    // Check if the correct player is displayed after searching
    expect(getByText('Player 1')).toBeTruthy();
    expect(getByText('Country 1')).toBeTruthy();
  });
});