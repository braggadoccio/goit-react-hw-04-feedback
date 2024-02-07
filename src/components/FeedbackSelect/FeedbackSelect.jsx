import PropTypes from 'prop-types';
import css from './FeedbackSelect.module.css';

export const FeedbackSelect = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          className={css.optionButton}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
