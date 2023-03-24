import { ThreeDots } from "react-loader-spinner";
import "./styles/loader.scss";

export default function Loader() {
  return (
    <div className="loader">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#f39563ff"
        visible={true}
      />
    </div>
  );
}