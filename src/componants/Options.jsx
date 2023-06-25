export default function Options({ selection, onClickhandler }) {
  const questions = ["book", "movie", "character"];

  console.log("slection:", selection);

  return questions.map((el, index) => (
    <button onClick={onClickhandler(el)} key={index}>
      {el}
    </button>
  ));
}
