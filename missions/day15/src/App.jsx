import { createContext, useCallback, useContext, useReducer } from 'react'
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

export const ContactContext = createContext();
export const ContactDispatchContext = createContext();

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
      <ContactContext.Provider value={{ contacts }}>
        <ContactDispatchContext.Provider value={{ onSubmit, onDelete }}>
          <section><Form /></section>
          <section><List /></section>
        </ContactDispatchContext.Provider>
      </ContactContext.Provider>
    </div>
  )
}

export default App
