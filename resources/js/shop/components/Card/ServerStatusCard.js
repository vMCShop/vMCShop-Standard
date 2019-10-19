import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { Card } from '@/common/components/Card';
import { ProgressBar } from '@/common/components/ProgressBar';
import { Badge } from '@/common/components/Badge';

import { colors } from '@utils';

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

const ServerStatusCard = props => {
    const { t } = useTranslation();

    if (props.data.online) {
        return (
            <StyledServerStatusCard>
                <h3>{t('common:server.name', { name: props.data.name })}</h3>
                <Badge color={colors.primary}>{props.data.address}</Badge>
                <ProgressBar
                    color={colors.success}
                    value={props.data.players}
                    max={props.data.maxPlayers}
                />
                <Badge color={colors.success}>
                    {t('common:server.status.online')}
                </Badge>
                <Badge color={colors.info}>
                    {props.data.players + '/' + props.data.maxPlayers}
                </Badge>
                <Badge color={colors.info}>{props.data.version}</Badge>
            </StyledServerStatusCard>
        );
    } else {
        return (
            <StyledServerStatusCard>
                <h3>{t('common:server.name', { name: props.data.name })}</h3>
                <Badge color={colors.primary}>{props.data.address}</Badge>
                <ProgressBar color={colors.danger} value={100} max={100} />
                <Badge color={colors.danger}>
                    {t('common:server.status.offline')}
                </Badge>
            </StyledServerStatusCard>
        );
    }
};

export default ServerStatusCard;
