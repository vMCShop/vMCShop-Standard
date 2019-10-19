import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';

import { theme, media, colors } from '@utils';

const Card = styled.div`
    padding: 1.5em 1.25em;

    background-color: ${colors.white};

    border-radius: ${theme.border_radius};

    box-shadow: 0 2px 5px 0 ${rgba(colors.black, 0.16)},
        0 2px 10px 0 ${rgba(colors.black, 0.12)};
`;

export default Card;
