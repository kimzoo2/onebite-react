import React, { useContext } from "react";
import { ContactDispatchContext } from "../App";

const Item = ({ contact }) => {
  const { onDelete } = useContext(ContactDispatchContext);

  const onClickDelete = (id) => {
    onDelete(id);
  }

  return <div className="item">
    <span>{contact.name}</span>
    <span>{contact.email}</span>
    <button onClick={() => onClickDelete(contact.id)}>Remove</button>
  </div>
}

export default React.memo(Item);