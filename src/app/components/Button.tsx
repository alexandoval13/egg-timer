import { JSX } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  label: string;
  icon?: JSX.Element;
  disabled?: boolean;
  handleClick: () => void;
};

function Button(props: ButtonProps) {
  const { label, icon, disabled = false, handleClick } = props;

  return (
    <button className={styles.button} onClick={handleClick} disabled={disabled}>
      {icon && <div>{icon}</div>}
      <h4>{label}</h4>
    </button>
  );
}

export default Button;
