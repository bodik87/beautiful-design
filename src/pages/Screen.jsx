import { useParams } from "react-router-dom";

export const Screen = ({ image }) => {
  const { id } = useParams();
  return (
    <div>
      <img src={image} alt={image} />
    </div>
  );
};
