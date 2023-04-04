import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

test('renders no task found when the list is empty', () => {
  render(<TodoList />);
  const linkElement = screen.getByText(/No mask found/i);
  expect(linkElement).toBeInTheDocument();
});
