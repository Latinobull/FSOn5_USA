import PropTypes from 'prop-types';

export default function Wrapper({ children }) {
  return <div>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node,
};
