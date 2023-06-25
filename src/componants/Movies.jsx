import React from "react";

export default function Movies(props) {
  const { data } = props;
  return data.docs.map((el, index) => <div key={index}> {el.name} </div>);
}
