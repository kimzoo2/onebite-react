import React from "react";

const Item = ({ contact, onDelete }) => {
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