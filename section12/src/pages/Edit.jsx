import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  return <div>Edit: {params.id}번 일기</div>
}

export default Edit;