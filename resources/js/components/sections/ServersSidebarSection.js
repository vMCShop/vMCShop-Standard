import React from 'react';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";

import { Card } from '@/components/common/Card';
import { ProgressBar } from "@/components/common/ProgressBar";
import { Badge } from '@/components/common/Badge';

import { theme, media, colors } from '@/utils';

const StyledServerStatusCard = styled(Card)`
    margin-bottom: 1em;
    
    text-align: center;

    h3 {
        margin-top: 0;
        margin-bottom: 1em;
        
        font-weight: 400;
        
        text-align: center;
    }
`;

const ServerStatusCard = ({ status }) => {
    const { t } = useTranslation();

    if (status.online) {
        return (
            <StyledServerStatusCard>
                <h3>{t('common:server.name', {name: status.name})}</h3>
                <Badge color={colors.primary}>{status.address}</Badge>
                <ProgressBar color={colors.success} value={status.players} max={status.maxPlayers} />
                <Badge color={colors.success}>Online</Badge>
                <Badge color={colors.info}>{status.players + '/' + status.maxPlayers}</Badge>
                <Badge color={colors.info}>{status.version}</Badge>
            </StyledServerStatusCard>
        );
    } else {
        return (
            <StyledServerStatusCard>
                <h3>{t('common:server.name', {name: status.name})}</h3>
                <Badge color={colors.primary}>{status.address}</Badge>
                <ProgressBar color={colors.danger} value={100} max={100} />
                <Badge color={colors.danger}>Offline</Badge>
            </StyledServerStatusCard>
        );
    }
};

const StyledServersSidebarSection = styled.section`
  
`;

const ServersSidebarSection = ({ serverStatuses }) => {
    const { t } = useTranslation();

    return (
        <StyledServersSidebarSection>
            <h2><FontAwesomeIcon icon={faServer} /> {t('homepage:sectionHeaders.serverStatus')}</h2>

            {serverStatuses.map(serverStatus => (
                <ServerStatusCard status={serverStatus} />
            ))}
        </StyledServersSidebarSection>
    );
};

export default ServersSidebarSection;
