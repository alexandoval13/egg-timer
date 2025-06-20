'use client';
import styles from './selector.module.css';

import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';

type SelectorProps = {
  indValue: number;
  onChange: (val: number) => void;
  options: Array<string | number>;
};

const Selector = ({ indValue, onChange, options }: SelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Scroll to change value & adjust view
  useEffect(() => {
    if (!isOpen || !dropdownRef.current) return;

    const dropdown = dropdownRef.current;
    let accumulatedDelta = 0;
    const threshold = 30;

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.deltaX !== 0) return; // skip pinch-zoom/side scroll
      e.preventDefault();
      accumulatedDelta += e.deltaY;

      while (Math.abs(accumulatedDelta) >= threshold) {
        const direction = Math.sign(accumulatedDelta);
        let newIndex = indValue + direction;
        newIndex = Math.max(0, Math.min(options.length - 1, newIndex));

        if (newIndex !== indValue) {
          onChange(newIndex);
          const optionsEl = dropdown.querySelectorAll(`.${styles.option}`);
          const target = optionsEl[newIndex] as HTMLElement;
          if (target) dropdown.scrollTop = target.offsetTop - 8;
        }

        accumulatedDelta -= threshold * direction;
      }
    };

    // Only listen to wheel (not touch)
    dropdown.addEventListener('wheel', handleWheel, { passive: false });
    return () => dropdown.removeEventListener('wheel', handleWheel);
  }, [isOpen, indValue, onChange]);

  // Scroll to selected on open (without jump)
  useEffect(() => {
    if (!isOpen || !dropdownRef.current) return;

    const dropdown = dropdownRef.current;
    const selected = dropdown.querySelector(
      `.${styles.selected}`
    ) as HTMLElement;

    if (selected) {
      dropdown.scrollTop = selected.offsetTop - 8; // small top buffer
    }
  }, [isOpen]);

  // Close on mouse leave
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseLeave = () => setIsOpen(false);
    container.addEventListener('mouseleave', handleMouseLeave);
    return () => container.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onMouseEnter={() => setIsOpen(true)}
    >
      <Button
        label={options[indValue].toString()}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <div className={styles.dropdownWrapper}>
        {isOpen && (
          <div ref={dropdownRef} className={styles.dropdown}>
            {options.map((value, i) => (
              <div
                key={i}
                className={`${styles.option} ${
                  i === indValue ? styles.selected : ''
                }`}
                onClick={() => {
                  onChange(i);
                  setIsOpen(false);
                }}
              >
                {value}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Selector;
