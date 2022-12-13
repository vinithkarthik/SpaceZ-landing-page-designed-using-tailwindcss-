import { render, screen } from '@testing-library/react';
import Pagination from '../../../Components/Common/Pagination';
import '@testing-library/jest-dom/extend-expect';

describe('Pagination', () => {
    test('Pagination: render component', () => {
        render(
                <Pagination 
                    paginationLength={4} 
                    currentPage={3} 
                    onPageChange={() => {}}
                />
        );
    })
    test('Pagination: check the selected page', () => {
        render(
                <Pagination 
                    paginationLength={4} 
                    currentPage={3} 
                    onPageChange={() => {}}
                />
        );
        const selectedPage = screen.getByText('3')
        expect(selectedPage).toHaveClass("underline")
    })
})