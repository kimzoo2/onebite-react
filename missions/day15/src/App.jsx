import { useCallback, useReducer } from 'react'
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
  const [contacts, dispatch] = useReducer(reducer, [
    { id: 1, name: "한입스튜디오", email: "onebite.fe@gmail.com" },
    { id: 2, name: "이정환", email: "king199777@gmail.com" },
  ]);

  const onSubmit = useCallback((data) => {
    dispatch({ type: "ADD", data: { ...data, id: new Date().getTime() }});
  }, [])

  const onDelete = useCallback((id) => {
    dispatch({ type: "DELETE", id });
  }, []);

  return (
    <div className="contact-wrapper">
      <h1>Contact List</h1>
      <section><Form onSubmit={onSubmit} /></section>
      <section><List contacts={contacts} onDelete={onDelete} /></section>
    </div>
  )
}

export default App
