import React from "react";
import { render } from "@testing-library/react-native";
import { useSelector, useDispatch } from "react-redux";
import HomeScreen from "../screens/HomeScreen";


// Mock the react-redux hooks
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => jest.fn(),
  }));
  
  // Mock the fetchMatches and fetchMatchDetails functions
  jest.mock('../slices/matchesApiSlice', () => ({
    fetchMatches: jest.fn(),
    fetchMatchDetails: jest.fn(),
  }));
  
  // Mock the react-navigation module
  jest.mock('@react-navigation/native', () => {
    return {
      useNavigation: () => ({
        navigate: jest.fn(),
      }),
    };
  });


  describe('HomeScreen', () => {
    it('renders correctly', () => {
      // Mock the useSelector hook
      useSelector.mockImplementation((selector) => selector({
        matches: {
          entities: {
            data: [
              {
                id: '1',
                name: 'Match 1',
                starting_at: new Date().toISOString(),
                participants: [
                  { image_path: 'http://example.com/image1.jpg' },
                  { image_path: 'http://example.com/image2.jpg' },
                ],
              },
            ],
          },
          loading: 'idle',
        },
      }));
  
      const { getByText } = render(<HomeScreen />);
  
      // Check if the match name is displayed
      expect(getByText('Match 1')).toBeTruthy();
    });
  });