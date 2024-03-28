import { render, fireEvent, screen } from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
    it('renders without crashing', () => {
        render(<Search />);
    });

    it('displays the welcome text', () => {
        render(<Search />);
        const welcomeText = screen.getByText('Hello, Dani');
        expect(welcomeText).toBeInTheDocument();
    });

    it('updates the search input value', () => {
        render(<Search />);
        const searchInput = screen.getByPlaceholderText('Chat with CynchAI...') as HTMLInputElement;
        fireEvent.change(searchInput, { target: { value: 'example' } });
        expect(searchInput.value).toBe('example');
    });
});