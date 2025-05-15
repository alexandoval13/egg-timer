import styles from './button.module.css';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

function Button(props: ButtonProps) {
  const { label, disabled = false, onClick } = props;

  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      <h4 className={styles['btn-text']}>{label}</h4>
    </button>
  );
}

export default Button;
