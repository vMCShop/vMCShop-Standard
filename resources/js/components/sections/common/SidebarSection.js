import React from 'react';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";

import { ServerStatusCard } from '@/components/common/Card';

const SidebarSection = (props) => {
    const { t } = useTranslation();

    return (
        <div>
            <h2><FontAwesomeIcon icon={faServer} /> {t('homepage:sectionHeaders.serverStatus')}</h2>

            {props.serverStatuses.map(serverStatus => (
                <ServerStatusCard data={serverStatus} />
            ))}
        </div>
    );
};

export default SidebarSection;
