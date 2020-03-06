import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>Upcoming shows</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>Upcoming shows</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                While the three of us love chatting to each other, we also like to have some guests join us.
                Take a look at the shows below that we have planned and let us know using the form below
                if you'd like to help out.
              </p>
              <h3>Planned shows</h3>
              <ul>
                <li>20 Mar 2020 - Contributing to open source projects</li>
                <li>03 Apr 2020 - Governance and the Power Platform</li>
                <li>17 Apr 2020 - How you work and staying focused</li>
              </ul>

              <h3>Show ideas</h3>
              <p>These are some show ideas that might change slightly when we get to planning.</p>
              <ul>
                <li>Here come the robots</li>
              </ul>

              <h3>Want to join us?</h3>
              <iframe width="640px" height= "480px" src= "https://forms.microsoft.com/Pages/ResponsePage.aspx?id=SOvZE8EqTU6oYnByuzanpNqDkzhiYONDjO9rage_cMlURUY3T09FQ1cwTElONDdIWjdBSkM4UzVQVy4u&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" style={{border: "none", maxWidth:"100%", maxHeight:"100vh"}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
<br/>
<br/>
              <h3>Got an idea for the show?</h3>
              <iframe width="640px" height= "480px" src= "https://forms.microsoft.com/Pages/ResponsePage.aspx?id=SOvZE8EqTU6oYnByuzanpNqDkzhiYONDjO9rage_cMlUNlJWQjQ2VENJOUsxQU9QTEdORDQ0NUFMUi4u&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" style={{border: "none", maxWidth:"100%", maxHeight:"100vh"}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
