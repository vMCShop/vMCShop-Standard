import React from 'react';
import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';
import { useTranslation } from "react-i18next";

import { Link } from 'react-router-dom';

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

const StyledServiceCardTitleAnchor = styled(Link)`
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

const StyledServiceCardPrice = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin: 0 0 .75em;
    padding: 0;
    
    ${({horizontal}) => horizontal && media.laptop`
         margin: 0;
    `};
`;

const StyledPriceTag = styled.li`
    display: flex;
    flex-direction: column;
    
    margin: 0;
    padding: .25em .75em;
    
    border-right: 1px solid ${rgba(colors.gray, 0.25)};
    
    &:last-child {
      border-right: none;
    }
    
    ${({horizontal}) => horizontal && media.laptop`
         padding: .25em 1em;
    `};
`;

const StyledPriceTagPrice = styled.span`
    font-size: .8em;
    font-weight: 500;
`;

const StyledPriceTagPayment = styled.span`
    margin-top: .5em;

    color: ${colors.gray};
    font-size: .7em;
`;

const ServiceCard = (props) => {
    const { t } = useTranslation();

    return (
        <StyledServiceCard as="article" horizontal={props.horizontal}>
            <StyledServiceCardImage src={props.data.image} horizontal={props.horizontal} />
            <StyledServiceCardContentWrapper horizontal={props.horizontal}>
                <StyledServiceCardContent horizontal={props.horizontal}>
                    <StyledServiceCardTitleAnchor to="/service" horizontal={props.horizontal}>
                        <StyledServiceCardTitle horizontal={props.horizontal}>{props.data.name}</StyledServiceCardTitle>
                    </StyledServiceCardTitleAnchor>
                    <p>{props.data.description.short}</p>
                </StyledServiceCardContent>
                <StyledServiceCardFooter horizontal={props.horizontal}>
                    <StyledServiceCardPrice horizontal={props.horizontal}>
                        <StyledPriceTag horizontal={props.horizontal}>
                            <StyledPriceTagPrice horizontal={props.horizontal}>
                                {t('shop:serviceCard.price', {price: props.data.price.sms})}
                            </StyledPriceTagPrice>
                            <StyledPriceTagPayment horizontal={props.horizontal}>
                                {t('shop:serviceCard.paymentMethods.sms')}
                            </StyledPriceTagPayment>
                        </StyledPriceTag>
                        <StyledPriceTag horizontal={props.horizontal}>
                            <StyledPriceTagPrice horizontal={props.horizontal}>
                                {t('shop:serviceCard.price', {price: props.data.price.psc})}
                            </StyledPriceTagPrice>
                            <StyledPriceTagPayment horizontal={props.horizontal}>
                                {t('shop:serviceCard.paymentMethods.psc')}
                            </StyledPriceTagPayment>
                        </StyledPriceTag>
                        <StyledPriceTag horizontal={props.horizontal}>
                            <StyledPriceTagPrice horizontal={props.horizontal}>
                                {t('shop:serviceCard.price', {price: props.data.price.paypal})}
                            </StyledPriceTagPrice>
                            <StyledPriceTagPayment horizontal={props.horizontal}>
                                {t('shop:serviceCard.paymentMethods.paypal')}
                            </StyledPriceTagPayment>
                        </StyledPriceTag>
                        <StyledPriceTag horizontal={props.horizontal}>
                            <StyledPriceTagPrice horizontal={props.horizontal}>
                                {t('shop:serviceCard.price', {price: props.data.price.transfer})}
                            </StyledPriceTagPrice>
                            <StyledPriceTagPayment horizontal={props.horizontal}>
                                {t('shop:serviceCard.paymentMethods.transfer')}
                            </StyledPriceTagPayment>
                        </StyledPriceTag>
                    </StyledServiceCardPrice>
                    <TextButton color='success' as={Link} to="/service">{t('shop:serviceCard.select')}</TextButton>
                </StyledServiceCardFooter>
            </StyledServiceCardContentWrapper>
        </StyledServiceCard>
    );
};

export default ServiceCard;
