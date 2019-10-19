import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMobileAlt,
    faLock,
    faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

import {
    TabsBox,
    TabsBar,
    Tab,
    TabBody,
    TabPanel,
} from '@/common/components/Tabs';
import { Badge } from '@/common/components/Badge';
import { TextInput } from '@/common/components/Input';
import { Button } from '@/common/components/Button';

import { media } from '@utils';

const StyledServicePaymentSection = styled.div`
    margin-top: 1em;
`;

const PaymentBox = styled.div`
    text-align: center;
`;

const PaymentTitle = styled.h2`
    margin-bottom: 0.3em;
`;

const PaymentCTA = styled.p`
    margin-top: 2em;

    line-height: 1.3;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 2em 0;

    div {
        width: 100%;

        ${media.tablet`
            width: 50%;
        `}

        ${media.desktop`
            width: 25%;
        `}
    }
`;

const ServicePaymentSection = () => {
    const { t } = useTranslation();

    return (
        <StyledServicePaymentSection>
            <TabsBox>
                <TabsBar>
                    <Tab>
                        <FontAwesomeIcon icon={faMobileAlt} />{' '}
                        {t('shop:paymentMethods.sms')}
                    </Tab>
                    <Tab>
                        <FontAwesomeIcon icon={faLock} />{' '}
                        {t('shop:paymentMethods.psc')}
                    </Tab>
                    <Tab>
                        <FontAwesomeIcon icon={faPaypal} />{' '}
                        {t('shop:paymentMethods.paypal')}
                    </Tab>
                    <Tab>
                        <FontAwesomeIcon icon={faCreditCard} />{' '}
                        {t('shop:paymentMethods.transfer')}
                    </Tab>
                </TabsBar>
                <TabBody>
                    <TabPanel>
                        <PaymentBox>
                            <PaymentTitle>
                                <FontAwesomeIcon icon={faMobileAlt} />{' '}
                                {t('shop:paymentMethods.titles.sms')}
                            </PaymentTitle>
                            <Badge>
                                {t('shop:service.priceVat', {
                                    price: '12',
                                    priceVat: '12,07',
                                })}
                            </Badge>
                            <PaymentCTA
                                dangerouslySetInnerHTML={{
                                    __html: t('shop:service.cta.sms', {
                                        newline: `<br />`,
                                        smsContent: `<span style="font-weight: 500;">AP.HOSTMC</span>`,
                                        smsNumber: `<span style="font-weight: 500;">76068</span>`,
                                    }),
                                }}
                            />
                            <FormGroup>
                                <TextInput
                                    label={t(
                                        'shop:service.form.input.nickname'
                                    )}
                                />
                                <TextInput
                                    label={t('shop:service.form.input.smsCode')}
                                />
                            </FormGroup>
                            <Button color="success">
                                {t('shop:service.form.button.serviceCheckout')}
                            </Button>
                        </PaymentBox>
                    </TabPanel>
                    <TabPanel>
                        <PaymentBox>
                            <PaymentTitle>
                                <FontAwesomeIcon icon={faLock} />{' '}
                                {t('shop:paymentMethods.titles.psc')}
                            </PaymentTitle>
                            <Badge>
                                {t('shop:service.price', { price: '12,00' })}
                            </Badge>
                            <PaymentCTA
                                dangerouslySetInnerHTML={{
                                    __html: t('shop:service.cta.other', {
                                        newline: `<br />`,
                                    }),
                                }}
                            />
                            <FormGroup>
                                <TextInput
                                    label={t(
                                        'shop:service.form.input.nickname'
                                    )}
                                />
                            </FormGroup>
                            <Button color="success">
                                {t('shop:service.form.button.nextStep')}
                            </Button>
                        </PaymentBox>
                    </TabPanel>
                    <TabPanel>
                        <PaymentBox>
                            <PaymentTitle>
                                <FontAwesomeIcon icon={faPaypal} />{' '}
                                {t('shop:paymentMethods.titles.paypal')}
                            </PaymentTitle>
                            <Badge>
                                {t('shop:service.price', { price: '10,00' })}
                            </Badge>
                            <PaymentCTA
                                dangerouslySetInnerHTML={{
                                    __html: t('shop:service.cta.other', {
                                        newline: `<br />`,
                                    }),
                                }}
                            />
                            <FormGroup>
                                <TextInput
                                    label={t(
                                        'shop:service.form.input.nickname'
                                    )}
                                />
                            </FormGroup>
                            <Button color="success">
                                {t('shop:service.form.button.nextStep')}
                            </Button>
                        </PaymentBox>
                    </TabPanel>
                    <TabPanel>
                        <PaymentBox>
                            <PaymentTitle>
                                <FontAwesomeIcon icon={faCreditCard} />{' '}
                                {t('shop:paymentMethods.titles.transfer')}
                            </PaymentTitle>
                            <Badge>
                                {t('shop:service.price', { price: '11,00' })}
                            </Badge>
                            <PaymentCTA
                                dangerouslySetInnerHTML={{
                                    __html: t('shop:service.cta.other', {
                                        newline: `<br />`,
                                    }),
                                }}
                            />
                            <FormGroup>
                                <TextInput
                                    label={t(
                                        'shop:service.form.input.nickname'
                                    )}
                                />
                            </FormGroup>
                            <Button color="success">
                                {t('shop:service.form.button.nextStep')}
                            </Button>
                        </PaymentBox>
                    </TabPanel>
                </TabBody>
            </TabsBox>
        </StyledServicePaymentSection>
    );
};

export default ServicePaymentSection;
