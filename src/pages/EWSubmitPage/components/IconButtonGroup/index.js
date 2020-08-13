import React from "react";
import IconButton from "../IconButton";
import { ColumnFlex, RowFlex } from "../../styles";

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
    />
  ));

  const rows = [];
  for (var i = 0; i < data.length; i += 3) {
    rows.push(
      <RowFlex key={i}>
        {items[i]}
        {items[i + 1]}
        {items[i + 2]}
      </RowFlex>
    );
  }

  return <ColumnFlex>{rows}</ColumnFlex>;
}
