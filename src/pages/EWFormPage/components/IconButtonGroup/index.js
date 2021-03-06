
import React from "react";
import IconButton from "../IconButton";
import { RowFlex } from "./styles";

export default function IconButtonGroup(props) {
  const { data, selected, toggle, state } = props;

  const items = data.map((x) => (
    <IconButton
      icon={x.icon}
      id={x.id}
      text={x.text}
      selected={selected.includes(x.id)}
      toggle={toggle}
      state={state}
      key={x.icon}
    />
  ));

  return <RowFlex>{items}</RowFlex>;
}