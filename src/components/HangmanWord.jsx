export function HangmanWord({ guessedLettters, wordToGuess, reveal = false }) {
  console.log(wordToGuess)
  return (
    <div className={wordToGuess.length > 8 ? "longWord" : "wordDisplay"}>
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
