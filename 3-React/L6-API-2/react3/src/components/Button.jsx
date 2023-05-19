import PropTypes from 'prop-types';
import s from '../styles/Button.module.css';

export default function Button({ text, buttonClick }) {
  return (
    <button className={s.button} type="button" onClick={buttonClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
