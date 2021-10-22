import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  const handleClick = () => {
    return onClick(1);
  };

  return (
    <button onClick={handleClick} className="Button" type="button">
      Load More!
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};
