import React from 'react';
import Layout from '../components/Layout/Layout';

export default class Skill extends React.Component {
  render() {
    const skill = [
      'EcmaScript 6',
      'Vanilla JS',
      'SASS (BEM & atomic design)',
      'LESS',
      'Bootstrap 4',
      'Webpack',
      'Cypress.js',
      'Vue.js',
      'ReactJS & Next.js (beginner)',
      'Prettier',
    ];

    return (
      <Layout
        title={'Skill and technology'}
        description={'Work at SASS, JavaScript, Bootstrap 4, Webpack and Cypress.js.'}
      >
        <h1>My skill</h1>

        <ul>
          {skill.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Layout>
    );
  }
}
