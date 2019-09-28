import React from 'react';

import { Breadcrumbs } from '@/shop/components/Breadcrumbs';

import ServiceInfoSection from '@/shop/sections/service/ServiceInfoSection';
import ServicePaymentSection from '@/shop/sections/service/ServicePaymentSection';

const breadcrumbsConfig = {
    page: 'Service',
    server: {
        id: 1,
        name: 'Hardcore',
        href: '/shop'
    },
    active: {
        name: 'Ranga VIP'
    }
};

class Service extends React.Component {
    render() {
        return (
            <>
                <Breadcrumbs config={breadcrumbsConfig} />
                <ServiceInfoSection />
                <ServicePaymentSection />
            </>
        );
    }
}

export default Service;
