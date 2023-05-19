import PropTypes from 'prop-types';
import s from '../styles//Container.module.css';

export default function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node,
};
