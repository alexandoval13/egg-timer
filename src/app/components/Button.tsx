import styles from './button.module.css';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  type?: 'small';
};

function Button(props: ButtonProps) {
  const { label, disabled = false, type = '', onClick } = props;

  let buttonStyles = styles.button;
  if (type === 'small') buttonStyles = styles.buttonSm;

  return (
    <button
      className={`${buttonStyles} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <p>{label}</p>
    </button>
  );
}

export default Button;
