import React from 'react';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";

import { Link } from 'react-router-dom';

import { TextButton } from "@/common/components/Button";

import { colors } from '@utils';

import chevron_right_solid from '@images/svg/chevron-right-solid.svg';

const StyledBreadcrumbsItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;

  &::after {
        content: url(${chevron_right_solid});
        
        width: 9px;
        height: 14px;
        
        margin: 0 .5em;
    }
    
    &:last-child {
      &::after {
        display: none;
      }
    }
`;

const BreadcrumbsItem = ({name, translation, to, active}) => {
    const { t } = useTranslation();

    return (
        <StyledBreadcrumbsItem>
            <TextButton color="info" as={to && Link} to={to} disabled={active}>{name ? name : translation ? t(translation) : 'error'}</TextButton>
        </StyledBreadcrumbsItem>
    );
};

export default BreadcrumbsItem;
