import Head from 'next/head';
import Footer from './Footer';
import React from 'react';
import Header from './Header';
import '../../assets/css.scss';
import css from '../../assets/css.scss';

export default class Layout extends React.Component {
  render() {
    const {
      children,
      title = 'Frontend developer',
      description = 'Vue.js, Webpack, SASS, Node.js, React.js, Vanilla JS',
    } = this.props;

    return (
      <div>
        <Head>
          <title>{title} - Tomas Smetka</title>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta
            name="google-site-verification"
            content="7bz8tJSJ8yYqC9JLbs2HnrPqCfBry1RNEPidWz_zAac"
          />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <div className={css.container}>
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}
