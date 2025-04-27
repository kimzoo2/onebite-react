import { useRef, useState } from "react";

const OrderEditor = () => {
  const [order, setOrder] = useState({
    menu: "",
    address: "",
    request: ""
  });
  const addressRef = useRef();

  const onChangeOrder = (e) => {
    setOrder({
      ...order, 
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = () => {
    if (!order.address) {
      addressRef.current.focus();
      return;
    }
    const successMessage = `주문이 완료되었습니다. 메뉴 : ${order.menu}, 주소 : ${order.address}, 요청사항: ${order.request}`;
    alert(successMessage);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          메뉴 선택
        </div>
        <select name="menu" value={order.menu} onChange={onChangeOrder} style={{ width: 300, padding: 5 }}>
          <option value={""}>선택하세요.</option>
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          배달 주소
        </div>
        <input
          ref={addressRef}
          name="address" 
          value={order.address}
          onChange={onChangeOrder}
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          배달 요청사항
        </div>
        <textarea
          name="request" 
          value={order.request}
          onChange={onChangeOrder}
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
        />
      </div>
      <div>
        <button
          onClick={onSubmit}
          style={{ width: 300, padding: 5 }}
        >
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;