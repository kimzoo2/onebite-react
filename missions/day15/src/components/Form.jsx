import { useRef } from "react";

const Form = ({ value, onChange, onSubmit }) => {
  const nameRef = useRef();
  const emailRef = useRef();

  const onChangeForm = (e) => {
    onChange(e.target.name, e.target.value);
  }

  const onClickAdd = () => {
    if (!value.name) {
      nameRef.current.focus();
      return;
    }
    if (!value.email) {
      emailRef.current.focus();
      return;
    }
    onSubmit();
  }

  return <>
    <div className="title">Add Contact</div>
    <input ref={nameRef} name="name" value={value.name} placeholder="이름을 입력하세요." onChange={onChangeForm} />
    <input ref={emailRef} name="email" value={value.email} placeholder="연락처(이메일)을 입력하세요." onChange={onChangeForm} />
    <button onClick={onClickAdd}>Add</button>
  </>
}

export default Form;