import "./StateListWorkspaces.css";

const StateListWorkspaces = ({ onClose }) => {
  return (
    <div className="state-list-workspaces">
      <div className="assets-list">
        <div className="assets-list-item3">
          <img
            className="icon-controls-play"
            alt=""
            src="../icon--tools--edit4.svg"
          />
          <b className="label1">Configuring</b>
        </div>
        <div className="assets-list-item4">
          <img
            className="icon-controls-play"
            alt=""
            src="../icon--controls--play.svg"
          />
          <b className="label1">Active</b>
        </div>
        <div className="assets-list-item5">
          <img
            className="icon-controls-play"
            alt=""
            src="../icon--selector--completedstep.svg"
          />
          <b className="label1">Completed</b>
        </div>
        <div className="assets-list-item6">
          <img
            className="icon-gridstar-custom-close"
            alt=""
            src="../icon--actions--close-small.svg"
          />
          <b className="label1">Abandoned</b>
        </div>
      </div>
    </div>
  );
};

export default StateListWorkspaces;
