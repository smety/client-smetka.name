import React from 'react';
import Layout from '../components/Layout/Layout';
import css from './../assets/project.scss';
import fetch from 'isomorphic-fetch';

export default class Reference extends React.Component {
  static async getInitialProps() {
    const data = await fetch('https://api.myjson.com/bins/ioh4z');
    const project = await data.json();
    return { project };
  }

  render() {
    const { project } = this.props;

    return (
      <Layout title={'Client reference'} description={'Client reference'}>
        <h1>Client reference</h1>

        <div className={css.container}>
          {Object.entries(project).map(([key, value]) => (
            <div key={key} className={css.item}>
              <h3 className={css.header}>{value.title}</h3>
              <p>{value.technology}</p>
              <a href={value.website} className={css.link} target="_blank">
                {value.website}
              </a>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}
