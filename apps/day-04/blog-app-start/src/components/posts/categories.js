import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import * as ReadableApi from '../../api';

export const CATEGORY_ALL = { code: 'all', name: 'All' };

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      selectedCategory: CATEGORY_ALL
    };
  }

  componentDidMount() {
    ReadableApi.getCategories()
      .then(categories => {
        console.log('Success: Get categories successful!');
        this.setState({ categories: [CATEGORY_ALL, ...categories] });
      })
      .catch(error => {
        console.log('Error: Get categories failed!');
        console.log('Message: ', error);
      });
  }

  onCategoryClick(selectedCategory) {
    this.setState({ selectedCategory });
    this.props.categoryClicked(selectedCategory);
  }

  addActiveIfSelected(category) {
    const { code } = this.state.selectedCategory;
    return code === category.code ? 'active' : '';
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
              onClick={() => this.onCategoryClick(category)}
              key={category.code}
              className={`list-group-item cursorPointer 
                ${this.addActiveIfSelected(category)}`}
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
