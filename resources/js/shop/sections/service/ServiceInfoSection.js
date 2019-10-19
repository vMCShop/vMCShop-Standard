import React from 'react';
import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMobileAlt,
    faLock,
    faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

import { Badge } from '@/common/components/Badge';
import { Tooltip } from '@/common/components/Tooltip';

import { media, colors, theme } from '@utils';

const Grid = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    column-gap: 35px;

    ${media.laptop`
        grid-template-columns: 1fr 2fr;
    `}
`;

const LeftColumn = styled.div`
    max-width: 100%;
`;

const RightColumn = styled.div`
    max-width: 100%;
`;

const ServiceImage = styled.img`
    position: relative;
    max-width: 100%;

    margin-bottom: 1.5em;

    border-radius: ${theme.border_radius};

    box-shadow: 0 2px 5px 0 ${rgba(colors.black, 0.16)},
        0 2px 10px 0 ${rgba(colors.black, 0.12)};

    ${media.laptop`
    margin-bottom: 0;
  `}
`;

const PricingTableTitle = styled.h3`
    display: none;

    margin-bottom: 0.5em;

    ${media.laptop`
        display: block;
    `}
`;

const PricingTable = styled.ul`
    display: none;

    list-style: none;

    margin: 0;
    padding: 0;

    ${media.laptop`
        display: block;
    `}
`;

const PaymentMethod = styled.span`
    color: ${colors.primary};
    font-family: 'Roboto Slab', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
`;

const PricingItem = styled.li`
    margin: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${rgba(colors.gray, 0.2)};

    &:last-child {
        border-bottom: none;
    }
`;

const LastCustomersBoxTitle = styled.h3`
    display: none;

    margin-top: 1em;
    margin-bottom: 0.5em;

    ${media.laptop`
    display: block;
  `}
`;

const LastCustomersBox = styled.div`
    display: none;
    align-items: center;
    justify-content: flex-start;

    ${media.laptop`
    display: flex;
  `}
`;

const CustomerHead = styled.img`
    width: 50px;
    height: 50px;

    margin: 0 0.25em;

    border-radius: ${theme.border_radius};
`;

const ServiceTitle = styled.h2`
    margin: 0;

    font-family: 'Roboto Slab', sans-serif;
    font-size: 2em;
    font-weight: 400;
    color: ${colors.primary};
    text-align: center;

    text-decoration: none;

    ${media.laptop`
        text-align: left;
    `}
