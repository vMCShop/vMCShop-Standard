import React from 'react';
import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faGlobeEurope,
  faExchangeAlt,
  faLink,
  faKey,
  faDotCircle,
  faTerminal,
  faEdit,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import { Card } from '@/common/components/Card';
import { Badge } from '@/common/components/Badge';
import { TextButton } from '@/common/components/Button';

import { colors, theme } from '@utils';

const StyledServerCard = styled(Card)`
  padding-bottom: 0.75em;
`;

const CardBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ServerImage = styled.img`
  min-width: 128px;
  height: 128px;

  border-radius: ${theme.border_radius};
`;

const ContentWrapper = styled.div`
  width: 100%;

  margin-left: 1em;
`;

const ServerNameHeader = styled.h3`
  margin-top: 0;
`;

const ServerDetailsList = styled.ul`
  margin: 0;
  padding: 0;
`;

const ServerDetailsListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0.5em 0;

  border-bottom: 1px solid ${rgba(colors.gray, 0.2)};

  &:last-child {
    border-bottom: none;
  }
`;

const DetailName = styled.span`
  display: block;

  font-size: 0.9rem;
  font-weight: 400;

  svg {
    margin-right: 0.5em;
  }
`;

const DetailValue = styled.span`
  display: block;

  font-family: monospace;
`;

const StyledBadge = styled(Badge)`
  margin: 0;

  font-size: 0.6rem;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1em;
  padding-top: 0.75em;

  border-top: 1px solid ${rgba(colors.gray, 0.2)};
`;

const ServerCard = ({ config }) => {
  return (
    <StyledServerCard>
      <CardBody>
        <ServerImage src={config.image} alt={config.name} />
        <ContentWrapper>
          <ServerNameHeader>Serwer {config.name}</ServerNameHeader>
          <ServerDetailsList>
            <ServerDetailsListItem>
              <DetailName>
                <FontAwesomeIcon icon={faEye} fixedWidth />
                Wyświetlany adres:
              </DetailName>
              <DetailValue>{config.displayAddress}</DetailValue>
            </ServerDetailsListItem>
            <ServerDetailsListItem>
              <DetailName>
                <FontAwesomeIcon icon={faGlobeEurope} fixedWidth />
                Adres:
              </DetailName>
              <DetailValue>
                {config.address}:{config.port}
              </DetailValue>
            </ServerDetailsListItem>
            {config.connection.method === 'rest' ? (
              <>
                <ServerDetailsListItem>
                  <DetailName>
                    <FontAwesomeIcon icon={faExchangeAlt} fixedWidth />
                    Metoda połączenia:
                  </DetailName>
                  <DetailValue>
                    <StyledBadge color={colors.success}>REST API</StyledBadge>
                  </DetailValue>
                </ServerDetailsListItem>
                <ServerDetailsListItem>
                  <DetailName>
                    <FontAwesomeIcon icon={faLink} fixedWidth />
                    Adres API:
                  </DetailName>
                  <DetailValue>{config.connection.api.url}</DetailValue>
                </ServerDetailsListItem>
                <ServerDetailsListItem>
                  <DetailName>
                    <FontAwesomeIcon icon={faKey} fixedWidth />
                    Token:
                  </DetailName>
                  <DetailValue>{config.connection.api.token}</DetailValue>
                </ServerDetailsListItem>
              </>
            ) : (
              <>
                <ServerDetailsListItem>
                  <DetailName>
                    <FontAwesomeIcon icon={faExchangeAlt} fixedWidth />
                    Metoda połączenia:
                  </DetailName>
                  <DetailValue>
                    <StyledBadge color={colors.warning}>RCON</StyledBadge>
                  </DetailValue>
                </ServerDetailsListItem>
                <ServerDetailsListItem>
                  <DetailName>
                    <FontAwesomeIcon icon={faDotCircle} fixedWidth />
                    Port RCON:
                  </DetailName>
                  <DetailValue>{config.connection.rcon.port}</DetailValue>
                </ServerDetailsListItem>
                <ServerDetailsListItem>
                  <DetailName>
                    <FontAwesomeIcon icon={faLink} fixedWidth />
                    Hasło RCON:
                  </DetailName>
                  <DetailValue>{config.connection.rcon.password}</DetailValue>
                </ServerDetailsListItem>
              </>
            )}
          </ServerDetailsList>
        </ContentWrapper>
      </CardBody>
      <CardFooter>
        <div>
          <TextButton color="default" withLeftIcon={faTerminal}>
            Konsola
          </TextButton>
        </div>
        <div>
          <TextButton color="info" withLeftIcon={faEdit}>
            Edytuj
          </TextButton>
          <TextButton color="danger" withLeftIcon={faTimes}>
            Usuń
          </TextButton>
        </div>
      </CardFooter>
    </StyledServerCard>
  );
};

export default ServerCard;
