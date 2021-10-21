import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  handleClick = () => {
    return this.props.onClick(1);
  };

  render() {
    return (
      <button onClick={this.handleClick} className="Button" type="button">
        Load More!
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
};
