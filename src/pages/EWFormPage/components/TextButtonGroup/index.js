import React from "react";
import TextButton from "../TextButton";
import { RowFlex } from "../../styles";

export default function TextButtonGroup(props) {
  const { data, selected, toggle, state } = props;

  const items = data.map((x) => (
    <TextButton
      id={x.id}
      text={x.text}
      selected={selected.includes(x.id)}
      toggle={toggle}
      state={state}
      key={x.text}
    />
  ));

  return <RowFlex>{items}</RowFlex>;
}
