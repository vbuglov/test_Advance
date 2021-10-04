import React from "react";
import Document, { Head, Main, NextScript, Html } from "next/document";

export default class DocumentPage extends Document {
  static async getInitialProps({ renderPage }) {
    try {
      const page = renderPage(
        (App) => (props) => styles.collectStyles(<App {...props} />)
      );
      return { ...page };
    } catch (err) {
      throw err;
    }
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <meta charSet="utf-8" />
          <meta name="renderer" content="webkit" />
          <link rel="icon" href="/favicon.ico?v=7" />
          <link rel="stylesheet" href="/static/styles/main.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap"
            rel="stylesheet"
          />
          {this.props.styleElem}
        </Head>

        <body id="body">
          <Main />
          <NextScript />
        </body>

        <noscript>Ваш браузер не обрабатывает JS</noscript>
      </Html>
    );
  }
}
