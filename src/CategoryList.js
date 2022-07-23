import React, { Component } from "react";

export default class CategoryList extends Component {
  constructor(prop){
    super(prop);
    this.state = {
      categories: [
        {categoryId: 1, categoryName: "Beverages"},
        {categoryId: 2, categoryName: "Beverages"}
      ]
    };
  }
  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <ul class="list-group"> 
          {this.state.categories.map(category => (
            <li class="list-group-item" key={category.categoryId}>{category.categoryName}</li>
          ))}
        </ul>
      </div>
    );
  }
}
