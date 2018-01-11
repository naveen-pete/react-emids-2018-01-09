import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { getCategories } from '../../api';

export const CATEGORY_ALL = { code: 'all', name: 'All' };

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    getCategories()
      .then(categories => {
        console.log('Success: Get Categories successful!');
        this.setState({ categories: [CATEGORY_ALL, ...categories] });
      })
      .catch(error => {
        console.log('Error: Get Categories failed!');
        console.log('Message: ', error);
      });
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="col-sm-3">
        <h4>
          <FontAwesome name="object-group" /> Category
        </h4>
        <ul className="list-group">
          {categories.map(category => (
            <li
              onClick={() => this.props.categoryClicked(category)}
              key={category.code}
              className="list-group-item cursorPointer"
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
