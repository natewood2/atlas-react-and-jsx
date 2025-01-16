import Copy from "../assets/copy.svg";

const CopyLink = ({ link }) => {
  const handleClick = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <img src={Copy} alt="Copy That Link" onClick={handleClick} style={{ cursor: "pointer" }}/>
  );
};

export default CopyLink;
