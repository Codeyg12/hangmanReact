export function HangmanWord({ guessedLettters, wordToGuess, reveal = false }) {
  return (
    <div className="wordDisplay">
      {wordToGuess.split("").map((letter, i) => (
        <span className="wordSpace" key={i}>
          <span
            style={{
              visibility:
                guessedLettters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLettters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
