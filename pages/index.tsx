import React from 'react'
import { GetStaticProps } from 'next'
import { getJsonPreviewProps } from 'utils/getJsonPreviewProps'
import { Footer } from 'components/layout'
import Link from 'next/link'
import { useCMS, useForm, usePlugin } from 'tinacms'
import { useGithubJsonForm } from 'react-tinacms-github'
import { InlineGithubForm } from '../components/layout/InlineGithubForm'

const IconRight = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
    </svg>
  )
}

const TinaIcon = () => {
  return (
    <svg
      viewBox="0 0 49 68"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="title desc"
    >
      <title>Tina</title>
      <desc>A proud llama</desc>
      <path d="M31.4615 30.1782C34.763 27.4475 36.2259 11.3098 37.6551 5.50906C39.0843 -0.291715 44.995 0.00249541 44.995 0.00249541C44.995 0.00249541 43.4605 2.67299 44.0864 4.66584C44.7123 6.65869 49 8.44005 49 8.44005L48.0752 10.8781C48.0752 10.8781 46.1441 10.631 44.995 12.9297C43.8459 15.2283 45.7336 37.9882 45.7336 37.9882C45.7336 37.9882 38.8271 51.6106 38.8271 57.3621C38.8271 63.1136 41.5495 67.9338 41.5495 67.9338H37.7293C37.7293 67.9338 32.1252 61.2648 30.9759 57.9318C29.8266 54.5988 30.2861 51.2658 30.2861 51.2658C30.2861 51.2658 24.1946 50.921 18.7931 51.2658C13.3915 51.6106 9.78922 56.2539 9.13908 58.8512C8.48894 61.4486 8.21963 67.9338 8.21963 67.9338H5.19906C3.36057 62.2603 1.90043 60.2269 2.69255 57.3621C4.88665 49.4269 4.45567 44.9263 3.94765 42.9217C3.43964 40.9172 0 39.1676 0 39.1676C1.68492 35.7349 3.4048 34.0854 10.8029 33.9133C18.201 33.7413 28.1599 32.9088 31.4615 30.1782Z" />
      <path d="M12.25 57.03C12.25 57.03 13.0305 64.2533 17.1773 67.9342H20.7309C17.1773 63.9085 16.7897 53.415 16.7897 53.415C14.9822 54.0035 12.4799 56.1106 12.25 57.03Z" />
    </svg>
  )
}

const TripleDividerSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1200 150"
      className="dividerSvg"
    >
      <g>
        <path
          stroke="var(--color-orange)"
          strokeWidth="4"
          strokeDasharray="8 14"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          d="M591.036 0v70.447m0 0H20c-11.046 0-20 8.955-20 20v51.406m591.036-71.406H1180c11.05 0 20 8.955 20 20V150"
        ></path>
      </g>
      <line
        x1="49.25%"
        x2="49.25%"
        y1="0"
        y2="100%"
        stroke="var(--color-orange)"
        strokeWidth="4"
        strokeDasharray="8 14"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

const SingleDividerSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 600 120"
      width="100%"
      preserveAspectRatio="false"
    >
      <line
        x1="50%"
        x2="50%"
        y1="0"
        y2="100%"
        stroke="var(--color-orange)"
        strokeWidth="4"
        strokeDasharray="8 14"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

