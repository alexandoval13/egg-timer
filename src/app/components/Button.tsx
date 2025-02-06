import styles from './button.module.css';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  handleClick: () => void;
};

function Button(props: ButtonProps) {
  const { label, disabled = false, handleClick } = props;

  return (
    <button className={styles.button} onClick={handleClick} disabled={disabled}>
      <h4>{label}</h4>
    </button>
  );
}

export default Button;
