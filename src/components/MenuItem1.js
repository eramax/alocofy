import "./MenuItem1.css";

const MenuItem1 = ({ short, name }) => {
  return (
    <button className="item0-button">
      <div className="icon-gridstar-custom-study4">
        <div className="rectangle-div148" />
        <b className="iso-b">{short}</b>
      </div>
      <div className="text-div15">{name}</div>
    </button>
  );
};

export default MenuItem1;
