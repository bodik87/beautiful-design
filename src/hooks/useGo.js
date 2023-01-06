import { useNavigate } from "react-router-dom";

export const useGo = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const goBack = () => navigate(-1);
  return {
    goHome,
    goBack,
  };
};
