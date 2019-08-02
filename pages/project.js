import React from 'react';
import Layout from '../components/Layout/Layout';
import css from './../assets/project.scss';
import external from '../static/mock/external';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: external,
      active: 'external',
      header: 'Client project',
    };
  }

  async handleChangeProject(sourceType = 'external', header = 'Client project') {
    const res = await fetch(`./static/mock/${sourceType}.json`);
    const data = await res.json();
    this.setState({ project: data, active: sourceType, header: header });
  }

  render() {
    const { project, header } = this.state;

    return (
      <Layout title={header} description={'Client project'}>
        <h1>{header}</h1>

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
