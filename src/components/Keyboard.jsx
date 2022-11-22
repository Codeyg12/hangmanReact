const KEYS = [
    "a",
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
]

export function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled=false }) {
    return (
        <div class='keyboard'>
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return <button onClick={() => addGuessedLetter(key)} className={`btn ${isActive ? `active` : ``} ${isInactive ? `inactive` : ``}`} disabled={isInactive || isActive} key={key}>{key}</button>
            })}
        </div>
    )
}