import { useState } from "react";
import words from "./words.json";
import "./App.css";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";

function App() {
  const random = words[Math.floor(Math.random() * words.length)];
  const [wordToGuess, setWordToGuess] = useState(random);

  const [guessedLettters, setGuessedLetters] = useState([]);

  return (
    <div className="main">
      <div className="status">Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
