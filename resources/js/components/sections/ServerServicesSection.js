import React from 'react';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import { Card } from '@/components/common/Card';

import { theme, media, colors } from '@/utils';

const StyledServerServicesSection = styled.div`
  
`;

const ServerServicesSection = ({ serverServices }) => {
    const { t } = useTranslation();

    return (
        <StyledServerServicesSection>
            <h2><FontAwesomeIcon icon={faShoppingBasket} /> {t('homepage:sectionHeaders.serverStatus')}</h2>

            {/*{serverServices.map(services => (*/}
            {/*    <ServerServiceCard data={service} />*/}
            {/*))}*/}
        </StyledServerServicesSection>
    );
};

export default ServerServicesSection;
