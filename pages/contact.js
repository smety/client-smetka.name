import React from 'react';
import Layout from '../components/Layout/Layout';
import contact from '../static/mock/contact';

export default class Contact extends React.Component {
  render() {
    return (
      <Layout title={'Contact'} description={'E-mail, LinkedIn and Github profiles.'}>
        <h1>Contact</h1>

        <ul>
          <li>
            <strong>E-mail: </strong>
            <a href={contact.email}>{contact.email}</a>
          </li>
          <li>
            <strong>LinkedIn:</strong> <a href={contact.linkedIn}>{contact.linkedIn}</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href={contact.github}>{contact.github}</a>
          </li>
        </ul>
      </Layout>
    );
  }
}
