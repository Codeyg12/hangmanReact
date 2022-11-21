export function HangmanWord() {
  const guessedLettters = [];

  const word = 'codey'

  return (
    <div className="wordDisplay">
      {word.split("").map((letter, i) => (
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
