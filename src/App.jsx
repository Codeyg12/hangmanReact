import { useEffect, useState } from "react";
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

  // useEffect(() => {
  // }, [])
  console.log(e)

  return (
    <div className="main">
      <div className="status">Lose Win</div>
      <HangmanDrawing totalGuesses={incorrectLetters.length} />
      <HangmanWord guessedLettters={guessedLettters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
