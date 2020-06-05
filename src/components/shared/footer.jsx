import React from 'react';
import { Cell, Row } from '@material/react-layout-grid';
import { Headline5, Body1 } from '@material/react-typography';
import IconButton from '@material/react-icon-button';
import MaterialIcon from '@material/react-material-icon';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulIcons {
        edges {
          node {
            icon {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Row style={{ backgroundColor: '#c44d89', color: 'white' }}>
      <Cell desktopColumns={2} />
      <Cell desktopColumns={8} style={{ textAlign: 'center' }}>
        <Headline5>PALMA NUESTRA</Headline5>
        <Body1>
          We’d love to hear from you and answer any questions you may have. Send
          us an email or just follow us on the socials.
        </Body1>
        <IconButton isLink>
          <img
            src={`https:${data.allContentfulIcons.edges[0].node.icon[0].fluid.src}`}
            alt=""
          />
        </IconButton>

        <IconButton>
          <img
            src={`https:${data.allContentfulIcons.edges[0].node.icon[1].fluid.src}`}
            alt=""
          />
        </IconButton>
        <IconButton>
          <img
            src={`https:${data.allContentfulIcons.edges[0].node.icon[2].fluid.src}`}
            alt=""
          />
        </IconButton>
      </Cell>
      <Cell desktopColumns={2} />
    </Row>
  );
};

export default Footer;
