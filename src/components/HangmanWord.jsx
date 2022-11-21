export function HangmanWord({ guessedLettters, wordToGuess }) {
  return (
    <div className="wordDisplay">
      {wordToGuess.split("").map((letter, i) => (
        <span className="wordSpace" key={i}>
          <span
            style={{
              visibility: guessedLettters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
