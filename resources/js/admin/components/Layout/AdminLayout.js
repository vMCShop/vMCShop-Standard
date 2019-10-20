import React from 'react';
import styled from 'styled-components';

import { colors, media } from '@utils';

import Sidebar from '@/admin/components/Sidebar/Sidebar';
import rgba from '@bit/styled-components.polished.color.rgba';

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
`;

const StyledMain = styled.main`
    // box-shadow: 0 2px 5px 0 ${rgba(colors.black, 0.16)},
    //     0 2px 10px 0 ${rgba(colors.black, 0.12)};
`;

const BreadcrumbsHolder = styled.div`
    height: 75px;

    border-bottom: 1px solid ${rgba(colors.gray, 0.2)};
`;

class AdminLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <Sidebar />
                <StyledMain>
                    <BreadcrumbsHolder>asd</BreadcrumbsHolder>
                    {this.props.children}
                </StyledMain>
            </Grid>
        );
    }
}

export default AdminLayout;
