"use client";

import React, { useEffect, useState, useRef } from "react";

interface NumberPopInProps {
  value: string | number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
}

interface DigitSlot {
  key: string;
  fresh: string;
  old?: string;
  same: boolean;
  stagger?: string;
}

/**
 * Number pop-in transition from transitions.dev
 * Swaps changed digits on a 3D drum with anticipation, blur, and bounce.
 * Digits shared between the old and new value stay still.
 */
export function NumberPopIn({
  value,
  prefix,
  suffix,
  className = "",
}: NumberPopInProps) {
  const currentStr = String(value);
  const [prevStr, setPrevStr] = useState<string>(currentStr);
  const [animating, setAnimating] = useState(false);
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (prevStr !== currentStr) {
      setAnimating(false);
      const raf = requestAnimationFrame(() => {
        setAnimating(true);
      });

      const timer = setTimeout(() => {
        setPrevStr(currentStr);
        setAnimating(false);
      }, 650);

      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(timer);
      };
    }
  }, [currentStr, prevStr]);

  // Leading shared characters stay static
  let sameCount = 0;
  if (animating) {
    while (
      sameCount < prevStr.length &&
      sameCount < currentStr.length &&
      prevStr[sameCount] === currentStr[sameCount]
    ) {
      sameCount++;
    }
  }

  const slots: DigitSlot[] = [...currentStr].map((ch, i) => {
    const isSame = !animating || i < sameCount || !/\d/.test(ch);
    const fromEnd = currentStr.length - 1 - i;
    const stagger = fromEnd === 1 ? "1" : fromEnd === 0 ? "2" : undefined;
    const oldIndex = prevStr.length - (currentStr.length - i);
    const oldCh = animating && oldIndex >= 0 ? prevStr[oldIndex] : undefined;

    return {
      key: `${i}-${ch}`,
      fresh: ch,
      old: oldCh && /\d/.test(oldCh) && oldCh !== ch ? oldCh : undefined,
      same: isSame,
      stagger,
    };
  });

  return (
    <span className={`t-digit-group ${animating ? "is-animating" : ""} ${className}`}>
      {prefix && <span className="t-prefix select-none mr-0.5">{prefix}</span>}
      {slots.map((slot) => {
        if (slot.same) {
          return (
            <span key={slot.key} className="t-digit" data-same>
              {slot.fresh}
            </span>
          );
        }
        return (
          <span key={slot.key} className="t-digit-slot" data-stagger={slot.stagger}>
            {slot.old && (
              <span className="t-digit-old" aria-hidden="true">
                {slot.old}
              </span>
            )}
            <span className="t-digit">{slot.fresh}</span>
          </span>
        );
      })}
      {suffix && <span className="t-suffix select-none ml-0.5">{suffix}</span>}
    </span>
  );
}
