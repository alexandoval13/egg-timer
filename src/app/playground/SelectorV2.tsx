'use client';

import styles from './selectorV2.module.css';

import { useRef, useState } from 'react';

const SelectorV2 = () => {
  const [selectorV2Val, setSelectorV2Val] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const inputRef = useRef(null);

  const options = Array.from(Array(14).keys());

  const handleSelect = (index: number) => {
    if (index !== selectorV2Val) setSelectorV2Val(index);
    setIsOpen(false);
  };

  return (
    <div>
      <p>V2 Selector</p>
      <div
        className={styles.wrapper}
        ref={inputRef}
        // onMouseLeave={() => setIsOpen(false)}
      >
        <div className={styles.input} onMouseEnter={() => setIsOpen(true)}>
          <p>{selectorV2Val}</p>
        </div>
        {isOpen && (
          <div className={styles.listWrapper}>
            <div className={styles.list}>
              {options.map((item, i) => (
                <div
                  className={
                    i === selectorV2Val ? styles.selectedItem : styles.listItem
                  }
                  key={`list::item::${i}::${item}`}
                  onClick={() => handleSelect(i)}
                >
                  <p>{options[i]}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectorV2;
