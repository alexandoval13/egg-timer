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
      <h6>{label}</h6>
    </button>
  );
}

export default Button;
