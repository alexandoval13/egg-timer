import styles from './button.module.css';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  type?: 'small' | 'large';
};

function Button(props: ButtonProps) {
  const { label, disabled = false, type = '', onClick } = props;

  // const buttonStyles = switch
  let buttonStyles = styles.button;
  if (type === 'small') buttonStyles = styles.buttonSm;
  if (type === 'large') buttonStyles = styles.buttonLg;

  return (
    <button className={buttonStyles} onClick={onClick} disabled={disabled}>
      <p className={styles['btn-text']}>{label}</p>
    </button>
  );
}

export default Button;
