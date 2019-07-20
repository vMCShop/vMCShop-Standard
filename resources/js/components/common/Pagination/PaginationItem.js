import React from 'react';
import styled from 'styled-components';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import BaseButton from '@/components/common/Button/BaseButton';
import { Button, IconButton, TextButton } from '@/components/common/Button';

const StyledListItem = styled.li`
    margin-left: 3px;
    margin-right: 3px;
`;

const PaginationItem = (props) => {
    if (props.arrowLeft) {
        return (
            <StyledListItem as="li">
                <IconButton icon={faChevronLeft} size="xs" />
            </StyledListItem>
        );
    }

    if (props.arrowRight) {
        return (
            <StyledListItem as="li">
                <IconButton icon={faChevronRight} size="xs" />
            </StyledListItem>
        );
    }

    return (
        <StyledListItem as="li">
            {props.active ?
                <Button color="primary" size="sm">{props.children}</Button>
            :
                <TextButton color="primary" size="sm">{props.children}</TextButton>
            }
        </StyledListItem>
    );
};

export default PaginationItem;
