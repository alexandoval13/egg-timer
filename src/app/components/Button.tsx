import styles from './button.module.css';

type ButtonProps = {
  label: string;
  handleClick: () => void;
};

function Button(props: ButtonProps) {
  const { label, handleClick } = props;

  return (
    <button className={styles.button} onClick={handleClick}>
      <h4>{label}</h4>
    </button>
  );
}

export default Button;
