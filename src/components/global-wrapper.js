import React, { Fragment } from "react";
import Helmet from "react-helmet";
import GlobalStyle from "styles/global-style";

class GlobalWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOutlines: false,
    };
  }
  componentDidMount() {
    window.addEventListener("keydown", (e) => this.handleKeyboardInput(e));
  }

  handleKeyboardInput(e) {
    const key = e.keyCode || e.charCode;
    // Tab
    if (key === 9) {
      this.setState({ displayOutlines: true });
    }
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <html lang="en" />
          <title>Gradiot</title>
          <meta name="description" content="/ 4 Years Wasted /" />
          <meta
            name="keywords"
            content="design, ux, ui, product, coding, college, productivity, learning, selflearning, techno, code, "
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/N37FHfD/preview.jpg"
          />
          <meta property="og:description" content="/ 4 Years Wasted /" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://gradiot.us" />
          <meta property="og:title" content="Gradiot" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <GlobalStyle displayOutlines={this.state.displayOutlines} />
        {this.props.children}
      </Fragment>
    );
  }
}

export default GlobalWrapper;
