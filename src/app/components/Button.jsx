import { LoadingSpinner } from '@components';
import '@css/components/Button.css';

export const Button = ({
  text,
  background = '#ea7200',
  color = '#fff',
  onClick,
  isLoading,
  isDisabled = false,
}) => {
  return (
    <div
      className={`box-shadow btn${isDisabled ? ' disabled' : ''}`}
      style={{ backgroundColor: background, color: color }}
      onClick={onClick}
    >
      <div className='btn-inner'>
        {!isLoading ? (
          <span className='outline-black'>{text}</span>
        ) : (
          <LoadingSpinner size='small' />
        )}
      </div>
    </div>
  );
};
