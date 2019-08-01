import React from 'react';
import { Link } from '../../routes';

export default class ProductPreview extends React.Component {
  render() {
    let data = this.props;
    return (
      <div>
        <Link route="product" params={{ slug: data.data.product.slug }}>
          <a>{data.data.product.title}</a>
        </Link>
      </div>
    );
  }
}
