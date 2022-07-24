import React, { Component } from "react";

export default class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Ice Chocolate Mocha" },
    ]
  };

  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>

        <ul class="list-group">
          {this.state.categories.map((category) => (
            <li
              class="list-group-item"
              onClick={() => this.props.changeCategory(category)}
              key={category.categoryId}
            >
              {category.categoryName}
            </li>
          ))}
        </ul>

        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
