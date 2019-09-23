import React from 'react';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import { faClock, faUser } from "@fortawesome/free-solid-svg-icons/index";

import { Card } from '@/common/components/Card';
import { TextButton } from "@/common/components/Button";

import { theme, media, colors } from '@utils';

const StyledNewsCard = styled(Card)`
    margin-bottom: 1.5em;
    padding: 0;

    ${media.laptop`
        display: flex;
        flex-direction: row;

        height: 250px;
    `}
`;

const StyledNewsCardImage = styled.img`
    width: 100%;

    border-top-left-radius: ${theme.border_radius};
    border-top-right-radius: ${theme.border_radius};

    ${media.laptop`
        width: 250px;

        border-top-left-radius: ${theme.border_radius};
        border-top-right-radius: 0;
        border-bottom-left-radius: ${theme.border_radius};
    `}
`;

const StyledNewsCardContentWrapper = styled.div`
    padding: 1.5em 1.25em .75em 1.25em;

    ${media.laptop`
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 100%;
    `}
`;

const StyledNewsCardTitle = styled.h2`
    margin-top: 0;

    font-family: 'Roboto Slab', sans-serif;
    font-size: 1.5em;
    font-weight: 400;
    color: ${colors.primary};

    text-decoration: none;
`;

const StyledNewsCardContent = styled.div`

    p {
        margin-bottom: .5em;

        font-size: .9rem;
        font-weight: 300;
        line-height: 1.5;
    }
`;

const StyledNewsCardFooter = styled.div`
    text-align: center;

    ${media.laptop`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    `}
`;

const StyledNewsCardDate = styled.p`
    margin: 1em 0;

    color: ${colors.gray};
    font-size: .7rem;
    font-weight: 400;

    text-align: center;

    white-space: nowrap;

    svg:last-child {
        margin-left: 1em
    }
`;

const NewsCard = (props) => {
    const { t } = useTranslation();

    return (
        <StyledNewsCard as="article">
            {props.data.image !== null && <StyledNewsCardImage src={props.data.image} />}
            <StyledNewsCardContentWrapper>
                <StyledNewsCardContent>
                    <StyledNewsCardTitle as="a" href="#">{props.data.title}</StyledNewsCardTitle>
                    <p>{props.data.content.short}</p>
                </StyledNewsCardContent>
                <StyledNewsCardFooter>
                    <StyledNewsCardDate>
                        <FontAwesomeIcon icon={faClock} transform="shrink-1" />&nbsp;{props.data.date.forHuman}
                        <FontAwesomeIcon icon={faUser} transform="shrink-1" />&nbsp;{props.data.author}
                    </StyledNewsCardDate>
                    {props.data.content.long !== null && <TextButton color='success'>{t('homepage:news.readMore')}</TextButton>}
                </StyledNewsCardFooter>
            </StyledNewsCardContentWrapper>
        </StyledNewsCard>
    );
};

export default NewsCard;
