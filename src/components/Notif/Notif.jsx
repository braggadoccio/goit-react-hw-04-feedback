import PropTypes from 'prop-types';

export const Notif = ({ message }) => {
  return <div>{message}</div>;
};

Notif.propTypes = {
  message: PropTypes.string.isRequired,
};
