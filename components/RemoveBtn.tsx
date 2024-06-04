import { Key } from "react";

interface Iprops {
    id: Key | null | undefined;
}

const RemoveBtn = ({id}:Iprops) => {
  return (
    <div>RemoveBtn {id} </div>
  )
}

export default RemoveBtn