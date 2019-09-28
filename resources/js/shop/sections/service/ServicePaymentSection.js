import React from 'react';
import styled from 'styled-components';

import { TabsBox, TabsBar, Tab, TabBody, TabPanel } from "@/common/components/Tabs";

const StyledServicePaymentSection = styled.div`
  margin-top: 1em;
`;

const ServicePaymentSection = () => {
    return (
        <StyledServicePaymentSection>
            <TabsBox>
                <TabsBar>
                    <Tab>Test 1</Tab>
                    <Tab>Test 2</Tab>
                    <Tab>Test 3</Tab>
                </TabsBar>
                <TabBody>
                    <TabPanel>1</TabPanel>
                    <TabPanel>2</TabPanel>
                    <TabPanel>3</TabPanel>
                </TabBody>
            </TabsBox>
        </StyledServicePaymentSection>
    );
};

export default ServicePaymentSection;
