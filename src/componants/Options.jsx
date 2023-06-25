export default function Options({ onClickhandler }) {
  const questions = ["book", "movie", "character"];

  return questions.map((el, index) => (
    <button onClick={onClickhandler(el)} key={index}>
      {el}
    </button>
  ));
}
