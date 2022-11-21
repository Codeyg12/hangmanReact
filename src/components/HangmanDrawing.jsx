const HEAD = (
  <div className="head" />
)

const BODY = (
  <div className="body" />
)

const LEFT_ARM = (
  <div className="left-arm" />
)

const RIGHT_ARM = (
  <div className="right-arm" />
)

const LEFT_LEG = (
  <div className="left-leg" />
)

const RIGHT_LEG = (
  <div className="right-leg" />
)

export function HangmanDrawing() {
  return (
    <div className="hangPost">
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div className="rope"></div>
      <div className="barTop"></div>
      <div className="barSupport"></div>
      <div className="barBase"></div>
    </div>
  );
}