`;

const ServiceDescription = styled.div``;

const ServiceInfoSection = () => {
    const { t } = useTranslation();

    return (
        <Grid>
            <LeftColumn>
                <ServiceImage
                    src="https://via.placeholder.com/500"
                    alt="service image"
                />
                <PricingTableTitle>
                    {t('shop:service.pricingTableTitle')}
                </PricingTableTitle>
                <PricingTable>
                    <PricingItem>
                        <PaymentMethod>
                            <FontAwesomeIcon icon={faMobileAlt} fixedWidth />{' '}
                            {t('shop:paymentMethods.sms')}:
                        </PaymentMethod>
                        <Badge>12,07 zł</Badge>
                    </PricingItem>
                    <PricingItem>
                        <PaymentMethod>
                            <FontAwesomeIcon icon={faLock} fixedWidth />{' '}
                            {t('shop:paymentMethods.psc')}:
                        </PaymentMethod>
                        <Badge>12,00 zł</Badge>
                    </PricingItem>
                    <PricingItem>
                        <PaymentMethod>
                            <FontAwesomeIcon icon={faPaypal} fixedWidth />{' '}
                            {t('shop:paymentMethods.paypal')}:
                        </PaymentMethod>
                        <Badge color={colors.success}>10,00 zł</Badge>
                    </PricingItem>
                    <PricingItem>
                        <PaymentMethod>
                            <FontAwesomeIcon icon={faCreditCard} fixedWidth />{' '}
                            {t('shop:paymentMethods.transfer')}:
                        </PaymentMethod>
                        <Badge>11,00 zł</Badge>
                    </PricingItem>
                </PricingTable>
                <LastCustomersBoxTitle>
                    {t('shop:service.lastCustomersTitle')}
                </LastCustomersBoxTitle>
                <LastCustomersBox>
                    <Tooltip title="Verlikylos">
                        <CustomerHead
                            src="https://crafatar.com/avatars/61296cbd20144ebebfd38695b2a864b3"
                            alt="verlikylos"
                        />
                    </Tooltip>
                    <Tooltip title="Verlikylos">
                        <CustomerHead
                            src="https://crafatar.com/avatars/61296cbd20144ebebfd38695b2a864b3"
                            alt="verlikylos"
                        />
                    </Tooltip>
                    <Tooltip title="Verlikylos">
                        <CustomerHead
                            src="https://crafatar.com/avatars/61296cbd20144ebebfd38695b2a864b3"
                            alt="verlikylos"
                        />
                    </Tooltip>
                    <Tooltip title="Verlikylos">
                        <CustomerHead
                            src="https://crafatar.com/avatars/61296cbd20144ebebfd38695b2a864b3"
                            alt="verlikylos"
                        />
                    </Tooltip>
                    <Tooltip title="Verlikylos">
                        <CustomerHead
                            src="https://crafatar.com/avatars/61296cbd20144ebebfd38695b2a864b3"
                            alt="verlikylos"
                        />
                    </Tooltip>
                    <Tooltip title="Verlikylos">
                        <CustomerHead
                            src="https://crafatar.com/avatars/61296cbd20144ebebfd38695b2a864b3"
                            alt="verlikylos"
                        />
                    </Tooltip>
                    <Tooltip title="Verlikylos">
                        <CustomerHead
                            src="https://crafatar.com/avatars/61296cbd20144ebebfd38695b2a864b3"
                            alt="verlikylos"
                        />
                    </Tooltip>
                </LastCustomersBox>
            </LeftColumn>
            <RightColumn>
                <ServiceTitle>Ranga VIP</ServiceTitle>
                <ServiceDescription>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In pharetra placerat sollicitudin. Mauris blandit lacus
                        ut odio dapibus elementum. Etiam consequat lorem dolor,
                        quis pretium turpis sodales id. Vivamus semper auctor
                        fermentum. Aenean dapibus lacinia mauris nec hendrerit.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Aenean nisi odio,
                        varius eu faucibus nec, molestie id neque. Interdum et
                        malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                    <p>
                        Maecenas efficitur, libero eu sodales malesuada, ligula
                        nunc volutpat nibh, in porta massa tellus quis magna. In
                        iaculis quam velit, sit amet auctor metus tempor in. In
                        hac habitasse platea dictumst. Suspendisse suscipit
                        semper ullamcorper. Pellentesque vel lacus porta,
                        ullamcorper nulla nec, venenatis justo. Sed id libero
                        mollis, egestas quam cursus, commodo felis. Fusce odio
                        mi, blandit non ex non, volutpat fringilla risus. Fusce
                        mattis ornare diam in malesuada. Donec posuere neque
                        pulvinar, ullamcorper lectus ac, venenatis nulla.
                        Pellentesque vitae accumsan mi. Nulla ac scelerisque
                        urna. Mauris tincidunt elit ultricies metus ultrices, ac
                        eleifend tortor consectetur.
                    </p>
                    <p>
                        Aenean nec orci quis ligula maximus hendrerit. Nulla
                        pellentesque pretium lectus id mollis. Mauris felis
                        mauris, facilisis ullamcorper fringilla sit amet, luctus
                        ac ex. Proin scelerisque dolor at leo ullamcorper
                        rutrum. Mauris libero risus, elementum sit amet enim at,
                        interdum egestas tortor. Vivamus et felis vestibulum,
                        sollicitudin velit id, fermentum sapien. Donec in augue
                        lacinia, sodales augue in, mollis odio.
                    </p>
                    <p>
                        Morbi vitae augue tortor. Duis turpis magna, venenatis
                        vel aliquam id, tempus nec orci. Nam interdum, dui vitae
                        egestas malesuada, purus justo molestie augue, eget
                        fermentum ante dolor non mi. Sed eleifend porttitor
                        nulla in blandit. Donec gravida leo eget est eleifend
                        malesuada. Mauris gravida mollis velit, nec blandit elit
                        sagittis vitae. Vestibulum vulputate eros a neque porta,
                        id placerat quam consectetur. Donec interdum dui at
                        sodales congue. Nam dapibus augue vitae aliquam rhoncus.
                        Cras sodales, sapien vel egestas gravida, ipsum ex
                        rutrum augue, a commodo velit leo et metus.
                    </p>
                    <p>
                        Quisque sit amet rhoncus felis. Etiam facilisis massa ut
                        odio lacinia, sit amet finibus neque tincidunt. Donec
                        euismod lacus in diam dapibus, ac vulputate ligula
                        suscipit. Donec urna leo, venenatis a commodo ut,
                        scelerisque vitae ante. In maximus lacus vel semper
                        molestie. Phasellus sagittis purus in libero tristique
                        mattis. Nunc iaculis ullamcorper egestas. In nec nisl
                        convallis, egestas ipsum vitae, tristique massa. Aliquam
                        fermentum ullamcorper cursus. Sed malesuada urna
                        accumsan, viverra tellus quis, tincidunt tortor. Vivamus
                        fermentum porta tellus ullamcorper placerat. Aenean
                        egestas tempor nibh, id hendrerit sem pulvinar
                        imperdiet. Quisque a orci in eros porttitor auctor quis
                        non eros.
                    </p>
                </ServiceDescription>
            </RightColumn>
        </Grid>
    );
};

export default ServiceInfoSection;
