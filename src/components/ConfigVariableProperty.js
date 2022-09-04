import "./ConfigVariableProperty.css";

const ConfigVariableProperty = ({ onClose }) => {
  return (
    <div className="config-variable-property-div">
      <div className="frame-div160">
        <div className="input-box-div2">
          <div className="assets-input-label3">
            <div className="label-div51">Label</div>
          </div>
          <div className="assets-input-box3">
            <div className="input-auto-layout4">
              <div className="label-div52">Search node</div>
            </div>
          </div>
        </div>
      </div>
      <div className="assets-list-item">
        <img
          className="icon-gridstar-custom-nodes81"
          alt=""
          src="../icon--gridstar-custom--nodes41.svg"
        />
        <div className="label-div53">MCP.S1.Rectifier.NominalCalc.TuneUtn</div>
      </div>
      <div className="assets-list-item">
        <img
          className="icon-gridstar-custom-nodes81"
          alt=""
          src="../icon--gridstar-custom--nodes41.svg"
        />
        <div className="label-div53">MCP.S1.Rectifier.NominalCalc.Tunerpn</div>
      </div>
      <div className="assets-list-item">
        <img
          className="icon-gridstar-custom-nodes81"
          alt=""
          src="../icon--gridstar-custom--nodes41.svg"
        />
        <div className="label-div53">MCP.S1.Inverter.NominalCalc.Tuneutn</div>
      </div>
    </div>
  );
};

export default ConfigVariableProperty;