const HomePage = (props: any) => {
  let src = 'v1571425758/tina-hero-demo-v2'
  const cms = useCMS()	
  const [formData, form] = useGithubJsonForm(props.file, {	
    label: 'Home Page',	
    fields: [	
      {	
        label: 'Headline',	
        name: 'headline',	
        description: 'Enter the main headline here',	
        component: 'text',	
      },	
      {	
        label: 'Description',	
        name: 'description',	
        description: 'Enter supporting main description',	
        component: 'textarea',	
      },	
      {	
        label: 'Selling Points',	
        name: 'three_points',	
        description: 'Edit the points here',	
        component: 'group-list',	
        //@ts-ignore	
        itemProps: item => ({	
          key: item.id,	
          label: `${item.main.slice(0, 15)}...`,	
        }),	
        defaultItem: () => ({	
          main: 'New Point',	
          supporting: '',	
          _template: 'selling_point',	
        }),	
        fields: [	
          {	
            label: 'Main',	
            name: 'main',	
            component: 'textarea',	
          },	
          {	
            label: 'Supporting',	
            name: 'supporting',	
            component: 'textarea',	
          },	
        ],	
      },	
      {	
        label: 'Setup Headline',	
        name: 'setup.headline',	
        description: 'Enter the "setup" headline here',	
        component: 'textarea',	
      },	
      {	
        label: 'Setup Steps',	
        name: 'setup.steps',	
        description: 'Edit the steps here',	
        component: 'group-list',	
        //@ts-ignore	
        itemProps: item => ({	
          key: item.id,	
          label: `${item.step.slice(0, 15)}...`,	
        }),	
        defaultItem: () => ({	
          step: 'New Step',	
          _template: 'setup_point',	
        }),	
        fields: [	
          {	
            label: 'Step',	
            name: 'step',	
            component: 'textarea',	
          },	
        ],	
      },	
    ],	
  })	

  usePlugin(form)
  
  return (
    <InlineGithubForm form={form}>
      <>
        <div className="banner orange">
          <div className="container">
            <Link href="/enterprise">
              <a>
                <span>
                  Sign up for early access{' '}
                  <span className="tinaCloud">
                    for <em>Tina Cloud</em> ☁️
                  </span>
                </span>
                <IconRight />
              </a>
            </Link>
          </div>
        </div>
        <div className="navbar black">
          <div className="container navContainer">
            <Link href="/">
              <a className="logomark navLogo">
                <TinaIcon />
                <h1 className="wordmark">
                  Tina<span>.io</span>
                </h1>
              </a>
            </Link>
            <nav className="navWrapper navNav">
              <ul className="navUl">
                <li className="navLi">
                  <Link href="/docs">Docs</Link>
                </li>
                <li className="navLi">
                  <Link href="/guides">Guides</Link>
                </li>
                <li className="navLi">
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </nav>
            <div className="githubStar navGithub">
              <iframe
                className="starButton"
                src="https://ghbtns.com/github-btn.html?user=tinacms&repo=tinacms&type=star&count=true&size=large"
                frameBorder="0"
                scrolling="0"
                width="150px"
                height="30px"
              ></iframe>
            </div>
          </div>
        </div>
        <section className="section black">
          <div className="container containerFeature">
            <h2 className="headingHuge">Content editing for modern&nbsp;teams</h2>
            <p className="textHuge">
              Tina is an open-source CMS admin that talks to any API
            </p>
            <div className="buttonGroup buttonGroupCenter">
              <a href="#" className="button buttonOrange">
                Try Demo <IconRight />
              </a>
              <a href="#" className="button buttonGhost">
                Learn More
              </a>
            </div>
          </div>
          <div className="splitBackgroundBlackWhite">
            <div className="container videoContainer">
              <video
                autoPlay={true}
                loop
                muted
                playsInline
                poster={`https://res.cloudinary.com/forestry-demo/video/upload/so_0/${src}.jpg`}
              >
                <source
                  src={`https://res.cloudinary.com/forestry-demo/video/upload/q_100,h_584/${src}.webm`}
                  type="video/webm"
                />
                <source
                  src={`https://res.cloudinary.com/forestry-demo/video/upload/q_80,h_584/${src}.mp4`}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>
        <section className="section white">
          <div className="container containerFeature">
            <h2 className="headingHuge">
              Edit content, in the <em>context of your site</em>
            </h2>
            <p className="textHuge">
              Just click on the page and type. Contextual toolbars and panels
              appear at just the right times to create the content you want.
            </p>
          </div>
          <div className="spacer"></div>
          <div className="container  featureGroup">
            <div className="feature">
              <div className="featureText">
                <h3 className="headingLarge">Page building</h3>
                <hr className="dottedBorder" />
                <p className="textLarge">
                  Pick from your custom predefined components to build web
                  experiences, blazing fast
                </p>
              </div>
              <div className="featureImage">
                <img src="/img/io-placeholder.jpg" alt="" />
              </div>
            </div>
            <div className="feature featureReverse">
              <div className="featureText">
                <h3 className="headingLarge">Design Systems</h3>
                <hr className="dottedBorder" />
                <p className="textLarge">
                  Build pages with YOUR design system. Maximize reusability.
                </p>
              </div>
              <div className="featureImage">
                <img src="/img/io-placeholder.jpg" alt="" />
              </div>
            </div>
            <div className="feature">
              <div className="featureText">
                <h3 className="headingLarge">Improve Time-to-Market</h3>
                <hr className="dottedBorder" />
                <p className="textLarge">
                  Better creative control, don’t rely on developers to make
                  content changes.
                </p>
              </div>
              <div className="featureImage">
                <img src="/img/io-placeholder.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="section blue">
          <div className="container containerFeature">
            <h2 className="headingHuge">
              Build with <em>your components</em>
            </h2>
            <p className="textHuge">
              Let your team build great layouts with your own
              React&nbsp;components.
            </p>
          </div>
          <div className="spacer"></div>
          <div className="container containerWide demoContainer">
            <iframe
              src="https://codesandbox.io/embed/vigilant-cohen-73its?fontsize=147hidenavigation=17theme=dark"
              width="800"
              height="800"
              title="CodeSandbox example of TinaCMS with Next.js"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </section>
        <section className="section white">
          <div className="container containerFeature">
            <h2 className="headingHuge">Avoid Vendor Lock-In</h2>
            <p className="textHuge">
              Add visual editing to your site for logged in users. Write&nbsp;to
              any API.
            </p>
          </div>
          <div className="spacer"></div>
          <div className="container browserContainer">
            <div className="browser browserGrid">
              <div className="browserContent">
                <span className="contentTitle">Tina comes with editing.</span>
                <span className="contentText">
                  Super simple, just click and edit.
                </span>
                <span className="contentFootnote">It’s 35 degrees and sunny</span>
              </div>
              <div className="browserImageWrapper">
                <img className="browserImage" src="img/tina-wow.png" alt="" />
              </div>
            </div>
            <div className="divider dividerMobile">
              <SingleDividerSvg />
            </div>
            <div className="divider dividerDesktop">
              <TripleDividerSvg />
            </div>
            <div className="cardGroup">
              <div className="card cardLinked">
                <div className="linkedContent">
                  <img src="img/headlessCms.png" alt="" className="cardImage" />
                  <h3 className="headingMedium">Headless Cms</h3>
                  <Link href="/docs">
                    <a className="cardLink"></a>
                  </Link>
                  <p className="textLarge">
                    Sync your website data to a headless CMS of your choice
                  </p>
                </div>
                <div className="linkedIcon">
                  <IconRight />
                </div>
              </div>
              <div className="divider dividerMobile">
                <SingleDividerSvg />
              </div>
              <div className="card cardLinked">
                <div className="linkedContent">
                  <img src="img/headlessCms.png" alt="" className="cardImage" />
                  <h3 className="headingMedium">3rd Party APIs</h3>
                  <Link href="/docs">
                    <a className="cardLink"></a>
                  </Link>
                  <p className="textLarge">
                    Sync your website data to a headless CMS of your choice
                  </p>
                </div>
                <div className="linkedIcon">
                  <IconRight />
                </div>
              </div>
              <div className="divider dividerMobile">
                <SingleDividerSvg />
              </div>
              <div className="card cardLinked">
                <div className="linkedContent">
                  <img src="img/headlessCms.png" alt="" className="cardImage" />
                  <h3 className="headingMedium">Git Filesystem</h3>
                  <Link href="/docs">
                    <a className="cardLink"></a>
                  </Link>
                  <p className="textLarge">
                    Sync your website data to a headless CMS of your choice
                  </p>
                </div>
                <div className="linkedIcon">
                  <IconRight />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section lightGray">
          <div className="container containerFeature">
            <h2 className="headingHuge">
              Explore the <em>Tina ecosystem</em>
            </h2>
            <p className="textHuge">
              More than just a headless CMS, Tina has all the tools for building
              web experiences for interdisciplinary teams.
            </p>
          </div>
          <div className="spacer"></div>
          <div className="container  featureGroup">
            <div className="feature">
              <div className="featureText">
                <h3 className="headingLarge">Data Source Plugins</h3>
                <hr className="dottedBorder" />
                <p className="textLarge">
                  Data Source plugins allow you to extend Tina to connect to
                  different databases and 3rd Party APIs
                </p>
                <div className="buttonGroup">
                  <a href="#" className="button buttonLink">
                    Read The Docs <IconRight />
                  </a>
                </div>
              </div>
              <div className="featureImage">
                <img src="/img/io-placeholder.jpg" alt="" />
              </div>
            </div>
            <div className="feature featureReverse">
              <div className="featureText">
                <h3 className="headingLarge">Screen UI Plugins</h3>
                <hr className="dottedBorder" />
                <p className="textLarge">
                  Data Source plugins allow you to extend Tina to connect to
                  different databases and 3rd Party APIs
                </p>
                <div className="buttonGroup">
                  <a href="#" className="button buttonLink">
                    Read The Docs <IconRight />
                  </a>
                </div>
              </div>
              <div className="featureImage">
                <img src="/img/io-placeholder.jpg" alt="" />
              </div>
            </div>
            <div className="feature">
              <div className="featureText">
                <h3 className="headingLarge">Custom Fields</h3>
                <hr className="dottedBorder" />
                <p className="textLarge">
                  Extend primary fields with custom field plugins to completely
                  control the editing experience and functionality.
                </p>
                <div className="buttonGroup">
                  <a href="#" className="button buttonLink">
                    Read The Docs <IconRight />
                  </a>
                </div>
              </div>
              <div className="featureImage">
                <img src="/img/io-placeholder.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <div className="learnTina">
          <div className="container learnContainer">
            <div className="learnImageWrapper">
              <img className="learnImage" src="img/flyingTina.png" alt="" />
            </div>
            <div className="learnContent">
              <h3 className="headingLarge">Learn Tina</h3>
              <p className="textLarge">
                Learn Tina through Interactive & Fun Tutorials.
              </p>
              <div className="buttonGroup">
                <a href="#" className="button buttonOrange">
                  Get Started <IconRight />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <style global jsx>{`
          :root {
            --color-orange: #ec4815;
            --color-orange-light: #eb6337;
            --color-orange-dark: #dc4419;
            --color-yellow: #f2c94c;
            --color-green: #6fcf97;
            --color-black: #1c1b2e;
            --color-blue: #241748;
            --color-white: #ffffff;
            --color-gray: #f3f3f3;
            --color-light-gray: #fafafa;
            --color-seafoam: #e6faf8;
            --color-seafoam-dark: #b4f4e0;

            --color-emphasis: var(--color-orange);
            --color-card-background: var(--color-light-gray);

            --spacer-size: 4.5rem;
            --section-padding: calc(var(--spacer-size) * 2);
          }

          html {
            min-width: 400px;
          }
        `}</style>
        <style jsx>{`
          .pageWrapper {
          }

          .container {
            max-width: 1240px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }

          .containerWide {
            max-width: 1500px;
          }

          .containerFeature {
            max-width: 740px;
            text-align: center;
          }

          .spacer {
            display: block;
            width: 100%;
            height: var(--spacer-size);
          }

          .dottedBorder {
            border-top: none;
            border-right: none;
            border-left: none;
            border-image: initial;
            border-bottom: 4px dotted var(--color-orange);
            width: 6rem;
            max-width: 100%;
            display: block;
            height: 0px;
            margin: 1.5rem 0px;
          }

          .banner {
            :global(a) {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0.75rem 0;
              font-size: 1.25rem;
              line-height: 1.4;
              text-decoration: none;
              color: inherit;
              transition: opacity 150ms ease-out;

              &:hover {
                opacity: 0.8;
              }
            }

            :global(em) {
              font-style: normal;
              font-weight: bold;
              text-decoration: underline;
            }

            :global(svg) {
              margin-left: 1rem;
              height: 1em;
            }
          }

          .tinaCloud {
            display: inline-block;
            white-space: nowrap;
          }

          .navbar {
            padding: 2rem 0 2rem 0;
            margin-bottom: -1px;
          }

          .navContainer {
            display: grid;
            grid-gap: 2rem 1rem;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;

            @media (min-width: 800px) {
              grid-gap: 1rem;
              align-items: center;
              grid-template-columns: auto 1fr auto;
              grid-template-rows: 1fr;
            }
          }

          .navLogo {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 2;
            text-decoration: none;

            @media (min-width: 800px) {
              grid-column-start: 1;
              grid-column-end: 2;
            }
          }

          .navNav {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 2;
            grid-row-end: 3;
            justify-self: center;

            @media (min-width: 800px) {
              grid-column-start: 2;
              grid-column-end: 3;
              grid-row-start: 1;
              grid-row-end: 2;
            }
          }

          .navGithub {
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 2;
            justify-self: end;

            @media (min-width: 800px) {
              grid-column-start: 3;
              grid-column-end: 4;
            }
          }

          .navUl {
            display: flex;
            margin: 0 -1.5rem;
          }

          .navLi {
            margin: 0 1.5rem;

            :global(a) {
              color: white;
              opacity: 0.7;
              transition: opacity 150ms ease-out;
              text-decoration: none;
              font-size: 1.25rem;

              &:hover {
                opacity: 1;
              }
            }
          }

          .logomark {
            color: var(--color-orange);
            fill: var(--color-orange);
            display: flex;
            align-items: center;

            :global(svg) {
              margin-top: -5px;
              height: 40px;
              width: auto;
              margin-right: 12px;
            }
          }

          .wordmark {
            font-size: 26px;
            font-weight: bold;
            font-family: var(--font-tuner);

            :global(span) {
              margin-left: 1px;
            }
          }

          .section {
            padding: var(--section-padding) 0;
          }

          .headingHuge {
            font-family: var(--font-tuner);
            font-weight: bold;
            font-size: 2.75rem;
            line-height: 1.4;
            margin-bottom: 2rem;

            :global(em) {
              font-style: inherit;
              font-weight: inherit;
              color: var(--color-emphasis);

              @media (min-width: 600px) {
                white-space: nowrap;
              }
            }
          }

          .headingLarge {
            font-family: var(--font-tuner);
            margin-bottom: 1rem;
            font-size: 2.25rem;
            font-weight: bold;
          }

          .headingMedium {
            font-size: 1.675rem;
            line-height: 1.4;
            margin-bottom: 1rem;
          }

          .textHuge {
            display: block;
            width: 100%;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            font-size: 1.375rem;

            &:not(:last-child) {
              margin-bottom: 2rem;
            }
          }

          .textLarge {
            font-size: 1.125rem;
            opacity: 0.7;

            &:not(:last-child) {
              margin-bottom: 1.25rem;
            }
          }

          .buttonGroup {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding-top: 0.5rem;
            margin: 0 -0.75rem;

            :global(a),
            :global(button) {
              margin: 0 0.75rem;
            }
          }

          .buttonGroupCenter {
            justify-content: center;
          }

          .button {
            position: relative;
            font-family: var(--font-tuner);
            text-decoration: none;
            color: inherit;
            font-size: 1.25rem;
            line-height: 1;
            font-weight: bold;
            padding: 1rem 1.75rem;
            border-radius: 0.25rem;
            display: flex;
            align-items: center;
            white-space: nowrap;
            outline: none;

            &:after {
              content: '';
              display: block;
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              opacity: 0;
              transition: opacity 150ms ease-out;
              border-radius: 0.25rem;
              box-shadow: 0 0 0 4px currentColor;
            }

            &:focus,
            &:active {
              &:after {
                opacity: 0.3;
              }
            }

            :global(svg) {
              display: inline-block;
              width: auto;
              height: 1.125em;
              margin-left: 0.75rem;
            }
          }

          .buttonLink {
            font-size: 1rem;
            color: var(--color-orange);
            padding: 0;

            &:after {
              width: calc(100% + 1.5rem);
              height: calc(100% + 1rem);
              top: -0.5rem;
              left: -0.75rem;
            }
          }

          .buttonOrange {
            background: var(--color-orange);
            transition: background 150ms ease-out;
            color: white;

            :hover {
              background: var(--color-orange-light);
            }
          }

          .buttonGhost {
            opacity: 0.7;
            transition: opacity 150ms ease-out;

            :hover {
              opacity: 1;
            }
          }

          .videoContainer {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: calc(var(--spacer-size) * 1.5);
            margin-bottom: -9rem;
          }

          .splitBackgroundBlackWhite {
            background: linear-gradient(
              to bottom,
              var(--color-black) 0%,
              var(--color-blue) 50%,
              var(--color-light-gray) 50%,
              var(--color-white) 100%
            );
          }

          video {
            width: 100%;
            margin: 0;
            border-radius: 0.5rem;
            box-shadow: inset 0 0 0 1px rgba(236, 72, 21, 0.03),
              0 6px 24px rgba(0, 37, 91, 0.05), 0 2px 4px rgba(0, 37, 91, 0.03);
          }

          .demoContainer {
            margin-bottom: calc(-1 * var(--section-padding));

            :global(iframe) {
              width: 100%;
              border: none !important;
              display: block;
              margin: 0;
            }
          }

          .browser {
            position: relative;
            padding: 4rem 3rem 3rem 3rem;
            border-radius: 2rem;
            overflow: visible;
            background: var(--color-card-background);
            background: linear-gradient(
              to bottom right,
              var(--color-light-gray) 30%,
              var(--color-gray)
            );
            transform: rotate3d(1, 0, 0, 2deg);
            background-position: top left;
            border-radius: 0.25rem;
            box-shadow: inset 0 0 0 1px rgba(36, 23, 72, 0.03),
              0 24px 32px rgba(36, 23, 72, 0.05), 0 6px 8px rgba(36, 23, 72, 0.03),
              0 48px 48px -64px rgba(36, 23, 72, 0.3);

            &:after {
              content: '';
              display: block;
              position: absolute;
              top: 2rem;
              left: 3rem;
              transform: translate3d(-0.875rem, 0, 0);
              width: 0.875rem;
              height: 0.875rem;
              border-radius: 1rem;
              overflow: visible;
              box-shadow: 0.875rem 0 0 var(--color-orange),
                2.375rem 0 0 var(--color-yellow), 3.875rem 0 0 var(--color-green);
            }
          }

          .browserContainer {
            perspective: 300px;
          }

          .browserGrid {
            display: grid;
            grid-gap: 3rem 2rem;

            @media (min-width: 1000px) {
              grid-template-columns: 1fr 1fr;
              align-items: center;
            }
          }

          .browserContent {
          }

          .contentTitle {
            font-family: var(--font-tuner);
            color: var(--color-orange);
            display: block;
            font-size: 2.25rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }

          .contentText {
            display: block;
            font-size: 1.5rem;
            margin-bottom: 1.25rem;
          }

          .contentFootnote {
            display: block;
            font-size: 1.125rem;
            opacity: 0.5;
          }

          .browserImageWrapper {
            margin-top: -1rem;
          }

          .browserImage {
            display: block;
            width: 100%;
            height: auto;
            margin: 0;
            filter: drop-shadow(0 3px 8px rgba(0, 37, 91, 0.07));
          }

          .divider {
            display: flex;
            justify-content: center;
            width: 100%;

            :global(svg) {
              width: 100%;
              margin: 0 auto;
              overflow: visible !important;

              :global(line),
              :global(path) {
                animation: dash 1s infinite linear;
              }
            }

            @media (min-width: 1000px) {
              :global(svg) {
                width: 66%;
              }
            }
          }

          .dividerDesktop {
            height: 7.5rem;

            :global(svg) {
              height: 100%;
            }

            @media (max-width: 999px) {
              display: none;
            }
          }

          .dividerMobile {
            height: 4rem;

            @media (min-width: 1000px) {
              display: none;
            }

            :global(svg) {
              width: 100%;
            }
          }

          @keyframes dash {
            0% {
              /* strokeDasharray="8 14" <- Sum of these numbers */
              stroke-dashoffset: 22;
            }

            100% {
              stroke-dashoffset: 0;
            }
          }

          .cardGroup {
            display: grid;
            grid-template-rows: 1fr;

            @media (min-width: 1000px) {
              grid-template-columns: 1fr 1fr 1fr;
              gap: calc(var(--spacer-size) * 0.5);
            }
          }

          .card {
            background: var(--color-card-background);
            padding: 2.25rem;
            border-radius: 0.25rem;
            box-shadow: inset 0 0 0 1px rgba(36, 23, 72, 0.03),
              0 6px 24px rgba(36, 23, 72, 0.05), 0 2px 4px rgba(36, 23, 72, 0.03);
          }

          .cardLinked {
            position: relative;
            display: grid;
            grid-template-columns: 1fr auto;
            grid-gap: 2.25rem;

            &:hover {
              :global(> * > *) {
                opacity: 1;
              }

              :global(svg) {
                color: var(--color-orange);
              }
            }
          }

          .linkedContent {
          }

          .linkedIcon {
            width: 2rem;
            margin-right: -0.5rem;
            height: 100%;
            display: flex;
            align-items: center;

            :global(svg) {
              width: 1.5rem;
              height: auto;
              opacity: 0.7;
            }
          }

          .cardLink {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            color: transparent;
            cursor: pointer;
            z-index: 10;
            opacity: 0;
            transition: opacity 150ms ease-out;
            border-radius: 0.25rem;

            &:after {
              content: '';
              display: block;
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              border-radius: 0.25rem;
              box-shadow: inset 0 0 0 1px rgba(36, 23, 72, 0.03),
                0 0 0 5px var(--color-orange), 0 24px 32px rgba(36, 23, 72, 0.05),
                0 6px 8px rgba(36, 23, 72, 0.03),
                0 48px 48px -64px rgba(36, 23, 72, 0.3);
            }

            &:focus,
            &:active {
              opacity: 1;
            }
          }

          .cardImage {
            display: block;
            width: auto;
            margin-bottom: 1.125rem;
          }

          .learnTina {
            padding: 5rem 0;
            background-image: url('/img/clouds.jpg');
            background-position: center top;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .learnContainer {
            display: grid;
            grid-gap: 2rem;
            align-content: center;
            align-items: center;
            max-width: 820px;

            @media (min-width: 1000px) {
              grid-gap: 2rem;
              grid-template-columns: 2fr 3fr;
            }
          }

          @keyframes learnImage {
            0% {
              transform: translate3d(0, -0.5rem, 0);
            }
            100% {
              transform: translate3d(0, 0.75rem, 0);
            }
          }

          .learnImage {
            margin: 0;
            position: relative;
            animation: learnImage 3s ease-in-out infinite alternate;

            @media (prefers-reduced-motion) {
              animation: none;
            }
          }

          .learnContent {
          }

          .featureGroup {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: calc(var(--spacer-size) * 1.5);
            padding-top: calc(var(--spacer-size) * 0.5) 0;
            padding-bottom: calc(var(--spacer-size) * 0.5) 0;
          }

          .feature {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: calc(var(--spacer-size) / 2);
            align-items: center;

            @media (min-width: 900px) {
              grid-template-columns: 1fr 1fr;
              grid-gap: var(--spacer-size);
            }
          }

          .featureReverse {
            direction: rtl;
            > * {
              direction: ltr;
            }
          }

          .featureText {
            :global(p) {
              max-width: 400px;
            }
          }

          .featureImage {
            :global(img) {
              display: block;
              width: 100%;
              height: auto;
              margin: 0;
              border-radius: 0.5rem;
              box-shadow: inset 0 0 0 1px rgba(236, 72, 21, 0.03),
                0 6px 24px rgba(0, 37, 91, 0.05), 0 2px 4px rgba(0, 37, 91, 0.03);
            }
          }

          .orange {
            background: linear-gradient(
              to top right,
              var(--color-orange),
              var(--color-orange-light)
            );
            color: var(--color-white);
          }

          .black {
            background: var(--color-black);
            color: var(--color-white);
          }

          .blue {
            background: var(--color-blue);
            background: linear-gradient(
              to bottom,
              var(--color-blue) 30%,
              var(--color-black) 100%
            );

            color: var(--color-white);

            --color-emphasis: var(--color-orange-light);
          }

          .lightGray {
            background: var(--color-light-gray);
            color: var(--color-black);

            --color-card-background: var(--color-white);
          }

          .white {
            background: var(--color-white);
            color: var(--color-black);
          }
        `}</style>
      </>
    </InlineGithubForm>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async function({
  preview,
  previewData,
}) {
  return getJsonPreviewProps('content/pages/home.json', preview, previewData)
}
