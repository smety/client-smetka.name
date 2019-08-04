import React from 'react';
import Layout from '../components/Layout/Layout';
import css from './../assets/project.scss';
import fetch from 'isomorphic-fetch';
import getMockData from '../functions/mockApi';

export default class Project extends React.Component {
  static async getInitialProps() {
    const data = await fetch(getMockData('external'));
    const project = await data.json();
    return {
      project,
      active: 'external',
      head: 'Client project',
    };
  }

  async handleChangeProject(sourceType = 'external', header = 'Client project') {
    const res = await fetch(getMockData(sourceType));
    const data = await res.json();
    this.setState({ project: data, active: sourceType, head: header });
  }

  render() {
    const { project, head } = this.props;

    return (
      <Layout title={head} description={'Client project'}>
        <h1>{head}</h1>

        <a
          className={css.filterLink}
          onClick={() => this.handleChangeProject('external', 'Client project')}
        >
          External project
        </a>
        <a className={css.filterLink} onClick={() => this.handleChangeProject('my', 'My project')}>
          My project
        </a>

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
