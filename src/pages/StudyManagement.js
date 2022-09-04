import List from "../components/List";
import MainHeader from "../components/MainHeader";
import "./StudyManagement.css";

const StudyManagement = () => {
  return (
    <div className="study-management-div">
      <div className="maincontent-div">
        <List title="Studies" />
        <div className="studycontent-div">
          <div className="studyheader-div">
            <div className="frame-div">
              <div className="frame-div1">
                <div className="frame-div2">
                  <div className="icon-gridstar-custom-study">
                    <div className="rectangle-div" />
                    <b className="mcp-b">MCP</b>
                  </div>
                  <div className="main-circuit-parameters">
                    Main Circuit Parameters
                  </div>
                  <div className="tags-div">
                    <div className="tag-div">
                      <div className="label-div">Study: MCP</div>
                    </div>
                    <div className="tag-div">
                      <div className="label-div">Tag: Value</div>
                    </div>
                    <div className="button-div">
                      <img
                        className="icon-controls-add"
                        alt=""
                        src="../icon--controls--add.svg"
                      />
                    </div>
                  </div>
                  <div className="button-div1">
                    <img
                      className="icon-tools-edit"
                      alt=""
                      src="../icon--tools--edit.svg"
                    />
                  </div>
                </div>
                <div className="description-of-the-workflow-an">
                  Description of the workflow and what it does. This is a longer
                  description to show what it looks like to break line.
                </div>
              </div>
              <div className="frame-div3">
                <div className="button-div2">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../icon--user--people.svg"
                  />
                  <div className="group-div">Study Members</div>
                </div>
              </div>
            </div>
            <div className="divider" />
          </div>
          <div className="groups-div">
            <List title="Groups" />
            <div className="groupcontent-div">
              <div className="studyheader-div">
                <div className="frame-div">
                  <div className="frame-div1">
                    <div className="frame-div2">
                      <img
                        className="icon-tools-edit"
                        alt=""
                        src="../icon--tools--archive.svg"
                      />
                      <div className="group-div">Precalc</div>
                      <div className="button-div1">
                        <img
                          className="icon-tools-edit"
                          alt=""
                          src="../icon--tools--edit.svg"
                        />
                      </div>
                    </div>
                    <div className="description-of-the-workflow-an1">
                      Description of the workflow and what it does. This is a
                      longer description to show what it looks like to break
                      line.
                    </div>
                  </div>
                  <div className="frame-div7">
                    <div className="frame-div8">
                      <b className="selected-b">2 Selected</b>
                      <div className="button-div4">
                        <img
                          className="icon-tools-edit"
                          alt=""
                          src="../icon--actions--moreoptionsvertical.svg"
                        />
                        <div className="group-div">Action</div>
                      </div>
                    </div>
                    <div className="divider1" />
                    <div className="new-item-button">
                      <div className="button-div5">
                        <img
                          className="icon-tools-edit"
                          alt=""
                          src="../icon--controls--add1.svg"
                        />
                        <div className="group-div">New Item</div>
                      </div>
                      <img
                        className="icon-directions-dropdown"
                        alt=""
                        src="../icon-directions--dropdown.svg"
                      />
                    </div>
                    <div className="search-and-filter">
                      <div className="frame-div9">
                        <div className="label-div5">225 items</div>
                        <div className="asset-search-box-input">
                          <div className="assets-input-box">
                            <div className="input-auto-layout">
                              <div className="mct-div">Search</div>
                              <img
                                className="icon-tools-edit"
                                alt=""
                                src="../icon--actions--search.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="assets-filter-group-input">
                          <img
                            className="icon-tools-edit"
                            alt=""
                            src="../icon--actions--filters.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider" />
              </div>
              <div className="table-div">
                <div className="table-row-list-access">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className="frame-div10">
                    <div className="frame-div11">
                      <b className="label-div">ID</b>
                    </div>
                    <div className="frame-div12">
                      <b className="label-div">Name</b>
                    </div>
                    <div className="frame-div12">
                      <b className="label-div">Type</b>
                    </div>
                    <div className="frame-div12">
                      <b className="label-div">State</b>
                    </div>
                  </div>
                  <div className="button-div6">
                    <img className="icon-tools-edit" alt="" />
                  </div>
                </div>
                <div className="table-row-list-access1">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className="frame-div10">
                    <div className="frame-div11">
                      <div className="label-div">1</div>
                    </div>
                    <div className="frame-div17">
                      <img
                        className="icon-gridstar-custom-study"
                        alt=""
                        src="../icon--gridstar-custom--nodes.svg"
                      />
                      <div className="mct-div">Precalc</div>
                    </div>
                    <div className="frame-div12">
                      <div className="label-div">Computing Task</div>
                    </div>
                    <div className="frame-div19">
                      <div className="label-div">Published</div>
                    </div>
                  </div>
                  <div className="button-div1">
                    <img
                      className="icon-tools-edit"
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className="table-row-list-access1">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className="frame-div10">
                    <div className="frame-div11">
                      <div className="label-div">1</div>
                    </div>
                    <div className="frame-div17">
                      <img
                        className="icon-gridstar-custom-study"
                        alt=""
                        src="../icon--gridstar-custom--nodes1.svg"
                      />
                      <div className="mct-div">Cables</div>
                    </div>
                    <div className="frame-div12">
                      <div className="label-div">Computing Task</div>
                    </div>
                    <div className="frame-div19">
                      <div className="label-div">Published</div>
                    </div>
                  </div>
                  <div className="button-div1">
                    <img
                      className="icon-tools-edit"
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className="table-row-list-access1">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className="frame-div10">
                    <div className="frame-div11">
                      <div className="label-div">2</div>
                    </div>
                    <div className="frame-div17">
                      <img
                        className="icon-gridstar-custom-study"
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className="mct-div">Cables In</div>
                    </div>
                    <div className="frame-div12">
                      <div className="label-div">Computing Task</div>
                    </div>
                    <div className="frame-div19">
                      <div className="label-div">Published</div>
                    </div>
                  </div>
                  <div className="button-div1">
                    <img
                      className="icon-tools-edit"
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className="table-row-list-access1">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className="frame-div10">
                    <div className="frame-div11">
                      <div className="label-div">3</div>
                    </div>
                    <div className="frame-div17">
                      <img
                        className="icon-gridstar-custom-study"
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className="mct-div">Cables Out</div>
                    </div>
                    <div className="frame-div12">
                      <div className="label-div">Computing Task</div>
                    </div>
                    <div className="frame-div19">
                      <div className="label-div">Published</div>
                    </div>
                  </div>
                  <div className="button-div1">
                    <img
                      className="icon-tools-edit"
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className="table-row-list-access1">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../checkbox5.svg"
                  />
                  <div className="frame-div10">
                    <div className="frame-div11">
                      <div className="label-div">2</div>
                    </div>
                    <div className="frame-div17">
                      <img
                        className="icon-gridstar-custom-study"
                        alt=""
                        src="../icon--gridstar-custom--nodes1.svg"
                      />
                      <div className="mct-div">Power Defined</div>
                    </div>
                    <div className="frame-div12">
                      <div className="label-div">Computing Task</div>
                    </div>
                    <div className="frame-div19">
                      <div className="label-div">Published</div>
                    </div>
                  </div>
                  <div className="button-div1">
                    <img
                      className="icon-tools-edit"
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className="table-row-list-access1">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className="frame-div10">
                    <div className="frame-div11">
                      <div className="label-div">2</div>
                    </div>
                    <div className="frame-div17">
                      <img
                        className="icon-gridstar-custom-study"
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className="mct-div">Power Defined In</div>
                    </div>
                    <div className="frame-div12">
                      <div className="label-div">Computing Task</div>
                    </div>
                    <div className="frame-div19">
                      <div className="label-div">Published</div>
                    </div>
                  </div>
                  <div className="button-div1">
                    <img
                      className="icon-tools-edit"
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className="table-row-list-access1">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className="frame-div10">
                    <div className="frame-div11">
                      <div className="label-div">3</div>
                    </div>
                    <div className="frame-div17">
                      <img
                        className="icon-gridstar-custom-study"
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className="mct-div">Power Defined Out</div>
                    </div>
                    <div className="frame-div12">
                      <div className="label-div">Computing Task</div>
                    </div>
                    <div className="frame-div19">
                      <div className="label-div">Published</div>
                    </div>
                  </div>
                  <div className="button-div1">
                    <img
                      className="icon-tools-edit"
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className="table-row-list-access1">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className="frame-div10">
                    <div className="frame-div11">
                      <div className="label-div">3</div>
                    </div>
                    <div className="frame-div17">
                      <img
                        className="icon-gridstar-custom-study"
                        alt=""
                        src="../icon--gridstar-custom--nodes1.svg"
                      />
                      <div className="mct-div7">Reactive Power Constraints</div>
                    </div>
                    <div className="frame-div12">
                      <div className="label-div">Computing Task</div>
                    </div>
                    <div className="frame-div19">
                      <div className="label-div">Published</div>
                    </div>
                  </div>
                  <div className="button-div1">
                    <img
                      className="icon-tools-edit"
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className="table-row-list-access1">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className="frame-div10">
                    <div className="frame-div11">
                      <div className="label-div">2</div>
                    </div>
                    <div className="frame-div17">
                      <img
                        className="icon-gridstar-custom-study"
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className="mct-div">
                        Reactive Power Constraints In
                      </div>
                    </div>
                    <div className="frame-div12">
                      <div className="label-div">Computing Task</div>
                    </div>
                    <div className="frame-div19">
                      <div className="label-div">Published</div>
                    </div>
                  </div>
                  <div className="button-div1">
                    <img
                      className="icon-tools-edit"
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className="table-row-list-access1">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className="frame-div10">
                    <div className="frame-div11">
                      <div className="label-div">3</div>
                    </div>
                    <div className="frame-div17">
                      <img
                        className="icon-gridstar-custom-study"
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className="mct-div">
                        Reactive Power Constraints Out
                      </div>
                    </div>
                    <div className="frame-div12">
                      <div className="label-div">Computing Task</div>
                    </div>
                    <div className="frame-div19">
                      <div className="label-div">Published</div>
                    </div>
                  </div>
                  <div className="button-div1">
                    <img
                      className="icon-tools-edit"
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className="table-row-list-access1">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../checkbox5.svg"
                  />
                  <div className="frame-div10">
                    <div className="frame-div11">
                      <div className="label-div">4</div>
                    </div>
                    <div className="frame-div17">
                      <img
                        className="icon-gridstar-custom-study"
                        alt=""
                        src="../icon--gridstar-custom--nodes1.svg"
                      />
                      <div className="mct-div">Corners PQ</div>
                    </div>
                    <div className="frame-div12">
                      <div className="label-div">Computing Task</div>
                    </div>
                    <div className="frame-div19">
                      <div className="label-div">Published</div>
                    </div>
                  </div>
                  <div className="button-div1">
                    <img
                      className="icon-tools-edit"
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className="table-row-list-access1">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className="frame-div10">
                    <div className="frame-div11">
                      <div className="label-div">2</div>
                    </div>
                    <div className="frame-div17">
                      <img
                        className="icon-gridstar-custom-study"
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className="mct-div">Corners PQ In</div>
                    </div>
                    <div className="frame-div12">
                      <div className="label-div">Computing Task</div>
                    </div>
                    <div className="frame-div19">
                      <div className="label-div">Published</div>
                    </div>
                  </div>
                  <div className="button-div1">
                    <img
                      className="icon-tools-edit"
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className="table-row-list-access1">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className="frame-div10">
                    <div className="frame-div11">
                      <div className="label-div">3</div>
                    </div>
                    <div className="frame-div17">
                      <img
                        className="icon-gridstar-custom-study"
                        alt=""
                        src="../icon--gridstar-custom--nodes12.svg"
                      />
                      <div className="mct-div">Corners PQ Out</div>
                    </div>
                    <div className="frame-div12">
                      <div className="label-div">Computing Task</div>
                    </div>
                    <div className="frame-div19">
                      <div className="label-div">Published</div>
                    </div>
                  </div>
                  <div className="button-div1">
                    <img
                      className="icon-tools-edit"
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className="table-row-list-access1">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className="frame-div10">
                    <div className="frame-div11">
                      <div className="label-div">5</div>
                    </div>
                    <div className="frame-div17">
                      <img
                        className="icon-gridstar-custom-study"
                        alt=""
                        src="../icon--gridstar-custom--nodes13.svg"
                      />
                      <div className="mct-div7">Transformer Rating</div>
                    </div>
                    <div className="frame-div12">
                      <div className="label-div">Computing Task</div>
                    </div>
                    <div className="frame-div19">
                      <div className="label-div">Published</div>
                    </div>
                  </div>
                  <div className="button-div1">
                    <img
                      className="icon-tools-edit"
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className="table-row-list-access1">
                  <img
                    className="icon-tools-edit"
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className="frame-div10">
                    <div className="frame-div11">
                      <div className="label-div">2</div>
                    </div>
                    <div className="frame-div17">
                      <img
                        className="icon-gridstar-custom-study"
                        alt=""
                        src="../icon--gridstar-custom--nodes12.svg"
                      />
                      <div className="mct-div">Transformer Rating In</div>
                    </div>
                    <div className="frame-div12">
                      <div className="label-div">Computing Task</div>
                    </div>
                    <div className="frame-div19">
                      <div className="label-div">Published</div>
                    </div>
                  </div>
                  <div className="button-div1">
                    <img
                      className="icon-tools-edit"
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainHeader />
    </div>
  );
};

export default StudyManagement;
