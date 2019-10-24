import React from 'react';
import styled from 'styled-components';
import rgba from '@bit/styled-components.polished.color.rgba';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons/index';

import { Breadcrumbs } from '@/shop/components/Breadcrumbs';

import { colors, media, theme } from '@utils';

const PostHeadingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 35px;

  ${media.laptop`
        grid-template-columns: 1fr 2fr;
    `}
`;

const PostImage = styled.img`
  width: 100%;

  margin-bottom: 1.5em;

  border-radius: ${theme.border_radius};

  box-shadow: 0 2px 5px 0 ${rgba(colors.black, 0.16)}, 0 2px 10px 0 ${rgba(colors.black, 0.12)};

  ${media.laptop`
    margin-bottom: 0;
  `}
`;

const PostHeading = styled.div``;

const PostTitle = styled.h2`
  margin: 0;

  font-family: 'Roboto Slab', sans-serif;
  font-size: 2em;
  font-weight: 400;
  color: ${colors.primary};

  text-decoration: none;
`;

const PostInfo = styled.p`
  margin-top: 0.5em;

  color: ${colors.gray};
  font-size: 0.7rem;
  font-weight: 400;

  white-space: nowrap;

  svg:last-child {
    margin-left: 1em;
  }
`;

const PostPrefaceContent = styled.p`
  margin-top: 1.5em;
  margin-bottom: 0;

  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
`;

const PostContent = styled.div`
  margin-top: 1.5em;

  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
`;

const breadcrumbsConfig = {
  page: 'Post',
  active: {
    name: 'Hello World with image and content!',
  },
};

class Post extends React.Component {
  render() {
    return (
      <>
        <Breadcrumbs config={breadcrumbsConfig} />
        <PostHeadingGrid>
          <PostImage src="https://via.placeholder.com/500" alt="Post image" />
          <PostHeading>
            <PostTitle>Hello world with image and content!</PostTitle>
            <PostInfo>
              <FontAwesomeIcon icon={faClock} transform="shrink-1" />
              &nbsp;03 maj 2019 o 15:32
              <FontAwesomeIcon icon={faUser} transform="shrink-1" />
              &nbsp;Admin
            </PostInfo>
            <PostPrefaceContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra placerat sollicitudin. Mauris blandit
              lacus ut odio dapibus elementum. Etiam consequat lorem dolor, quis pretium turpis sodales id. Vivamus
              semper auctor fermentum. Aenean dapibus lacinia mauris nec hendrerit. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas. Aenean nisi odio, varius eu faucibus
              nec, molestie id neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non vestibulum
              massa, vitae ultrices purus. Integer a malesuada dui, pharetra ultrices felis. Praesent et libero eget dui
              rhoncus efficitur. Phasellus aliquet felis a nisi volutpat, et ultrices elit maximus. In euismod
              vestibulum lorem non dapibus. Mauris scelerisque commodo mauris, non ultricies nisi vulputate at. Fusce id
              eros elementum, molestie justo hendrerit, fermentum quam. Nulla mattis enim sed ornare aliquet. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. In pharetra placerat sollicitudin. Mauris blandit lacus
              ut odio dapibus elementum. Etiam consequat lorem dolor, quis pretium turpis sodales id.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. In pharetra placerat sollicitudin.
            </PostPrefaceContent>
          </PostHeading>
        </PostHeadingGrid>
        <PostContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra placerat sollicitudin. Mauris blandit
            lacus ut odio dapibus elementum. Etiam consequat lorem dolor, quis pretium turpis sodales id. Vivamus semper
            auctor fermentum. Aenean dapibus lacinia mauris nec hendrerit. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Aenean nisi odio, varius eu faucibus nec, molestie
            id neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla non vestibulum massa, vitae
            ultrices purus. Integer a malesuada dui, pharetra ultrices felis. Praesent et libero eget dui rhoncus
            efficitur. Phasellus aliquet felis a nisi volutpat, et ultrices elit maximus. In euismod vestibulum lorem
            non dapibus. Mauris scelerisque commodo mauris, non ultricies nisi vulputate at. Fusce id eros elementum,
            molestie justo hendrerit, fermentum quam. Nulla mattis enim sed ornare aliquet.
          </p>
          <p>
            Maecenas efficitur, libero eu sodales malesuada, ligula nunc volutpat nibh, in porta massa tellus quis
            magna. In iaculis quam velit, sit amet auctor metus tempor in. In hac habitasse platea dictumst. Suspendisse
            suscipit semper ullamcorper. Pellentesque vel lacus porta, ullamcorper nulla nec, venenatis justo. Sed id
            libero mollis, egestas quam cursus, commodo felis. Fusce odio mi, blandit non ex non, volutpat fringilla
            risus. Fusce mattis ornare diam in malesuada. Donec posuere neque pulvinar, ullamcorper lectus ac, venenatis
            nulla. Pellentesque vitae accumsan mi. Nulla ac scelerisque urna. Mauris tincidunt elit ultricies metus
            ultrices, ac eleifend tortor consectetur. Etiam nec convallis magna. Duis dignissim condimentum lectus, et
            consequat erat efficitur at.
          </p>
          <p>
            Aenean nec orci quis ligula maximus hendrerit. Nulla pellentesque pretium lectus id mollis. Mauris felis
            mauris, facilisis ullamcorper fringilla sit amet, luctus ac ex. Proin scelerisque dolor at leo ullamcorper
            rutrum. Mauris libero risus, elementum sit amet enim at, interdum egestas tortor. Vivamus et felis
            vestibulum, sollicitudin velit id, fermentum sapien. Donec in augue lacinia, sodales augue in, mollis odio.
          </p>
          <p>
            Morbi vitae augue tortor. Duis turpis magna, venenatis vel aliquam id, tempus nec orci. Nam interdum, dui
            vitae egestas malesuada, purus justo molestie augue, eget fermentum ante dolor non mi. Sed eleifend
            porttitor nulla in blandit. Donec gravida leo eget est eleifend malesuada. Mauris gravida mollis velit, nec
            blandit elit sagittis vitae. Vestibulum vulputate eros a neque porta, id placerat quam consectetur. Donec
            interdum dui at sodales congue. Nam dapibus augue vitae aliquam rhoncus. Cras sodales, sapien vel egestas
            gravida, ipsum ex rutrum augue, a commodo velit leo et metus.
          </p>
          <p>
            Quisque sit amet rhoncus felis. Etiam facilisis massa ut odio lacinia, sit amet finibus neque tincidunt.
            Donec euismod lacus in diam dapibus, ac vulputate ligula suscipit. Donec urna leo, venenatis a commodo ut,
            scelerisque vitae ante. In maximus lacus vel semper molestie. Phasellus sagittis purus in libero tristique
            mattis. Nunc iaculis ullamcorper egestas. In nec nisl convallis, egestas ipsum vitae, tristique massa.
            Aliquam fermentum ullamcorper cursus. Sed malesuada urna accumsan, viverra tellus quis, tincidunt tortor.
            Vivamus fermentum porta tellus ullamcorper placerat. Aenean egestas tempor nibh, id hendrerit sem pulvinar
            imperdiet. Quisque a orci in eros porttitor auctor quis non eros.
          </p>
        </PostContent>
      </>
    );
  }
}

export default Post;
