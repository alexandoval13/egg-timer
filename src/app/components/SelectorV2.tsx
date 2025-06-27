'use client';

import styles from './selectorV2.module.css';

import { useEffect, useRef, useState } from 'react';

type SelectorV2Props = {
  options: Array<string | number>;
  indValue: number;
  onChange: (val: number) => void;
};

const SelectorV2 = ({ options, indValue, onChange }: SelectorV2Props) => {
  const [selectorV2Val, setSelectorV2Val] = useState<number>(indValue);
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (index: number) => {
    if (index !== selectorV2Val) {
      setSelectorV2Val(index);
      onChange(index);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen || !listRef.current) return;

    const list = listRef.current;
    const selected = list.querySelector(
      `.${styles.selectedItem}`
    ) as HTMLElement;

    if (selected) list.scrollTop = selected.offsetTop;
  }, [isOpen]);

  return (
    <div
      className={styles.wrapper}
      ref={inputRef}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={styles.input} onMouseEnter={() => setIsOpen(true)}>
        <p>{selectorV2Val}</p>
      </div>
      {isOpen && (
        <div className={styles.listWrapper}>
          <div className={styles.list} ref={listRef}>
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
  );
};

export default SelectorV2;
