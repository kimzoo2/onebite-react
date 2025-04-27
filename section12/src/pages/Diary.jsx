import { useParams, useSearchParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  const [query, setQuery] = useSearchParams();

  console.log(params);
  console.log(query.get("value"));
  return <div>{params.id} 일기</div>
}

export default Diary;