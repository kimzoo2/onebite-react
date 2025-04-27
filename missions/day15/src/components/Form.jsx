import { useRef, useState } from "react";

const Form = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const nameRef = useRef();
  const emailRef = useRef();

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const onClickAdd = () => {
    if (!form.name) {
      nameRef.current.focus();
      return;
    }
    if (!form.email) {
      emailRef.current.focus();
      return;
    }
    onSubmit(form);
    setForm({ name: "", email: "" });
  }

  return <>
    <div className="title">Add Contact</div>
    <input ref={nameRef} name="name" value={form.name} placeholder="이름을 입력하세요." onChange={onChangeForm} />
    <input ref={emailRef} name="email" value={form.email} placeholder="연락처(이메일)을 입력하세요." onChange={onChangeForm} />
    <button onClick={onClickAdd}>Add</button>
  </>
}

export default Form;