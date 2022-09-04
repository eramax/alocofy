import "./FormPopup.css";

const FormPopup = ({ onClose }) => {
  return (
    <div className="formpopup-div">
      <div className="frame-div91">
        <div className="title-div">
          <div className="frame-div92">
            <div className="icon-gridstar-custom-study1">
              <div className="rectangle-div1" />
              <b className="mcp-b1">--</b>
            </div>
            <div className="title-div1">Study</div>
          </div>
          <div className="description-div">{`Enter the workflow details before saving. `}</div>
        </div>
        <div className="action-bar-div">
          <div className="divider3" />
        </div>
        <div className="frame-div93">
          <div className="input-box-div">
            <div className="assets-input-label">
              <div className="label-div7">Name</div>
            </div>
            <div className="assets-input-box1">
              <input
                className="input-auto-layout1"
                type="text"
                placeholder="Main Circuit Parameters"
              />
            </div>
          </div>
          <div className="input-box-div1">
            <div className="assets-input-label">
              <div className="label-div7">Short Name</div>
            </div>
            <div className="assets-input-box1">
              <input
                className="input-auto-layout1"
                type="text"
                placeholder="MCP"
              />
            </div>
          </div>
        </div>
        <div className="text-area-div">
          <div className="assets-input-label2">
            <div className="label-div7">Description</div>
          </div>
          <div className="assets-text-area-input">
            <textarea
              className="input-textarea"
              placeholder="The tasks and workflows required to define the parameters for the main circuit. "
            />
            <img className="icon" alt="" src="../icon.svg" />
          </div>
        </div>
        <div className="frame-div94">
          <div className="label-div7">Tags</div>
          <div className="tags-div2">
            <div className="tag-div2">
              <div className="label-div10">Study: MCP</div>
            </div>
            <div className="button-div22">
              <button className="icon-controls-add2">
                <img className="shape-icon" alt="" src="../shape2.svg" />
              </button>
            </div>
          </div>
        </div>
        <div className="action-bar-div">
          <div className="divider3" />
        </div>
        <div className="buttons-auto-layout">
          <button className="button-1" onClick={onClose}>
            <div className="label-div11">Cancel</div>
          </button>
          <button className="button-2" onClick={onClose}>
            <div className="label-div12">Submit</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPopup;
