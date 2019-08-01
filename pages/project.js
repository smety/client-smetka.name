import React from 'react';
import Layout from '../components/Layout/Layout';
import css from './../assets/project.scss';
import externalProjectSource from '../config/externalProject';

export default class Project extends React.Component {
  static async getInitialProps() {
    const data = externalProjectSource;
    return data;
  }

  handleChangeProject() {}

  render() {
    return (
      <Layout title={'Project and reference'} description={'My project and reference'}>
        <h1>Project and reference</h1>

        <a onClick={() => this.handleChangeProject('externalProjectSource')}>External project</a>
        <a onClick={() => this.handleChangeProject('myProjectSource')}>My project</a>

        <div className={css.container}>
          {Object.entries(this.props).map(([key, value]) => (
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
