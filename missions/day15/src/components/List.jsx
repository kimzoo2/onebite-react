import Item from "./Item";

const List = ({ contacts = [], onDelete }) => {
  return <>
    <div className="title">Contact List </div>
    {contacts.map(contact => <Item key={contact.id} contact={contact} onDelete={onDelete} />)}
  </>
}

export default List;