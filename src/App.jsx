import { useCallback, useEffect, useState } from "react";
import words from "./words.json";
import "./App.css";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";

function App() {
  const random = words[Math.floor(Math.random() * words.length)];
  const [wordToGuess, setWordToGuess] = useState(random);

  const [guessedLettters, setGuessedLetters] = useState([]);

  const incorrectLetters = guessedLettters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split('').every(letter => guessedLettters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter) => {
      if (guessedLettters.includes(letter) || isLoser || isWinner) return

      setGuessedLetters((currentLetters) => [...currentLetters, letter])
    }, [guessedLettters, isLoser, isWinner]
  )

  useEffect(() => {
    const handler = (e) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLettters])

  return (
    <div className="main">
      <div className="status">
        {isWinner && 'Winner! Refresh to play again'}
        {isLoser && 'You lost! Refresh to play again'}
      </div>
      <HangmanDrawing totalGuesses={incorrectLetters.length} />
      <HangmanWord guessedLettters={guessedLettters} wordToGuess={wordToGuess} reveal={isLoser} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard activeLetters={guessedLettters.filter(letter => wordToGuess.includes(letter))} inactiveLetters={incorrectLetters} addGuessedLetter={addGuessedLetter} disabled={isWinner || isLoser} />
      </div>
    </div>
  );
}

export default App;
