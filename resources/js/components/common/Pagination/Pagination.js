import React from 'react';
import styled from 'styled-components';

import PaginationItem from './PaginationItem';


const StyledPagination = styled.nav`

`;

const StyledList = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    list-style: none;
`;

const Pagination = () => {
    return (
        <StyledPagination>
            <StyledList>
                <PaginationItem arrowLeft></PaginationItem>
                <PaginationItem>1</PaginationItem>
                <PaginationItem active>2</PaginationItem>
                <PaginationItem>3</PaginationItem>
                <PaginationItem arrowRight></PaginationItem>
            </StyledList>
        </StyledPagination>
    );
};

export default Pagination;
