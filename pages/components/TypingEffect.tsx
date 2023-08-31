import React, { useState, useEffect } from "react";
import BlurredText from "./BlurredText";

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  displayDuration?: number; 
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1000,
  displayDuration = 2000,
}) => {
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isDeleting) {
      if (word.length === 0) {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTimeout(() => {}, delayBetweenWords);
      } else {
        setTimeout(() => {
          setWord(word.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (word.length === words[index].length) {
        setTimeout(() => {
          setIsDeleting(true);
        }, displayDuration);
      } else {
        setTimeout(() => {
          setWord(words[index].substring(0, word.length + 1));
        }, typingSpeed);
      }
    }
  }, [word, isDeleting, index, words, typingSpeed, deletingSpeed, delayBetweenWords, displayDuration]);

  return (
    <span className="gradient-text text-4xl">
       {word}
      <span className="cursor"></span>
    </span>
  );
};

export default TypingEffect;