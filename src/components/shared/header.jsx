import React, { Component } from 'react';
import { navigate, StaticQuery, graphql } from 'gatsby';

// Material components
import TopAppBar, {
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarIcon,
} from '@material/react-top-app-bar';
import { Cell, Row } from '@material/react-layout-grid';
import MaterialIcon from '@material/react-material-icon';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';

const logo = graphql`
  query {
    contentfulHeader {
      title
      logo {
        fixed {
          src
        }
      }
    }
  }
`;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.handleActiveIndexUpdate = (activeIndex) =>
      this.setState({ activeIndex });
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <StaticQuery
        query={logo}
        render={(data) => (
          <Row>
            <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
              <TopAppBar className="mdc-top-bar">
                <TopAppBarRow>
                  <TopAppBarSection
                    className="mdc-top-bar-section-img "
                    align="start"
                  >
                    <img
                      src={`https:${data.contentfulHeader.logo.fixed.src}`}
                      alt="Imagen principal"
                      className="mdc-top-bar-logo"
                    />
                  </TopAppBarSection>
                  <TopAppBarSection
                    className="mdc-header-components"
                    role="toolbar"
                  >
                    <TopAppBarTitle>
                      <TabBar
                        activeIndex={this.state.activeIndex}
                        handleActiveIndexUpdate={this.handleActiveIndexUpdate}
                      >
                        <Tab>
                          <span className="mdc-tab__text-label">NOSOTROS</span>
                        </Tab>
                        <Tab>
                          <span className="mdc-tab__text-label">PRODUCTOS</span>
                        </Tab>
                        <Tab>
                          <span className="mdc-tab__text-label">BLOG</span>
                        </Tab>
                        <Tab>
                          <span className="mdc-tab__text-label">CONTACTO</span>
                        </Tab>
                      </TabBar>
                    </TopAppBarTitle>
                  </TopAppBarSection>
                  <TopAppBarSection align="end" style={{ paddingRight: '4vw' }}>
                    <TopAppBarIcon actionItem>
                      <MaterialIcon hasRipple icon="menu" />
                    </TopAppBarIcon>
                  </TopAppBarSection>
                </TopAppBarRow>
              </TopAppBar>
            </Cell>
          </Row>
        )}
      />
    );
  }
}

export default Header;
