import React from 'react';
import styled from 'styled-components';
import {useTranslation} from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faBook } from "@fortawesome/free-solid-svg-icons";

import { Card } from '@/components/common/Card';
import { TextButton } from '@/components/common/Button';

import { theme, media, colors } from '@/utils';

const StyledNewsCard = styled(Card)`
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
    font-size: .8rem;
    font-weight: 400;

    text-align: center;
`;

const NewsCard = () => {
    const { t } = useTranslation();

    return (
        <StyledNewsCard as="article">
            <StyledNewsCardImage src="https://via.placeholder.com/500" />
            <StyledNewsCardContentWrapper>
                <StyledNewsCardContent>
                    <StyledNewsCardTitle>HelloWorld!</StyledNewsCardTitle>
                    <p>
                        Sit amet, consectetur adipiscing elit. Nulla sit amet ultrices justo. Sed rutrum pulvinar laoreet. Nam vitae sollicitudin dolor, in feugiat ex. Aenean laoreet quis sapien at ultrices. Vestibulum vitae feugiat velit. Nullam varius ipsum est.
                    </p>
                </StyledNewsCardContent>
                <StyledNewsCardFooter>
                    <StyledNewsCardDate> 03 maj 2019 o 15:32  Admin</StyledNewsCardDate>
                    <TextButton color='success'>{t('homepage:news.readMore')}</TextButton>
                </StyledNewsCardFooter>
            </StyledNewsCardContentWrapper>
        </StyledNewsCard>
    );
};

const StyledNewsSection = styled.section`

`;

const NewsSection = () => {
    const { t } = useTranslation();

    return (
        <StyledNewsSection>
            <h2><FontAwesomeIcon icon={faNewspaper} /> {t('homepage:sectionHeaders.news')}</h2>
            <NewsCard />
        </StyledNewsSection>
    );
};

export default NewsSection;
