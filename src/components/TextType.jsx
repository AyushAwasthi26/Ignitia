'use client';

import React, { useEffect, useRef, useState, createElement, useMemo } from 'react';

// Simple CSS for cursor blinking (no GSAP required)
const cursorBlinkStyle = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  className = '',
  showCursor = true,
  hideCursorAfterTyping = true,
  cursorCharacter = '|',
  cursorClassName = '',
  startOnVisible = true,
  onComplete,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible); 
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const containerRef = useRef(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const fullText = textArray.join('');

  // Set up CSS for the cursor blink animation
  useEffect(() => {
    if (showCursor && !document.getElementById('typewriter-style')) {
      const style = document.createElement('style');
      style.id = 'typewriter-style';
      style.innerHTML = cursorBlinkStyle;
      document.head.appendChild(style);
    }
  }, [showCursor]);
  
  // Intersection Observer Logic (Triggers typing when component scrolls into view)
  useEffect(() => {
    if (!containerRef.current || !startOnVisible || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(containerRef.current);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  // Typing Animation Logic (No Deleting)
  useEffect(() => {
    if (!isVisible || isTypingComplete) return;

    let timeout;

    const executeTypingAnimation = () => {
      if (currentCharIndex < fullText.length) {
        // Continue typing
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev + fullText[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, typingSpeed);
      } else {
        // Typing completed
        setIsTypingComplete(true);
        if (onComplete) {
          onComplete();
        }
      }
    };

    // Initial delay before first character
    if (currentCharIndex === 0 && displayedText === '') {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, displayedText, typingSpeed, fullText, initialDelay, isVisible, isTypingComplete, onComplete]);

  // Cursor handling
  const shouldHideCursor = isTypingComplete && hideCursorAfterTyping;

  return createElement(Component, {
    ref: containerRef,
    className: `inline-block whitespace-pre-wrap tracking-tight w-full ${className}`,
    style: { whiteSpace: 'pre-wrap' },
    ...props
  }, 
  <>
    <span className="inline" style={{ whiteSpace: 'pre-wrap' }}>
      {displayedText}
    </span>
    {showCursor && !shouldHideCursor && (
      <span
        className={`ml-1 inline-block ${cursorClassName}`}
        style={{ animation: `blink 0.5s infinite step-end` }}
      >
        {cursorCharacter}
      </span>
    )}
  </>
  );
};

export default TextType;