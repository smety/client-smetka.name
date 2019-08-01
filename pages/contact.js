import React from 'react';
import Layout from '../components/Layout/Layout';
import contact from '../config/contact';

export default class Contact extends React.Component {
  render() {
    const getContactData = contact();

    return (
      <Layout
        title={'Tomas Smetka - frontend developer (contact)'}
        description={' Tomas Smetka, frontend developer - contact.'}
      >
        <h1>Contact</h1>

        <ul>
          <li>
            <strong>E-mail: </strong>
            <a href={getContactData.email}>{getContactData.email}</a>
          </li>

          <li>
            <strong>Phone:</strong> {getContactData.phone}
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a href={getContactData.linkedIn}>{getContactData.linkedIn}</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href={getContactData.github}>{getContactData.github}</a>
          </li>
        </ul>
      </Layout>
    );
  }
}
