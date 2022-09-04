import { useState, useCallback } from "react";
import StateListWorkspaces from "../components/StateListWorkspaces";
import PortalPopup from "../components/PortalPopup";
import ConfigVariableProperty from "../components/ConfigVariableProperty";
import "./Workspace.css";

const Workspace = () => {
  const [isStateListWorkspacesOpen, setStateListWorkspacesOpen] =
    useState(false);
  const [isConfigVariablePropertyOpen, setConfigVariablePropertyOpen] =
    useState(false);
  const [isConfigVariableProperty1Open, setConfigVariableProperty1Open] =
    useState(false);
  const [isConfigVariableProperty2Open, setConfigVariableProperty2Open] =
    useState(false);

  const openStateListWorkspaces = useCallback(() => {
    setStateListWorkspacesOpen(true);
  }, []);

  const closeStateListWorkspaces = useCallback(() => {
    setStateListWorkspacesOpen(false);
  }, []);

  const onFrameContainer32Click = useCallback(() => {
    // Please sync "1920 - Workspace " to the project
  }, []);

  const openConfigVariableProperty = useCallback(() => {
    setConfigVariablePropertyOpen(true);
  }, []);

  const closeConfigVariableProperty = useCallback(() => {
    setConfigVariablePropertyOpen(false);
  }, []);

  const openConfigVariableProperty1 = useCallback(() => {
    setConfigVariableProperty1Open(true);
  }, []);

  const closeConfigVariableProperty1 = useCallback(() => {
    setConfigVariableProperty1Open(false);
  }, []);

  const openConfigVariableProperty2 = useCallback(() => {
    setConfigVariableProperty2Open(true);
  }, []);

  const closeConfigVariableProperty2 = useCallback(() => {
    setConfigVariableProperty2Open(false);
  }, []);

  return (
    <>
      <div className="workspace-div">
        <div className="frame-div95">
          <div className="titlebar-workspace-div">
            <div className="rectangle-div2" />
            <select className="frame-select">
              <option value="Expert group">1</option>
              <option value="Tender">2</option>
            </select>
            <div className="frame-div96">
              <button className="button">
                <img
                  className="icon-actions-save"
                  alt=""
                  src="../icon--actions--save.svg"
                />
                <div className="label-div13">Save</div>
              </button>
              <div
                className="state-dropdown-div"
                onClick={openStateListWorkspaces}
              >
                <div className="assets-drop-down-field">
                  <div className="input-auto-layout3">
                    <b className="label">Configuring</b>
                    <img
                      className="icon-actions-save"
                      alt=""
                      src="../icon-directions--dropdown1.svg"
                    />
                  </div>
                </div>
                <img
                  className="icon-tools-edit2"
                  alt=""
                  src="../icon--tools--edit2.svg"
                />
              </div>
            </div>
            <div className="frame-div97">
              <img
                className="icon-actions-save"
                alt=""
                src="../icon--tools--edit2.svg"
              />
            </div>
          </div>
          <div className="frame-div98">
            <div className="mcp-v3-div">
              <div className="group-div1">
                <img className="frame-icon" alt="" src="../frame-2681837.svg" />
                <div className="group-div2">
                  <div className="workflownoyesdefaultconfig-div">
                    <div className="rectangle-div3" />
                    <div className="frame-div99">
                      <div className="workflow-name-that-is-long">MCP v1.2</div>
                      <div className="v4-div">v.4</div>
                    </div>
                    <img className="icon-gridstar-custom-nodes15" alt="" />
                    <div className="frame-div100">
                      <button className="button1">
                        <img className="icon-actions-save" alt="" />
                      </button>
                      <button className="button1">
                        <img className="icon-gridstar-custom-setti" alt="" />
                      </button>
                      <div className="button-div23">
                        <img className="icon-actions-save" alt="" />
                      </div>
                      <div className="button-div23">
                        <img className="icon-gridstar-custom-setti" alt="" />
                      </div>
                    </div>
                    <img className="connecting-points-icon" alt="" />
                    <div className="connecting-points-div">
                      <div className="rectangle-div4" />
                      <img className="rectangle-icon" alt="" />
                    </div>
                  </div>
                  <img className="vector-icon" alt="" />
                  <img className="vector-icon1" alt="" />
                  <div className="station-div">
                    <div className="workflownoyesdefaultconfig-div1">
                      <div className="rectangle-div3" />
                      <div className="frame-div99">
                        <div className="workflow-name-that-is-long">
                          Station 1
                        </div>
                        <div className="v4-div">v.4</div>
                      </div>
                      <img className="icon-gridstar-custom-nodes15" alt="" />
                      <div className="frame-div100">
                        <div className="button-div23">
                          <img className="icon-actions-save" alt="" />
                        </div>
                        <div className="button-div23">
                          <img className="icon-gridstar-custom-setti" alt="" />
                        </div>
                        <div className="button-div23">
                          <img className="icon-actions-save" alt="" />
                        </div>
                        <div className="button-div23">
                          <img className="icon-gridstar-custom-setti" alt="" />
                        </div>
                      </div>
                      <img className="connecting-points-icon1" alt="" />
                      <div className="connecting-points-div1">
                        <div className="rectangle-div4" />
                        <img className="rectangle-icon" alt="" />
                      </div>
                    </div>
                    <img className="vector-icon2" alt="" />
                    <img className="vector-icon3" alt="" />
                    <div className="group-div3">
                      <div className="group-div4">
                        <div className="rating-calc-div">
                          <div className="workflownoyesdefaultconfig-div2">
                            <div className="rectangle-div3" />
                            <div className="frame-div99">
                              <div className="workflow-name-that-is-long">
                                Rating Calc
                              </div>
                              <div className="v4-div">v.4</div>
                            </div>
                            <img
                              className="icon-gridstar-custom-nodes15"
                              alt=""
                            />
                            <div className="frame-div100">
                              <div className="button-div23">
                                <img className="icon-actions-save" alt="" />
                              </div>
                              <div className="button-div23">
                                <img
                                  className="icon-gridstar-custom-setti"
                                  alt=""
                                />
                              </div>
                              <div className="button-div23">
                                <img className="icon-actions-save" alt="" />
                              </div>
                              <div className="button-div23">
                                <img
                                  className="icon-gridstar-custom-setti"
                                  alt=""
                                />
                              </div>
                            </div>
                            <img className="connecting-points-icon1" alt="" />
                            <div className="connecting-points-div1">
                              <div className="rectangle-div4" />
                              <img className="rectangle-icon" alt="" />
                            </div>
                          </div>
                          <div className="group-div5">
                            <img className="connector-icon" alt="" />
                            <div className="task-div">
                              <div className="task-name-that-is-longer">
                                Rt Rating Tuning
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon1" alt="" />
                            <div className="task-div1">
                              <div className="task-name-that-is-longer1">
                                Pdc = PdcPrecalc Rating
                              </div>
                              <div className="rectangle-div11" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon4" alt="" />
                              <img className="connecting-points-icon3" alt="" />
                              <img className="connecting-points-icon6" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                            </div>
                            <div className="connector-div">
                              <img className="vector-icon4" alt="" />
                              <div className="text-div">
                                Pdc != PdcPrecalc Nominal
                              </div>
                            </div>
                            <div className="task-div2">
                              <div className="task-name-that-is-longer">
                                TCP Tuning
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon2" alt="" />
                            <div className="task-div3">
                              <div className="task-name-that-is-longer1">
                                Plot Optimised?
                              </div>
                              <div className="rectangle-div11" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon4" alt="" />
                              <img className="connecting-points-icon3" alt="" />
                              <img className="connecting-points-icon6" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                            </div>
                            <div className="group-div6">
                              <img className="vector-icon5" alt="" />
                              <img className="vector-icon6" alt="" />
                              <img className="vector-icon7" alt="" />
                              <div className="plot-not-optimized">
                                Pdc != PdcPrecalc Nominal
                              </div>
                            </div>
                            <div className="group-div7">
                              <img className="vector-icon8" alt="" />
                              <img className="vector-icon9" alt="" />
                              <img className="vector-icon10" alt="" />
                              <div className="plot-not-optimized">
                                Plot not optimized
                              </div>
                            </div>
                            <div className="connector-div1">
                              <img className="vector-icon4" alt="" />
                              <div className="text-div">Plot optimized</div>
                            </div>
                            <div className="task-div4">
                              <div className="task-name-that-is-longer">
                                Rating Table
                              </div>
                              <div className="rectangle-div9" />
                              <div className="icon-gridstar-custom-nodes18">
                                <div className="rectangle-div18" />
                                <img className="union-icon" alt="" />
                              </div>
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                            </div>
                            <div className="frame-div105">
                              <img className="connector-icon3" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="rating-calc-div1">
                          <div className="workflownoyesdefaultconfig-div2">
                            <div className="rectangle-div3" />
                            <div className="frame-div99">
                              <div className="workflow-name-that-is-long">
                                Rating Calc
                              </div>
                              <div className="v4-div">v.4</div>
                            </div>
                            <img
                              className="icon-gridstar-custom-nodes15"
                              alt=""
                            />
                            <div className="frame-div100">
                              <div className="button-div23">
                                <img className="icon-actions-save" alt="" />
                              </div>
                              <div className="button-div23">
                                <img
                                  className="icon-gridstar-custom-setti"
                                  alt=""
                                />
                              </div>
                              <div className="button-div23">
                                <img className="icon-actions-save" alt="" />
                              </div>
                              <div className="button-div23">
                                <img
                                  className="icon-gridstar-custom-setti"
                                  alt=""
                                />
                              </div>
                            </div>
                            <img className="connecting-points-icon1" alt="" />
                            <div className="connecting-points-div1">
                              <div className="rectangle-div4" />
                              <img className="rectangle-icon" alt="" />
                            </div>
                          </div>
                          <div className="group-div5">
                            <img className="connector-icon" alt="" />
                            <div className="task-div">
                              <div className="task-name-that-is-longer">
                                Rt Rating Tuning
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon1" alt="" />
                            <div className="task-div1">
                              <div className="task-name-that-is-longer1">
                                Pdc = PdcPrecalc Rating
                              </div>
                              <div className="rectangle-div11" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon4" alt="" />
                              <img className="connecting-points-icon3" alt="" />
                              <img className="connecting-points-icon6" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                            </div>
                            <div className="connector-div">
                              <img className="vector-icon4" alt="" />
                              <div className="text-div">
                                Pdc != PdcPrecalc Nominal
                              </div>
                            </div>
                            <div className="task-div2">
                              <div className="task-name-that-is-longer">
                                TCP Tuning
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon2" alt="" />
                            <div className="task-div3">
                              <div className="task-name-that-is-longer1">
                                Plot Optimised?
                              </div>
                              <div className="rectangle-div11" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon4" alt="" />
                              <img className="connecting-points-icon3" alt="" />
                              <img className="connecting-points-icon6" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                            </div>
                            <div className="group-div6">
                              <img className="vector-icon5" alt="" />
                              <img className="vector-icon6" alt="" />
                              <img className="vector-icon7" alt="" />
                              <div className="plot-not-optimized">
                                Pdc != PdcPrecalc Nominal
                              </div>
                            </div>
                            <div className="group-div7">
                              <img className="vector-icon8" alt="" />
                              <img className="vector-icon9" alt="" />
                              <img className="vector-icon10" alt="" />
                              <div className="plot-not-optimized">
                                Plot not optimized
                              </div>
                            </div>
                            <div className="connector-div1">
                              <img className="vector-icon4" alt="" />
                              <div className="text-div">Plot optimized</div>
                            </div>
                            <div className="task-div4">
                              <div className="task-name-that-is-longer">
                                Rating Table
                              </div>
                              <div className="rectangle-div9" />
                              <div className="icon-gridstar-custom-nodes18">
                                <div className="rectangle-div18" />
                                <img className="union-icon" alt="" />
                              </div>
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                            </div>
                            <div className="frame-div105">
                              <img className="connector-icon3" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="group-div11">
                        <div className="workflownoyesdefaultconfig-div4">
                          <div className="rectangle-div3" />
                          <div className="frame-div99">
                            <div className="workflow-name-that-is-long">
                              Nominal Calculation
                            </div>
                            <div className="v4-div">v.4</div>
                          </div>
                          <img
                            className="icon-gridstar-custom-nodes15"
                            alt=""
                            src="../icon--gridstar-custom--nodes15.svg"
                          />
                          <div className="frame-div100">
                            <div className="button-div23">
                              <img className="icon-actions-save" alt="" />
                            </div>
                            <div className="button-div23">
                              <img
                                className="icon-gridstar-custom-setti"
                                alt=""
                              />
                            </div>
                            <div className="button-div23">
                              <img className="icon-actions-save" alt="" />
                            </div>
                            <div className="button-div23">
                              <img
                                className="icon-gridstar-custom-setti"
                                alt=""
                              />
                            </div>
                          </div>
                          <img className="connecting-points-icon1" alt="" />
                          <div className="connecting-points-div1">
                            <div className="rectangle-div4" />
                            <img
                              className="rectangle-icon14"
                              alt=""
                              src="../rectangle-6721.svg"
                            />
                          </div>
                        </div>
                        <div className="nominal-calc-rect">
                          <div className="workflownoyesdefaultpublis-div">
                            <img
                              className="rectangle-icon15"
                              alt=""
                              src="../rectangle-6519.svg"
                            />
                            <div className="frame-div111">
                              <div className="workflow-name-that-is-long">
                                Nominal Calc Rectifier with Utn Tuning
                              </div>
                              <div className="v4-div">v.4</div>
                            </div>
                            <img
                              className="icon-gridstar-custom-nodes30"
                              alt=""
                              src="../icon--gridstar-custom--nodes15.svg"
                            />
                            <div className="frame-div112">
                              <div className="button-div41">
                                <img className="icon-actions-save" alt="" />
                              </div>
                              <div className="watch-input-div">
                                <div className="button-div41">
                                  <img className="icon-actions-save" alt="" />
                                </div>
                              </div>
                              <div className="button-div41">
                                <img className="icon-actions-save" alt="" />
                              </div>
                              <div className="button-div41">
                                <img
                                  className="icon-gridstar-custom-setti"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="connecting-points-div15">
                              <div className="rectangle-div4" />
                              <img
                                className="rectangle-icon"
                                alt=""
                                src="../rectangle-67211.svg"
                              />
                            </div>
                            <img
                              className="group-icon"
                              alt=""
                              src="../group-2681497.svg"
                            />
                            <div className="frame-div113">
                              <div className="out-div">
                                <div className="rectangle-div36" />
                                <img
                                  className="icon-gridstar-custom-add-s"
                                  alt=""
                                  src="../icon--gridstar-custom--add-small.svg"
                                />
                              </div>
                              <div className="out-div1">
                                <div className="rectangle-div37" />
                                <b className="b">3</b>
                              </div>
                              <div className="out-div">
                                <div className="rectangle-div38" />
                                <b className="b">2</b>
                              </div>
                              <div className="out-div">
                                <div className="rectangle-div38" />
                                <b className="b">1</b>
                              </div>
                            </div>
                            <div className="frame-div114">
                              <div className="in-div">
                                <div className="rectangle-div40" />
                                <img
                                  className="icon-gridstar-custom-add-s1"
                                  alt=""
                                  src="../icon--gridstar-custom--add-small1.svg"
                                />
                              </div>
                              <div className="in-div1">
                                <div className="rectangle-div41" />
                                <b className="b3">2</b>
                              </div>
                              <div className="in-div">
                                <div className="rectangle-div42" />
                                <b className="b3">1</b>
                              </div>
                              <div className="in-div3">
                                <div className="rectangle-div43" />
                                <b className="b3">4</b>
                              </div>
                            </div>
                            <b className="draft-b">DRAFT</b>
                          </div>
                          <div className="group-div12">
                            <div className="group-div13">
                              <img
                                className="connector-icon8"
                                alt=""
                                src="../connector.svg"
                              />
                              <div className="task-div10">
                                <div className="task-name-that-is-longer">
                                  Tune Utn
                                </div>
                                <div className="rectangle-div9" />
                                <img
                                  className="icon-gridstar-custom-nodes18"
                                  alt=""
                                  src="../icon--gridstar-custom--nodes17.svg"
                                />
                                <img
                                  className="connecting-points-icon3"
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <div className="connecting-points-div3">
                                  <div className="rectangle-div4" />
                                  <img
                                    className="rectangle-icon14"
                                    alt=""
                                    src="../rectangle-6721.svg"
                                  />
                                </div>
                                <div className="badge-div">
                                  <div className="label-div14">New</div>
                                </div>
                              </div>
                              <img
                                className="connector-icon9"
                                alt=""
                                src="../connector1.svg"
                              />
                              <div className="task-div11">
                                <div className="task-name-that-is-longer" />
                                <img
                                  className="rectangle-icon18"
                                  alt=""
                                  src="../rectangle-6526.svg"
                                />
                                <div className="rectangle-div11" />
                                <img
                                  className="icon-gridstar-custom-nodes18"
                                  alt=""
                                  src="../icon--gridstar-custom--nodes18.svg"
                                />
                                <img
                                  className="connecting-points-icon4"
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <img
                                  className="connecting-points-icon3"
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <img
                                  className="connecting-points-icon6"
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <img
                                  className="connecting-points-icon27"
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <div className="connecting-points-div3">
                                  <div className="rectangle-div4" />
                                  <img
                                    className="rectangle-icon14"
                                    alt=""
                                    src="../rectangle-6721.svg"
                                  />
                                </div>
                              </div>
                              <div className="connector-div4">
                                <img
                                  className="vector-icon20"
                                  alt=""
                                  src="../vector-437.svg"
                                />
                                <div className="text-div">TCP~=0</div>
                              </div>
                              <div className="task-div12">
                                <div className="task-name-that-is-longer">
                                  Tune rpn
                                </div>
                                <div className="rectangle-div9" />
                                <img
                                  className="icon-gridstar-custom-nodes18"
                                  alt=""
                                  src="../icon--gridstar-custom--nodes17.svg"
                                />
                                <img
                                  className="connecting-points-icon3"
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <div className="connecting-points-div3">
                                  <div className="rectangle-div4" />
                                  <img
                                    className="rectangle-icon14"
                                    alt=""
                                    src="../rectangle-6721.svg"
                                  />
                                </div>
                                <div className="badge-div">
                                  <div className="label-div14">New</div>
                                </div>
                              </div>
                              <img
                                className="connector-icon10"
                                alt=""
                                src="../connector1.svg"
                              />
                              <div className="task-div13">
                                <div className="task-name-that-is-longer">
                                  Calc Average
                                </div>
                                <div className="rectangle-div9" />
                                <img
                                  className="icon-gridstar-custom-nodes18"
                                  alt=""
                                  src="../icon--gridstar-custom--nodes17.svg"
                                />
                                <img
                                  className="connecting-points-icon3"
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <div className="connecting-points-div3">
                                  <div className="rectangle-div4" />
                                  <img
                                    className="rectangle-icon14"
                                    alt=""
                                    src="../rectangle-6721.svg"
                                  />
                                </div>
                                <div className="badge-div">
                                  <div className="label-div14">New</div>
                                </div>
                              </div>
                              <img
                                className="connector-icon11"
                                alt=""
                                src="../connector1.svg"
                              />
                              <div className="task-div14">
                                <div className="task-name-that-is-longer">
                                  Tune Rt
                                </div>
                                <div className="rectangle-div9" />
                                <img
                                  className="icon-gridstar-custom-nodes18"
                                  alt=""
                                  src="../icon--gridstar-custom--nodes17.svg"
                                />
                                <img
                                  className="connecting-points-icon3"
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <div className="connecting-points-div3">
                                  <div className="rectangle-div4" />
                                  <img
                                    className="rectangle-icon14"
                                    alt=""
                                    src="../rectangle-6721.svg"
                                  />
                                </div>
                                <div className="badge-div">
                                  <div className="label-div14">New</div>
                                </div>
                              </div>
                              <img
                                className="connector-icon12"
                                alt=""
                                src="../connector1.svg"
                              />
                              <div className="task-div15">
                                <div className="task-name-that-is-longer1">
                                  Pdc=PdcPrecalc Nominal
                                </div>
                                <div className="rectangle-div11" />
                                <img
                                  className="icon-gridstar-custom-nodes18"
                                  alt=""
                                  src="../icon--gridstar-custom--nodes18.svg"
                                />
                                <img
                                  className="connecting-points-icon4"
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <img
                                  className="connecting-points-icon3"
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <img
                                  className="connecting-points-icon27"
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <div className="connecting-points-div3">
                                  <div className="rectangle-div4" />
                                  <img
                                    className="rectangle-icon14"
                                    alt=""
                                    src="../rectangle-6721.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="connector-div5">
                              <img
                                className="vector-icon21"
                                alt=""
                                src="../vector-4371.svg"
                              />
                              <img
                                className="vector-icon22"
                                alt=""
                                src="../vector-438.svg"
                              />
                              <img
                                className="vector-icon23"
                                alt=""
                                src="../vector-439.svg"
                              />
                              <div className="text-div7">TCP!=0</div>
                            </div>
                            <div className="group-div14">
                              <img
                                className="vector-icon24"
                                alt=""
                                src="../vector-4372.svg"
                              />
                              <img
                                className="vector-icon25"
                                alt=""
                                src="../vector-4381.svg"
                              />
                              <img
                                className="vector-icon26"
                                alt=""
                                src="../vector-4391.svg"
                              />
                              <div className="plot-not-optimized">
                                Pdc == PdcPrecalc Nominal
                              </div>
                            </div>
                            <div className="group-div15">
                              <img
                                className="vector-icon27"
                                alt=""
                                src="../vector.svg"
                              />
                              <div className="pdc-pdcprecalc-nominal1">
                                Pdc != PdcPrecalc Nominal
                              </div>
                            </div>
                            <div className="group-div16">
                              <img
                                className="vector-icon28"
                                alt=""
                                src="../vector-4382.svg"
                              />
                              <div className="pdc-pdc-precalc-tcp-0">{`pdc = pdc_precalc & TCP ~= 0`}</div>
                            </div>
                          </div>
                        </div>
                        <div className="nominal-calc-inv">
                          <div className="workflownoyesdefaultpublis-div1">
                            <img
                              className="rectangle-icon24"
                              alt=""
                              src="../rectangle-65191.svg"
                            />
                            <div className="frame-div111">
                              <div className="workflow-name-that-is-long">
                                Nominal Calc Inverter without Utn Tuning
                              </div>
                              <div className="v4-div">v.4</div>
                            </div>
                            <img
                              className="icon-gridstar-custom-nodes30"
                              alt=""
                              src="../icon--gridstar-custom--nodes15.svg"
                            />
                            <div className="frame-div112">
                              <div className="button-div41">
                                <img className="icon-actions-save" alt="" />
                              </div>
                              <div className="watch-input-div">
                                <div className="button-div41">
                                  <img className="icon-actions-save" alt="" />
                                </div>
                              </div>
                              <div className="button-div41">
                                <img className="icon-actions-save" alt="" />
                              </div>
                              <div className="button-div41">
                                <img
                                  className="icon-gridstar-custom-setti"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="connecting-points-div22">
                              <div className="rectangle-div4" />
                              <img
                                className="rectangle-icon"
                                alt=""
                                src="../rectangle-67211.svg"
                              />
                            </div>
                            <img className="group-icon1" alt="" />
                            <div className="frame-div113">
                              <div className="out-div">
                                <div className="rectangle-div36" />
                                <img
                                  className="icon-gridstar-custom-add-s"
                                  alt=""
                                />
                              </div>
                              <div className="out-div1">
                                <div className="rectangle-div37" />
                                <b className="b">3</b>
                              </div>
                              <div className="out-div">
                                <div className="rectangle-div38" />
                                <b className="b">2</b>
                              </div>
                              <div className="out-div">
                                <div className="rectangle-div38" />
                                <b className="b">1</b>
                              </div>
                            </div>
                            <div className="frame-div118">
                              <div className="in-div">
                                <div className="rectangle-div40" />
                                <img
                                  className="icon-gridstar-custom-add-s1"
                                  alt=""
                                  src="../icon--gridstar-custom--add-small1.svg"
                                />
                              </div>
                              <div className="in-div1">
                                <div className="rectangle-div41" />
                                <b className="b3">2</b>
                              </div>
                              <div className="in-div">
                                <div className="rectangle-div42" />
                                <b className="b3">1</b>
                              </div>
                              <div className="in-div3">
                                <div className="rectangle-div43" />
                                <b className="b3">4</b>
                              </div>
                            </div>
                          </div>
                          <b className="draft-b1">DRAFT</b>
                          <div className="group-div17">
                            <img
                              className="connector-icon13"
                              alt=""
                              src="../connector5.svg"
                            />
                            <div className="task-div16">
                              <div className="task-name-that-is-longer">
                                Tune rpn
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                                src="../icon--gridstar-custom--nodes24.svg"
                              />
                              <img
                                className="connecting-points-icon3"
                                alt=""
                                src="../connecting-points11.svg"
                              />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img
                                  className="rectangle-icon14"
                                  alt=""
                                  src="../rectangle-67219.svg"
                                />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img
                              className="connector-icon14"
                              alt=""
                              src="../connector6.svg"
                            />
                            <div className="task-div17">
                              <div className="task-name-that-is-longer" />
                              <div className="rectangle-div11" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                                src="../icon--gridstar-custom--nodes25.svg"
                              />
                              <img
                                className="connecting-points-icon35"
                                alt=""
                                src="../connecting-points11.svg"
                              />
                              <img
                                className="connecting-points-icon3"
                                alt=""
                                src="../connecting-points11.svg"
                              />
                              <img
                                className="connecting-points-icon6"
                                alt=""
                                src="../connecting-points11.svg"
                              />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img
                                  className="rectangle-icon14"
                                  alt=""
                                  src="../rectangle-67219.svg"
                                />
                              </div>
                            </div>
                            <div className="connector-div6">
                              <img
                                className="vector-icon20"
                                alt=""
                                src="../vector-4373.svg"
                              />
                              <div className="text-div">rpn(n) != rpn(n-1)</div>
                            </div>
                            <div className="task-div18">
                              <div className="task-name-that-is-longer">
                                Calc Average
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                                src="../icon--gridstar-custom--nodes24.svg"
                              />
                              <img
                                className="connecting-points-icon3"
                                alt=""
                                src="../connecting-points11.svg"
                              />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img
                                  className="rectangle-icon14"
                                  alt=""
                                  src="../rectangle-67219.svg"
                                />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img
                              className="connector-icon15"
                              alt=""
                              src="../connector6.svg"
                            />
                            <div className="task-div19">
                              <div className="task-name-that-is-longer">
                                Tune Rt
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img
                                  className="rectangle-icon14"
                                  alt=""
                                  src="../rectangle-67219.svg"
                                />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon16" alt="" />
                            <div className="task-div20">
                              <div className="task-name-that-is-longer" />
                              <div className="rectangle-div11" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon4" alt="" />
                              <img className="connecting-points-icon3" alt="" />
                              <img className="connecting-points-icon6" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                            </div>
                            <img
                              className="vector-icon30"
                              alt=""
                              src="../vector1.svg"
                            />
                            <img
                              className="vector-icon31"
                              alt=""
                              src="../vector-4383.svg"
                            />
                            <div className="rpnn-rpnn-1">rpn(n) = rpn(n-1)</div>
                            <div className="pdc-pdcprecalc">
                              Pdc == PdcPrecalc
                            </div>
                            <div className="group-div18">
                              <img
                                className="vector-icon32"
                                alt=""
                                src="../vector2.svg"
                              />
                              <div className="pdc-pdcprecalc1">
                                Pdc != PdcPrecalc
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          className="connector-io"
                          alt=""
                          src="../connector-io.svg"
                        />
                        <img className="connector-io1" alt="" />
                        <img
                          className="connector-io2"
                          alt=""
                          src="../connector-io1.svg"
                        />
                        <img className="connector-io3" alt="" />
                        <img className="connector-io4" alt="" />
                        <img className="connector-io5" alt="" />
                        <img className="connector-io6" alt="" />
                        <img className="connector-io7" alt="" />
                        <img
                          className="connector-io8"
                          alt=""
                          src="../connector-io2.svg"
                        />
                        <img
                          className="connector-io9"
                          alt=""
                          src="../connector-io3.svg"
                        />
                      </div>
                      <div className="group-div19">
                        <div className="precalc-div">
                          <div className="workflownoyesdefaultconfig-div5">
                            <div className="rectangle-div3" />
                            <div className="frame-div99">
                              <div className="workflow-name-that-is-long">
                                Precalculation Rectifier
                              </div>
                              <div className="v4-div">v.4</div>
                            </div>
                            <img
                              className="icon-gridstar-custom-nodes15"
                              alt=""
                            />
                            <div className="frame-div100">
                              <div className="button-div23">
                                <img className="icon-actions-save" alt="" />
                              </div>
                              <div className="button-div23">
                                <img
                                  className="icon-gridstar-custom-setti"
                                  alt=""
                                />
                              </div>
                              <div className="button-div23">
                                <img className="icon-actions-save" alt="" />
                              </div>
                              <div className="button-div23">
                                <img
                                  className="icon-gridstar-custom-setti"
                                  alt=""
                                />
                              </div>
                            </div>
                            <img
                              className="connecting-points-icon"
                              alt=""
                              src="../group-2681497.svg"
                            />
                            <div className="connecting-points-div">
                              <div className="rectangle-div4" />
                              <img className="rectangle-icon" alt="" />
                            </div>
                          </div>
                          <div className="group-div20">
                            <img className="connector-icon17" alt="" />
                            <div className="task-div10">
                              <div className="task-name-that-is-longer">
                                Cables
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon18" alt="" />
                            <div className="task-div11">
                              <div className="task-name-that-is-longer">
                                Power Defined
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon19" alt="" />
                            <div className="task-div12">
                              <div className="rectangle-div81" />
                              <div className="task-name-that-is-longer">
                                Reactive Power Constraints
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes46"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon20" alt="" />
                            <div className="task-div13">
                              <div className="task-name-that-is-longer">
                                Corners PQ
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon21" alt="" />
                            <div className="task-div14">
                              <div className="task-name-that-is-longer">
                                Transformer Rating
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon22" alt="" />
                            <div className="task-div15">
                              <div className="task-name-that-is-longer">
                                Converter Reactor
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon23" alt="" />
                            <div className="task-div27">
                              <div className="task-name-that-is-longer">
                                Transformer Impedance
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes50"
                                alt=""
                                src="../icon--gridstar-custom--nodes27.svg"
                              />
                              <img
                                className="connecting-points-icon3"
                                alt=""
                                src="../group-2681497.svg"
                              />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img
                              className="connector-icon24"
                              alt=""
                              src="../connector1.svg"
                            />
                            <div className="task-div28">
                              <div className="task-name-that-is-longer">
                                Voltage Variations
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                                src="../icon--gridstar-custom--nodes17.svg"
                              />
                              <img
                                className="connecting-points-icon3"
                                alt=""
                                src="../group-2681497.svg"
                              />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img
                                  className="rectangle-icon14"
                                  alt=""
                                  src="../rectangle-6721.svg"
                                />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img
                              className="connector-icon25"
                              alt=""
                              src="../connector1.svg"
                            />
                            <div className="task-div29">
                              <div className="task-name-that-is-longer">
                                AC Cable Data
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                                src="../icon--gridstar-custom--nodes17.svg"
                              />
                              <img
                                className="connecting-points-icon3"
                                alt=""
                                src="../group-2681497.svg"
                              />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img
                                  className="rectangle-icon14"
                                  alt=""
                                  src="../rectangle-6721.svg"
                                />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img
                              className="connector-icon26"
                              alt=""
                              src="../connector1.svg"
                            />
                          </div>
                        </div>
                        <div className="precalc-div1">
                          <div className="workflownoyesdefaultconfig-div5">
                            <div className="rectangle-div3" />
                            <div className="frame-div99">
                              <div className="workflow-name-that-is-long">
                                Precalculation Inverter
                              </div>
                              <div className="v4-div">v.4</div>
                            </div>
                            <img
                              className="icon-gridstar-custom-nodes15"
                              alt=""
                            />
                            <div className="frame-div100">
                              <div className="button-div23">
                                <img className="icon-actions-save" alt="" />
                              </div>
                              <div className="button-div23">
                                <img
                                  className="icon-gridstar-custom-setti"
                                  alt=""
                                />
                              </div>
                              <div className="button-div23">
                                <img className="icon-actions-save" alt="" />
                              </div>
                              <div className="button-div23">
                                <img
                                  className="icon-gridstar-custom-setti"
                                  alt=""
                                />
                              </div>
                            </div>
                            <img
                              className="connecting-points-icon"
                              alt=""
                              src="../group-2681497.svg"
                            />
                            <div className="connecting-points-div">
                              <div className="rectangle-div4" />
                              <img className="rectangle-icon" alt="" />
                            </div>
                          </div>
                          <div className="group-div20">
                            <img className="connector-icon17" alt="" />
                            <div className="task-div10">
                              <div className="task-name-that-is-longer">
                                Cables
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon18" alt="" />
                            <div className="task-div11">
                              <div className="task-name-that-is-longer">
                                Power Defined
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon19" alt="" />
                            <div className="task-div12">
                              <div className="task-name-that-is-longer">
                                Reactive Power Constraints
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon20" alt="" />
                            <div className="task-div13">
                              <div className="task-name-that-is-longer">
                                Corners PQ
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon21" alt="" />
                            <div className="task-div14">
                              <div className="task-name-that-is-longer">
                                Transformer Rating
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon22" alt="" />
                            <div className="task-div15">
                              <div className="task-name-that-is-longer">
                                Converter Reactor
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                              />
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img className="connector-icon23" alt="" />
                            <div className="task-div27">
                              <div className="task-name-that-is-longer">
                                Transformer Impedance
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes50"
                                alt=""
                                src="../icon--gridstar-custom--nodes27.svg"
                              />
                              <img
                                className="connecting-points-icon3"
                                alt=""
                                src="../group-2681497.svg"
                              />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img
                              className="connector-icon24"
                              alt=""
                              src="../connector1.svg"
                            />
                            <div className="task-div28">
                              <div className="task-name-that-is-longer">
                                Voltage Variations
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                                src="../icon--gridstar-custom--nodes17.svg"
                              />
                              <img
                                className="connecting-points-icon3"
                                alt=""
                                src="../group-2681497.svg"
                              />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img
                                  className="rectangle-icon14"
                                  alt=""
                                  src="../rectangle-6721.svg"
                                />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img
                              className="connector-icon25"
                              alt=""
                              src="../connector1.svg"
                            />
                            <div className="task-div29">
                              <div className="task-name-that-is-longer">
                                AC Cable Data
                              </div>
                              <div className="rectangle-div9" />
                              <img
                                className="icon-gridstar-custom-nodes18"
                                alt=""
                                src="../icon--gridstar-custom--nodes17.svg"
                              />
                              <img
                                className="connecting-points-icon3"
                                alt=""
                                src="../group-2681497.svg"
                              />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img
                                  className="rectangle-icon14"
                                  alt=""
                                  src="../rectangle-6721.svg"
                                />
                              </div>
                              <div className="badge-div">
                                <div className="label-div14">New</div>
                              </div>
                            </div>
                            <img
                              className="connector-icon26"
                              alt=""
                              src="../connector1.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        className="connector-io10"
                        alt=""
                        src="../connector-io4.svg"
                      />
                      <img
                        className="connector-io11"
                        alt=""
                        src="../connector-io5.svg"
                      />
                      <img
                        className="connector-io12"
                        alt=""
                        src="../connector-io6.svg"
                      />
                      <img
                        className="connector-io13"
                        alt=""
                        src="../connector-io7.svg"
                      />
                      <div className="post-processing-div">
                        <div className="workflownoyesdefaultconfig-div7">
                          <div className="rectangle-div3" />
                          <div className="frame-div99">
                            <div className="workflow-name-that-is-long">
                              Post Processing
                            </div>
                            <div className="v4-div">v.4</div>
                          </div>
                          <img
                            className="icon-gridstar-custom-nodes15"
                            alt=""
                          />
                          <div className="frame-div100">
                            <div className="button-div23">
                              <img className="icon-actions-save" alt="" />
                            </div>
                            <div className="button-div23">
                              <img
                                className="icon-gridstar-custom-setti"
                                alt=""
                              />
                            </div>
                            <div className="button-div23">
                              <img className="icon-actions-save" alt="" />
                            </div>
                            <div className="button-div23">
                              <img
                                className="icon-gridstar-custom-setti"
                                alt=""
                              />
                            </div>
                          </div>
                          <img className="connecting-points-icon1" alt="" />
                          <div className="connecting-points-div1">
                            <div className="rectangle-div4" />
                            <img className="rectangle-icon" alt="" />
                          </div>
                        </div>
                        <div className="group-div22">
                          <img className="connector-icon37" alt="" />
                          <div className="task-div39">
                            <div className="task-name-that-is-longer">
                              Vector Generation
                            </div>
                            <div className="rectangle-div9" />
                            <img
                              className="icon-gridstar-custom-nodes18"
                              alt=""
                            />
                            <img className="connecting-points-icon3" alt="" />
                            <div className="connecting-points-div3">
                              <div className="rectangle-div4" />
                              <img className="rectangle-icon" alt="" />
                            </div>
                            <div className="badge-div">
                              <div className="label-div14">New</div>
                            </div>
                          </div>
                          <img className="connector-icon38" alt="" />
                          <div className="task-div40">
                            <div className="task-name-that-is-longer">
                              Post Processing
                            </div>
                            <div className="rectangle-div9" />
                            <img
                              className="icon-gridstar-custom-nodes18"
                              alt=""
                            />
                            <img className="connecting-points-icon3" alt="" />
                            <div className="connecting-points-div3">
                              <div className="rectangle-div4" />
                              <img className="rectangle-icon" alt="" />
                            </div>
                            <div className="badge-div">
                              <div className="label-div14">New</div>
                            </div>
                          </div>
                          <img className="group-icon2" alt="" />
                          <div className="frame-div125">
                            <div className="task-div41">
                              <div className="task-name-that-is-longer">
                                General
                              </div>
                              <div className="rectangle-div9" />
                              <div className="icon-gridstar-custom-nodes18">
                                <div className="rectangle-div123" />
                                <img className="union-icon" alt="" />
                              </div>
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                            </div>
                            <div className="frame-div126">
                              <div className="task-div41">
                                <div className="task-name-that-is-longer">
                                  Rating
                                </div>
                                <div className="rectangle-div9" />
                                <div className="icon-gridstar-custom-nodes18">
                                  <div className="rectangle-div18" />
                                  <img className="union-icon" alt="" />
                                </div>
                                <img
                                  className="connecting-points-icon3"
                                  alt=""
                                />
                                <div className="connecting-points-div3">
                                  <div className="rectangle-div4" />
                                  <img className="rectangle-icon" alt="" />
                                </div>
                              </div>
                              <img className="connector-icon39" alt="" />
                              <div className="task-div41">
                                <div className="task-name-that-is-longer">
                                  Add Tolerances
                                </div>
                                <div className="rectangle-div9" />
                                <div className="icon-gridstar-custom-nodes18">
                                  <div className="rectangle-div129" />
                                  <img className="union-icon1" alt="" />
                                </div>
                                <img
                                  className="connecting-points-icon3"
                                  alt=""
                                />
                                <div className="connecting-points-div3">
                                  <div className="rectangle-div4" />
                                  <img className="rectangle-icon" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="task-div41">
                              <div className="task-name-that-is-longer">
                                Loss Points
                              </div>
                              <div className="rectangle-div9" />
                              <div className="icon-gridstar-custom-nodes18">
                                <div className="rectangle-div18" />
                                <img className="union-icon" alt="" />
                              </div>
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                            </div>
                            <div className="task-div41">
                              <div className="task-name-that-is-longer">
                                Filter Points
                              </div>
                              <div className="rectangle-div9" />
                              <div className="icon-gridstar-custom-nodes18">
                                <div className="rectangle-div18" />
                                <img className="union-icon" alt="" />
                              </div>
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                            </div>
                            <div className="task-div41">
                              <div className="task-name-that-is-longer">
                                TSI Points
                              </div>
                              <div className="rectangle-div9" />
                              <div className="icon-gridstar-custom-nodes18">
                                <div className="rectangle-div18" />
                                <img className="union-icon" alt="" />
                              </div>
                              <img className="connecting-points-icon3" alt="" />
                              <div className="connecting-points-div3">
                                <div className="rectangle-div4" />
                                <img className="rectangle-icon" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mcp-station-div">
                    <div className="workflownonodefaultconfig-div">
                      <div className="workflow-name-that-is-long10">
                        Station 2
                      </div>
                      <div className="rectangle-div3" />
                      <img className="icon-gridstar-custom-nodes72" alt="" />
                      <div className="button-div61">
                        <img className="icon-actions-save" alt="" />
                      </div>
                      <div className="button-div62">
                        <img className="icon-actions-save" alt="" />
                      </div>
                      <div className="connecting-points-div57">
                        <div className="rectangle-div4" />
                        <img className="rectangle-icon" alt="" />
                      </div>
                      <img className="connecting-points-icon1" alt="" />
                    </div>
                  </div>
                  <img className="connector-io14" alt="" />
                  <img
                    className="connector-io15"
                    alt=""
                    src="../connector-io8.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="control-panel-configuration">
            <div className="frame-div127" onClick={onFrameContainer32Click}>
              <div className="button-div63">
                <img
                  className="icon-directions-backwards"
                  alt=""
                  src="../icon--directions--backwards.svg"
                />
              </div>
              <div className="frame-div128">
                <img
                  className="icon-gridstar-custom-setti"
                  alt=""
                  src="../icon--gridstar-custom--nodes33.svg"
                />
                <div className="tune-utn-div">Tune utn</div>
              </div>
            </div>
            <div className="frame-div129">
              <div className="frame-div130">
                <div className="frame-div131">
                  <img
                    className="icon-gridstar-custom-setti"
                    alt=""
                    src="../icon--gridstar-custom--nodes34.svg"
                  />
                  <input
                    className="input-box"
                    type="text"
                    placeholder="Flow Control  Trafo"
                  />
                </div>
                <div className="frame-div132">
                  <button className="button3">
                    <img
                      className="icon-actions-save"
                      alt=""
                      src="../icon--actions--save.svg"
                    />
                    <div className="label-div45">Save</div>
                  </button>
                  <div className="frame-div133">
                    <div className="divider5" />
                  </div>
                  <button className="button4">
                    <img
                      className="icon-actions-save"
                      alt=""
                      src="../icon1.svg"
                    />
                  </button>
                  <button className="button4">
                    <img
                      className="icon-gridstar-custom-setti"
                      alt=""
                      src="../icon--gridstar-custom--min-maximise.svg"
                    />
                  </button>
                  <button className="button4">
                    <img
                      className="icon-actions-save"
                      alt=""
                      src="../icon--actions--close.svg"
                    />
                  </button>
                </div>
              </div>
              <div className="frame-inner-div">
                <div className="data-manipulation-task-popup">
                  <div className="frame-div134">
                    <div className="expression-builder-1">
                      <div className="section-title-div">Rule Expressions</div>
                      <div className="frame-div135">
                        <div className="label-div46">1.</div>
                        <div className="frame-div136">
                          <input
                            className="input-box1"
                            type="text"
                            placeholder="@MCP.S1.Rectifier.NominalCalc.TuneutnOut.TCP != 0
"
                          />
                          <div className="frame-div136">
                            <div className="frame-div126">
                              <img
                                className="connector-icon40"
                                alt=""
                                src="../connector14.svg"
                              />
                            </div>
                            <div
                              className="select-targetnode-div"
                              onClick={openConfigVariableProperty}
                            >
                              <img
                                className="icon-gridstar-custom-nodes75"
                                alt=""
                                src="../icon--gridstar-custom--nodes35.svg"
                              />
                              <select className="drop-down-input">
                                <option value="@MCP.S1.Rectifier.NominalCalc.Tuneutn">
                                  1
                                </option>
                                <option value="@MCP.S1.Rectifier.NominalCalc.xxx">
                                  2
                                </option>
                                <option value="@MCP.S1.Rectifier.NominalCalc">
                                  3
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <button className="button7">
                          <img
                            className="icon-gridstar-custom-setti"
                            alt=""
                            src="../icon--actions--close-small.svg"
                          />
                        </button>
                      </div>
                      <div className="frame-div135">
                        <div className="label-div46">2.</div>
                        <div className="frame-div140">
                          <input className="input-box2" type="text" />
                          <div className="frame-div126">
                            <div className="frame-div126">
                              <img
                                className="connector-icon40"
                                alt=""
                                src="../connector14.svg"
                              />
                            </div>
                            <div
                              className="select-targetnode-div"
                              onClick={openConfigVariableProperty1}
                            >
                              <img
                                className="icon-gridstar-custom-nodes75"
                                alt=""
                                src="../icon--gridstar-custom--nodes36.svg"
                              />
                              <select className="drop-down-input">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <button className="button7">
                          <img
                            className="icon-gridstar-custom-setti"
                            alt=""
                            src="../icon--actions--close-small.svg"
                          />
                        </button>
                      </div>
                      <div className="frame-div135">
                        <div className="label-div46">3.</div>
                        <div className="frame-div140">
                          <input
                            className="input-box2"
                            type="text"
                            placeholder={`@MCp.S1.Rectifier.NominalCalc.TuneUtN.out.pdc = S1.Rectifier.Precalc.PowerDefined.out.pdc & S1.Rectifier.NominalCalc.TuneUtN.out.TCP  ~= 0`}
                          />
                          <div className="frame-div126">
                            <div className="frame-div126">
                              <img
                                className="connector-icon40"
                                alt=""
                                src="../connector14.svg"
                              />
                            </div>
                            <div
                              className="select-targetnode-div"
                              onClick={openConfigVariableProperty2}
                            >
                              <img
                                className="icon-gridstar-custom-nodes77"
                                alt=""
                                src="../icon--gridstar-custom--nodes37.svg"
                              />
                              <select className="drop-down-input">
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <button className="button7">
                          <img
                            className="icon-gridstar-custom-setti"
                            alt=""
                            src="../icon--actions--close-small.svg"
                          />
                        </button>
                      </div>
                      <button className="button10">
                        <img
                          className="icon-gridstar-custom-setti"
                          alt=""
                          src="../icon--actions--new.svg"
                        />
                        <div className="label-div45">New Expression</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-div147">
              <div className="frame-div148">
                <div className="button-div63">
                  <img
                    className="icon-directions-backwards"
                    alt=""
                    src="../icon--directions--backwards.svg"
                  />
                </div>
                <div className="frame-div128">
                  <img
                    className="icon-gridstar-custom-setti"
                    alt=""
                    src="../icon--gridstar-custom--nodes33.svg"
                  />
                  <div className="tune-utn-div1">Tune utn</div>
                </div>
              </div>
              <div className="frame-div150">
                <div className="button-div63">
                  <img
                    className="icon-directions-backwards"
                    alt=""
                    src="../icon--directions--backwards.svg"
                  />
                </div>
                <img
                  className="icon-gridstar-custom-nodes79"
                  alt=""
                  src="../icon--gridstar-custom--nodes33.svg"
                />
                <div className="tune-rtn-div">Tune rtn</div>
              </div>
              <div className="frame-div150">
                <div className="button-div63">
                  <img
                    className="icon-directions-backwards"
                    alt=""
                    src="../icon--directions--backwards.svg"
                  />
                </div>
                <img
                  className="icon-gridstar-custom-nodes79"
                  alt=""
                  src="../icon--gridstar-custom--nodes33.svg"
                />
                <div className="tune-rtn-div">Output</div>
              </div>
            </div>
          </div>
        </div>
        <div className="horizontal-navigation-div">
          <div className="highlight-div" />
          <div className="menu-bar-div">
            <div className="frame-div152">
              <div className="group-div23">
                <div className="button-div67">
                  <div className="label-div50">Clear</div>
                </div>
                <div className="group-div24">
                  <img
                    className="component-1-icon"
                    alt=""
                    src="../component-11.svg"
                  />
                  <div className="gridstar-div">
                    <div className="gridstar-div1">Gridstar</div>
                  </div>
                </div>
              </div>
              <img className="border-icon" alt="" src="../border.svg" />
              <div className="frame-div153">
                <div className="horizontal-navigation-div1">
                  <div className="item-auto-layout">
                    <img
                      className="icon-gridstar-custom-setti"
                      alt=""
                      src="../icon--gridstar-custom--projects-all.svg"
                    />
                  </div>
                </div>
                <div className="horizontal-navigation-div2">
                  <div className="frame-div154">
                    <div className="item-auto-layout1">
                      <div className="icon-gridstar-custom-setti">
                        <div className="rectangle-div142" />
                        <b className="gl-b">GL</b>
                        <img className="gl-icon" alt="" src="../gl1.svg" />
                      </div>
                      <div className="text-div9">GridLink</div>
                    </div>
                    <div className="button-div41">
                      <img
                        className="icon-gridstar-custom-setti"
                        alt=""
                        src="../close-small.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="horizontal-navigation-div3">
                  <div className="frame-div126">
                    <div className="item-auto-layout2">
                      <div className="icon-gridstar-custom-setti">
                        <div className="rectangle-div143" />
                        <img className="p1-icon" alt="" src="../p11.svg" />
                      </div>
                      <div className="tune-utn-div">Project 1</div>
                    </div>
                    <div className="button-div41">
                      <img
                        className="icon-gridstar-custom-setti"
                        alt=""
                        src="../close-small.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="horizontal-navigation-div3">
                  <div className="frame-div126">
                    <div className="item-auto-layout2">
                      <div className="icon-gridstar-custom-setti">
                        <div className="rectangle-div143" />
                        <img className="p2-icon" alt="" src="../p21.svg" />
                      </div>
                      <div className="tune-utn-div">Project 2</div>
                    </div>
                    <div className="button-div41">
                      <img
                        className="icon-gridstar-custom-setti"
                        alt=""
                        src="../close-small.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="horizontal-navigation-div3">
                  <div className="frame-div126">
                    <div className="item-auto-layout2">
                      <img
                        className="icon-gridstar-custom-setti"
                        alt=""
                        src="../icon--gridstar-custom--studyicongridstar-customstudy-management2.svg"
                      />
                      <div className="tune-utn-div">Study Management</div>
                    </div>
                    <div className="button-div41">
                      <img
                        className="icon-gridstar-custom-setti"
                        alt=""
                        src="../close-small.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="actions-div">
              <div className="button-div41">
                <img
                  className="icon-gridstar-custom-setti"
                  alt=""
                  src="../icon--gridstar-custom--studyicongridstar-customstudy-management2.svg"
                />
              </div>
              <div className="button-div41">
                <img
                  className="icon-gridstar-custom-setti"
                  alt=""
                  src="../icon--gridstar-custom--settings.svg"
                />
              </div>
              <div className="button-div41">
                <img
                  className="icon-gridstar-custom-setti"
                  alt=""
                  src="../badge.svg"
                />
              </div>
              <div className="button-div41">
                <div className="icon-gridstar-custom-setti">
                  <img
                    className="image-3-icon"
                    alt=""
                    src="../image-3@2x.png"
                  />
                  <img
                    className="ellipse-icon"
                    alt=""
                    src="../ellipse-218@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="highlight-div1" />
        </div>
        <div className="open-selection-area">
          <div className="button-div76">
            <img
              className="icon-actions-save"
              alt=""
              src="../icon--controls--add1.svg"
            />
          </div>
        </div>
        <div className="group-div25">
          <div className="frame-div158">
            <div className="button-div41">
              <img
                className="icon-actions-save"
                alt=""
                src="../icon--controls--zoomin.svg"
              />
            </div>
            <div className="divider6" />
            <div className="button-div41">
              <img
                className="icon-actions-save"
                alt=""
                src="../icon--controls--zoomout.svg"
              />
            </div>
          </div>
          <div className="frame-div159">
            <div className="button-div41">
              <div className="icon-gridstar-custom-setti">
                <div className="group-div26">
                  <div className="subtract-div">
                    <div className="rectangle-div145" />
                    <div className="rectangle-div146" />
                    <div className="rectangle-div147" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isStateListWorkspacesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeStateListWorkspaces}
        >
          <StateListWorkspaces onClose={closeStateListWorkspaces} />
        </PortalPopup>
      )}
      {isConfigVariablePropertyOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfigVariableProperty}
        >
          <ConfigVariableProperty onClose={closeConfigVariableProperty} />
        </PortalPopup>
      )}
      {isConfigVariableProperty1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfigVariableProperty1}
        >
          <ConfigVariableProperty onClose={closeConfigVariableProperty1} />
        </PortalPopup>
      )}
      {isConfigVariableProperty2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfigVariableProperty2}
        >
          <ConfigVariableProperty onClose={closeConfigVariableProperty2} />
        </PortalPopup>
      )}
    </>
  );
};

export default Workspace;
