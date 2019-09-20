import React from 'react';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";

import { Card } from '@/common/components/Card';
import { TextButton } from "@/common/components/Button";
import { Badge } from '@/common/components/Badge';

import { theme, media, colors } from '@utils';

const StyledServiceCard = styled(Card)`
    margin-bottom: 1.5em;
    padding: 0;

    ${({horizontal}) => horizontal && media.laptop`
        display: flex;
        flex-direction: row;

        height: 250px;
    `}
`;

const StyledServiceCardImage = styled.img`
    width: 100%;

    border-top-left-radius: ${theme.border_radius};
    border-top-right-radius: ${theme.border_radius};

    ${({horizontal}) => horizontal && media.laptop`
        width: 250px;

        border-top-left-radius: ${theme.border_radius};
        border-top-right-radius: 0;
        border-bottom-left-radius: ${theme.border_radius};
    `}
`;

const StyledServiceCardContentWrapper = styled.div`
    padding: 1.5em 1.25em .75em 1.25em;

    ${({horizontal}) => horizontal && media.laptop`
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 100%;
    `}
`;

const StyledServiceCardTitleAnchor = styled.a`
    display: block;

    margin-bottom: 1em;

    text-decoration: none;
    
    ${({horizontal}) => horizontal && media.laptop`
        margin-bottom: 0;
    `};
`;

const StyledServiceCardTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 0;

    font-family: 'Roboto Slab', sans-serif;
    font-size: 1.5em;
    font-weight: 400;
    color: ${colors.primary};

    text-align: center;
    text-decoration: none;
    
    ${({horizontal}) => horizontal && media.laptop`
        text-align: left;
    `};
`;

const StyledServiceCardContent = styled.div`
    p {
        display: none;
    
        margin-bottom: .5em;

        font-size: .9rem;
        font-weight: 300;
        line-height: 1.5;
        
        ${({horizontal}) => horizontal && media.laptop`
            display: block;
        `}
    }
`;

const StyledServiceCardFooter = styled.div`
    text-align: center;

    ${({horizontal}) => horizontal && media.laptop`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    `}
`;

const StyledServiceCardPrice = styled.p`
    margin: 1em 0 2em 0;

    color: ${colors.gray};
    font-size: .7rem;
    font-weight: 400;

    text-align: center;

    white-space: nowrap;
    
    ${({horizontal}) => horizontal && media.laptop`
        margin: 1em 0;
    `};
`;

const ServiceCard = (props) => {
    const { t } = useTranslation();

    return (
        <StyledServiceCard as="article" horizontal={props.horizontal}>
            <StyledServiceCardImage src={props.data.image} horizontal={props.horizontal} />
            <StyledServiceCardContentWrapper horizontal={props.horizontal}>
                <StyledServiceCardContent horizontal={props.horizontal}>
                    <StyledServiceCardTitleAnchor href="#" horizontal={props.horizontal}>
                        <StyledServiceCardTitle horizontal={props.horizontal}>{props.data.name}</StyledServiceCardTitle>
                    </StyledServiceCardTitleAnchor>
                    <p>{props.data.description.short}</p>
                </StyledServiceCardContent>
                <StyledServiceCardFooter horizontal={props.horizontal}>
                    <StyledServiceCardPrice horizontal={props.horizontal}>
                        <Badge>{t('shop:service.price', {price: props.data.price})}</Badge>
                    </StyledServiceCardPrice>
                    <TextButton color='success'>{t('shop:service.select')}</TextButton>
                </StyledServiceCardFooter>
            </StyledServiceCardContentWrapper>
        </StyledServiceCard>
    );
};

export default ServiceCard;
