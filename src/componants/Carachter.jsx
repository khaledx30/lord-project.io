export default function Carachter(props) {
  const { data } = props;
  return data.docs.map((el, index) => <div key={index}> {el.name} </div>);
}
