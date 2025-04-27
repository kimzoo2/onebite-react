import { useContext } from "react";
import Item from "./Item";
import { ContactContext } from "../App";

const List = () => {
  const { contacts } = useContext(ContactContext);

  return <>
    <div className="title">Contact List </div>
    {contacts.map(contact => <Item key={contact.id} contact={contact} />)}
  </>
}

export default List;