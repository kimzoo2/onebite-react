import { useReducer, useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'

function reducer (state, action) {
  switch (action.type) {
    case "ADD": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state?.filter(value => value.id !== action.id);
    }
    default: {
      return state;
    }
  }
}

function App() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const [contacts, dispatch] = useReducer(reducer, [
    { id: 1, name: "한입스튜디오", email: "onebite.fe@gmail.com" },
    { id: 2, name: "이정환", email: "king199777@gmail.com" },
  ]);

  const onChange = (name, value) => {
    setForm({ ...form, [name]: value });
  }

  const onSubmit = () => {
    dispatch({ type: "ADD", data: form });
    setForm({ name: "", email: "" });
  }

  const onDelete = (id) => {
    dispatch({ type: "DELETE", id });
  }

  return (
    <div className="contact-wrapper">
      <h1>Contact List</h1>
      <section><Form value={form} onChange={onChange} onSubmit={onSubmit} /></section>
      <section><List contacts={contacts} onDelete={onDelete} /></section>
    </div>
  )
}

export default App
