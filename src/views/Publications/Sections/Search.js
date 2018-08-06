import React, { Component } from 'react';
import { Input } from 'react-materialize';
import './Search.css';
import { queryPublications } from '../../../utils/searchAndFilter';

export default class Search extends Component {
  state = { value: '' };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(oldState => {
      const { value } = oldState;
      const { pubs, updatePubs } = this.props;
      const newPubs = queryPublications(pubs, value);
      updatePubs(newPubs);
      return '';
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <form className="publicationSearch" onSubmit={this.handleSubmit}>
          <Input
            name="pubSearch"
            value={value}
            label="Search for publications"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
