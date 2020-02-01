import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import PostCard from '../components/PostCard';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
import config from '../website-config';
import Pagination from '../components/Pagination';
import { colors } from '../styles/colors';


import {
  inner,
  outer,
  PostFeed,
  PostFeedRaise,
  SiteDescription,
  SiteHeader,
  SiteHeaderContent,
  SiteMain,
  SiteTitle,
} from '../styles/shared';
import { PageContext } from './post';

const PostCardStyles = css`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 20px 40px;
  min-height: 300px;
  background: #fff center center;
  background-size: cover;
  border-radius: 5px;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  transition: all 0.5s ease;

  :hover {
    box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
  }
`;

const PostCardTitle = styled.h2`
  margin-top: 0;
`;

const PostCardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PostCardTags = styled.span`
  display: block;
  margin-bottom: 4px;
  color: ${colors.midgrey};
  font-size: 1.2rem;
  line-height: 1.15em;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const PostCardExcerpt = styled.section`
  font-family: Georgia, serif;
`;


const PostCardContentLink = css`
  position: relative;
  flex-grow: 1;
  display: block;
  padding: 25px 25px 0;
  color: ${colors.darkgrey};

  :hover {
    text-decoration: none;
  }
`;

const HomePosts = css`
  @media (min-width: 795px) {
    .post-card:nth-of-type(6n + 1):not(.no-image) {
      flex: 1 1 100%;
      flex-direction: row;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      border-radius: 5px 0 0 5px;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-content {
      flex: 0 1 357px;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) h2 {
      font-size: 2.6rem;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) p {
      font-size: 1.8rem;
      line-height: 1.55em;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-content-link {
      padding: 30px 40px 0;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-meta {
      padding: 0 40px 30px;
    }
  }
`;

export interface IndexProps {
  pageContext: {
    currentPage: number;
    numPages: number;
  };
  data: {
    logo: {
      childImageSharp: {
        fixed: any;
      };
    };
    header: {
      childImageSharp: {
        fluid: any;
      };
    };
    allMarkdownRemark: {
      edges: Array<{
        node: PageContext;
      }>;
    };
  };
}

const IndexPage: React.FC<IndexProps> = props => {
  const width = props.data.header.childImageSharp.fluid.sizes.split(', ')[1].split('px')[0];
  const height = String(Number(width) / props.data.header.childImageSharp.fluid.aspectRatio);

  return (
    <IndexLayout css={HomePosts}>
      <Helmet>
        <html lang={config.lang} />
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={config.siteUrl} />
        <meta
          property="og:image"
          content={`${config.siteUrl}${props.data.header.childImageSharp.fluid.src}`}
        />
        {config.facebook && <meta property="article:publisher" content={config.facebook} />}
        {config.googleSiteVerification && <meta name="google-site-verification" content={config.googleSiteVerification} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:url" content={config.siteUrl} />
        <meta
          name="twitter:image"
          content={`${config.siteUrl}${props.data.header.childImageSharp.fluid.src}`}
        />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
        <meta property="og:image:width" content={width} />
        <meta property="og:image:height" content={height} />
      </Helmet>
      <Wrapper>
        <header
          css={[outer, SiteHeader]}
          style={{
            backgroundImage: `url('${props.data.header.childImageSharp.fluid.src}')`,
          }}
        >
          <div css={inner}>
            <SiteHeaderContent>
              <SiteTitle>
                {props.data.logo ? (
                  <img
                    style={{ maxHeight: '270px' }}
                    src={props.data.logo.childImageSharp.fixed.src}
                    alt={config.title}
                  />
                ) : (
                    config.title
                  )}
              </SiteTitle>
            </SiteHeaderContent>
            <SiteNav isHome />
          </div>
        </header>
        <main id="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <div css={[PostFeed, PostFeedRaise]}>

              <article css={PostCardStyles} >
                <div>
                  <iframe src="https://open.spotify.com/embed-podcast/show/4zAHuWOq0jVqeFAYBoMFSv" width="100%" height="232" frameBorder="0" allowTransparency={true} allow="encrypted-media"></iframe>
                </div>

                <PostCardContent className="post-card-content">
                  <a className="post-card-content-link" css={PostCardContentLink} href={"spotify:show:4zAHuWOq0jVqeFAYBoMFSv"}>
                    <header className="post-card-header">
                      <PostCardTags>Ways to listen</PostCardTags>
                      <PostCardTitle>Spotify</PostCardTitle>
                    </header>
                    <PostCardExcerpt>
                      <p>Listen to the show on Spotify</p>
                    </PostCardExcerpt>
                  </a>
                </PostCardContent>
              </article>
              <article css={PostCardStyles} >
                <div>
                  <iframe src="//banners.itunes.apple.com/banner.html?partnerId=&aId=&bt=catalog&t=catalog_black&id=1496558142&c=gb&l=en-GB&w=300&h=250&store=podcast" frameBorder="0" style={{overflowX:"hidden",overflowY:"hidden",width:"320px",height:"232px",border:"0px"}}>
                  </iframe>
                </div>

                <PostCardContent className="post-card-content">
                  <a className="post-card-content-link" css={PostCardContentLink} href={"spotify:show:4zAHuWOq0jVqeFAYBoMFSv"}>
                    <header className="post-card-header">
                      <PostCardTags>Ways to listen</PostCardTags>
                      <PostCardTitle>Apple Podcasts</PostCardTitle>
                    </header>
                    <PostCardExcerpt>
                      <p>Listen to the show on Apple Podcasts</p>
                    </PostCardExcerpt>
                  </a>
                </PostCardContent>
              </article>

              <article css={PostCardStyles} >
                <div style={{height:"232px"}}>
                <a style={{textAlign:"center"}} href='https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&amp;isi=691797987&amp;ius=googleplaymusic&amp;apn=com.google.android.music&amp;link=https://play.google.com/music/m/I4glq4uc7ffxy7552d3pukxel5q?t%3DGreyHatBeard%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16' rel='nofollow'>
                  <img width='125px' style={{margin: "0",width: "auto", paddingTop: "30px"}} alt='Listen on Google Play Music' src='https://play.google.com/intl/en_us/badges-music/images/badges/en_badge_web_music.png'/>
                  </a>
                </div>

                <PostCardContent className="post-card-content">
                  <div></div>
                  <a className="post-card-content-link" css={PostCardContentLink} href={"https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&amp;isi=691797987&amp;ius=googleplaymusic&amp;apn=com.google.android.music&amp;link=https://play.google.com/music/m/I4glq4uc7ffxy7552d3pukxel5q?t%3DGreyHatBeard%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16"}>
                    <header className="post-card-header">
                      <PostCardTags>Ways to listen</PostCardTags>
                      <PostCardTitle>Google Play</PostCardTitle>
                    </header>
                    <PostCardExcerpt>
                      <p>Listen to the show on Google Play</p>
                    </PostCardExcerpt>
                  </a>
                </PostCardContent>
              </article>
              {props.data.allMarkdownRemark.edges.map(post => {
                // filter out drafts in production
                return (
                  (post.node.frontmatter.draft !== true ||
                    process.env.NODE_ENV !== 'production') && (
                    <PostCard key={post.node.fields.slug} post={post.node} />
                  )
                );
              })}
            </div>
          </div>
        </main>
        {props.children}
        <Pagination currentPage={props.pageContext.currentPage} numPages={props.pageContext.numPages} />
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    logo: file(relativePath: { eq: "img/GreyHatBeard-large.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    header: file(relativePath: { eq: "img/microphone.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { draft: { ne: true } } },
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            date
            tags
            draft
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              id
              bio
              avatar {
                children {
                  ... on ImageSharp {
                    fixed(quality: 90) {
                      src
                    }
                  }
                }
              }
            }
          }
          excerpt
          fields {
            layout
            slug
          }
        }
      }
    }
  }
`;
