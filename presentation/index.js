// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')
require('./index.css')

const images = {
  reactLogo: require('../assets/react-logo.svg'),
  idk: require('../assets/idk.gif'),
  srsly: require('../assets/srsly.gif'),
  wakeUp: require('../assets/wake-up.gif'),
  frustrated: require('../assets/frustrated.gif')
}

preloader(images)

const theme = createTheme({
  primary: '#222',
  secondary: '#61dafb'
})

/* eslint-disable import/no-unresolved */
export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={[]} transitionDuration={0} progress="none" controls={false}>
          <Slide>
            <Image src={images.reactLogo} className="react-logo" />
            <Heading textColor="secondary">
              What is React?
            </Heading>
            <Text textSize="1em" lineHeight="1.4em" margin="50px 0 0 0" textColor="white">
              Tim Cheung<br />
              Software Engineer at NewStore Inc.<br />
              <Link href="https://twitter.com/timche_" textColor="white">
                @timche_
              </Link>
            </Text>
          </Slide>

          <Slide bgImage={images.idk} />

          <Slide>
            <BlockQuote>
              <Quote textColor="white">A JavaScript library for building user interfaces</Quote>
              <Link href="https://facebook.github.io/react/">
                <Cite>https://facebook.github.io/react/</Cite>
              </Link>
            </BlockQuote>
          </Slide>

          <Slide bgImage={images.srsly} />

          <Slide>
            <Heading>Declarative</Heading>
          </Slide>

          <Slide>
            <Heading>Component-Based</Heading>
          </Slide>

          <Slide>
            <Heading>Learn Once,<br />Write Anywhere</Heading>
          </Slide>

          <Slide>
            <Heading>"Hello World" Example 👋</Heading>
          </Slide>

          <Slide>
            <Layout>
              <Fill>
                <Heading size={4} textColor="white">ES6/JSX</Heading>
                <CodePane
                  lang="jsx"
                  source={require('raw!../assets/hello-world-jsx.example')}
                />
              </Fill>
              <Appear>
                <Fill>
                  <Heading size={4} textColor="white">ES6/JS</Heading>
                  <CodePane
                    lang="jsx"
                    source={require('raw!../assets/hello-world-js.example')}
                  />
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <Heading size={4} textColor="white">ES5/JS</Heading>
                  <CodePane
                    lang="jsx"
                    source={require('raw!../assets/hello-world-es5.example')}
                  />
                </Fill>
              </Appear>
            </Layout>
          </Slide>

          <Slide bgImage={images.wakeUp}>
            <Heading>That was the boring part. Let's go deeper.</Heading>
          </Slide>

          <Slide>
            <Heading>Which problem does React now solve? 🤔</Heading>
          </Slide>

          <Slide>
            <Heading>It keeps the DOM in sync with data that changes over time. ✨</Heading>
          </Slide>

          <Slide>
            <BlockQuote>
              <Quote textColor="white">When the data changes, React conceptually hits the "refresh" button, and knows to only update the changed parts.</Quote>
              <Link href="https://facebook.github.io/react/">
                <Cite>https://facebook.github.io/react/docs/why-react.html</Cite>
              </Link>
            </BlockQuote>
          </Slide>

          <Slide>
            <CodePane
              lang="json"
              source={require('raw!../assets/data.example')}
            />
          </Slide>

          <Slide>
            <Heading>How do I re-render the list now, when the data changes? 🤔</Heading>
            <List>
              <Appear><ListItem>Re-render the DOM</ListItem></Appear>
              <Appear><ListItem>Write some functions to manipulate the DOM</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgImage={images.frustrated} />

          <Slide>
            <Heading>Let's take a look how it works with React. 👀</Heading>
          </Slide>

          <Slide>
            <Heading>This is what React is and solves ✨<br /><br />Virtual DOM FTW!!1111 🚀</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
