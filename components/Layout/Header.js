import { Link } from '../../routes';
import React from 'react';
import css from '../../assets/css.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className={css.header}>
        <nav>
          <Link route="contact">
            <a className={css.link}>Contact</a>
          </Link>

          <Link route="skill">
            <a className={css.link}>Skill</a>
          </Link>

          <Link route="project">
            <a className={css.link}>Project</a>
          </Link>
        </nav>
      </header>
    );
  }
}
