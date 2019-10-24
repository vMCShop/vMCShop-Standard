import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

import { Card } from '@/common/components/Card';
import { TextButton, IconButton } from '@/common/components/Button';
import { Badge } from '@/common/components/Badge';
import { Tooltip } from '@/common/components/Tooltip';

import { media, colors } from '@utils';

const StyledModuleCard = styled(Card)`
  padding-bottom: 0.75em;
`;

const CardBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const IconWrapper = styled.div`
  min-width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ color }) =>
    color &&
    `
    background-color: ${color};
  `};

  border-radius: 50%;
`;

const ContentWrapper = styled.div`
  padding: 0.55em 0 0 1em;
`;

const ModuleNameHeader = styled.h3`
  margin-top: 0;
`;

const ModuleDescription = styled.p``;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1em;
  padding-top: 0.75em;

  border-top: 1px solid ${rgba(colors.gray, 0.2)};
`;

const ModuleCard = ({ config }) => {
  const { icon, name, description, enabled, buttons } = config;

  return (
    <StyledModuleCard>
      <CardBody>
        <IconWrapper color={enabled ? colors.success : colors.danger}>
          <FontAwesomeIcon color={colors.white} icon={icon} fixedWidth />
        </IconWrapper>
        <ContentWrapper>
          <ModuleNameHeader>{name}</ModuleNameHeader>
          <ModuleDescription>{description}</ModuleDescription>
        </ContentWrapper>
      </CardBody>
      <CardFooter>
        <div>
          {buttons.map((button, index) => (
            <TextButton color={button.color} disabled={!enabled} key={index}>
              {button.title}
            </TextButton>
          ))}
        </div>
        {enabled ? (
          <div>
            <Tooltip title="Ustawienia">
              <IconButton size="xs" icon={faCogs} />
            </Tooltip>
            <TextButton color="danger">Dezaktywuj</TextButton>
          </div>
        ) : (
          <div>
            <IconButton size="xs" icon={faCogs} disabled />
            <TextButton color="success">Aktywuj</TextButton>
          </div>
        )}
      </CardFooter>
    </StyledModuleCard>
  );
};

ModuleCard.propTypes = {
  config: PropTypes.object.isRequired,
};

export default ModuleCard;
