import { PuffLoader } from "react-spinners";

const Loader: React.FC = () => {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <PuffLoader color="#3f51b5" size={60} />
    </div>
  );
};

export default Loader;