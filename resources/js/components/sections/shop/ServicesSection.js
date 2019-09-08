import React from 'react';
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import { ServiceCard } from '@/components/common/Card';
import { Pagination } from '@/components/common/Pagination';

import { media } from '@/utils';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 35px;
    
    ${media.tablet`
        grid-template-columns: 1fr 1fr;
    `}
`;

const ServicesSection = (props) => {
    const { t } = useTranslation();

    return (
        <div>
            <h2><FontAwesomeIcon icon={faShoppingBasket} /> {t('shop:sectionHeaders.shop', {name: 'Hardcore'})}</h2>

            {props.horizontal ?
                props.data.map(service => (
                    <ServiceCard key={service.id} data={service} horizontal />
                ))
            :
                <Grid>
                    {props.data.map(service => (
                        <ServiceCard key={service.id} data={service} />
                    ))}
                </Grid>
            };

            <Pagination />
        </div>
    );
};

export default ServicesSection;
