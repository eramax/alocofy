import List from "../components/List";
import MainHeader from "../components/MainHeader";
import styles from "./StudyManagement.module.css";

const StudyManagement = () => {
  return (
    <div className={styles.studyManagementDiv}>
      <div className={styles.mainContentDiv}>
        <List title="Studies" />
        <div className={styles.studyContentDiv}>
          <div className={styles.studyHeaderDiv}>
            <div className={styles.frameDiv}>
              <div className={styles.frameDiv1}>
                <div className={styles.frameDiv2}>
                  <div className={styles.iconGRIDSTARCUSTOMStudy}>
                    <div className={styles.rectangleDiv} />
                    <b className={styles.mCPB}>MCP</b>
                  </div>
                  <div className={styles.mainCircuitParameters}>
                    Main Circuit Parameters
                  </div>
                  <div className={styles.tagsDiv}>
                    <div className={styles.tagDiv}>
                      <div className={styles.labelDiv}>Study: MCP</div>
                    </div>
                    <div className={styles.tagDiv}>
                      <div className={styles.labelDiv}>Tag: Value</div>
                    </div>
                    <div className={styles.buttonDiv}>
                      <img
                        className={styles.iconControlsAdd}
                        alt=""
                        src="../icon--controls--add.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--tools--edit.svg"
                    />
                  </div>
                </div>
                <div className={styles.descriptionOfTheWorkflowAn}>
                  Description of the workflow and what it does. This is a longer
                  description to show what it looks like to break line.
                </div>
              </div>
              <div className={styles.frameDiv3}>
                <div className={styles.buttonDiv2}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../icon--user--people.svg"
                  />
                  <div className={styles.groupDiv}>Study Members</div>
                </div>
              </div>
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.groupsDiv}>
            <List title="Groups" />
            <div className={styles.groupContentDiv}>
              <div className={styles.studyHeaderDiv}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameDiv1}>
                    <div className={styles.frameDiv2}>
                      <img
                        className={styles.iconToolsEdit}
                        alt=""
                        src="../icon--tools--archive.svg"
                      />
                      <div className={styles.groupDiv}>Precalc</div>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconToolsEdit}
                          alt=""
                          src="../icon--tools--edit.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.descriptionOfTheWorkflowAn1}>
                      Description of the workflow and what it does. This is a
                      longer description to show what it looks like to break
                      line.
                    </div>
                  </div>
                  <div className={styles.frameDiv7}>
                    <div className={styles.frameDiv8}>
                      <b className={styles.selectedB}>2 Selected</b>
                      <div className={styles.buttonDiv4}>
                        <img
                          className={styles.iconToolsEdit}
                          alt=""
                          src="../icon--actions--moreoptionsvertical.svg"
                        />
                        <div className={styles.groupDiv}>Action</div>
                      </div>
                    </div>
                    <div className={styles.divider1} />
                    <div className={styles.newItemButton}>
                      <div className={styles.buttonDiv5}>
                        <img
                          className={styles.iconToolsEdit}
                          alt=""
                          src="../icon--controls--add1.svg"
                        />
                        <div className={styles.groupDiv}>New Item</div>
                      </div>
                      <img
                        className={styles.iconDirectionsDropDown}
                        alt=""
                        src="../icon-directions--dropdown.svg"
                      />
                    </div>
                    <div className={styles.searchAndFilter}>
                      <div className={styles.frameDiv9}>
                        <div className={styles.labelDiv5}>225 items</div>
                        <div className={styles.assetSearchBoxInput}>
                          <div className={styles.assetsInputBox}>
                            <div className={styles.inputAutoLayout}>
                              <div className={styles.mCTDiv}>Search</div>
                              <img
                                className={styles.iconToolsEdit}
                                alt=""
                                src="../icon--actions--search.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.assetsFilterGroupInput}>
                          <img
                            className={styles.iconToolsEdit}
                            alt=""
                            src="../icon--actions--filters.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divider} />
              </div>
              <div className={styles.tableDiv}>
                <div className={styles.tableRowListAccess}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <b className={styles.labelDiv}>ID</b>
                    </div>
                    <div className={styles.frameDiv12}>
                      <b className={styles.labelDiv}>Name</b>
                    </div>
                    <div className={styles.frameDiv12}>
                      <b className={styles.labelDiv}>Type</b>
                    </div>
                    <div className={styles.frameDiv12}>
                      <b className={styles.labelDiv}>State</b>
                    </div>
                  </div>
                  <div className={styles.buttonDiv6}>
                    <img className={styles.iconToolsEdit} alt="" />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <div className={styles.labelDiv}>1</div>
                    </div>
                    <div className={styles.frameDiv17}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes.svg"
                      />
                      <div className={styles.mCTDiv}>Precalc</div>
                    </div>
                    <div className={styles.frameDiv12}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv19}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <div className={styles.labelDiv}>1</div>
                    </div>
                    <div className={styles.frameDiv17}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes1.svg"
                      />
                      <div className={styles.mCTDiv}>Cables</div>
                    </div>
                    <div className={styles.frameDiv12}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv19}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <div className={styles.labelDiv}>2</div>
                    </div>
                    <div className={styles.frameDiv17}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className={styles.mCTDiv}>Cables In</div>
                    </div>
                    <div className={styles.frameDiv12}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv19}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <div className={styles.labelDiv}>3</div>
                    </div>
                    <div className={styles.frameDiv17}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className={styles.mCTDiv}>Cables Out</div>
                    </div>
                    <div className={styles.frameDiv12}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv19}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox5.svg"
                  />
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <div className={styles.labelDiv}>2</div>
                    </div>
                    <div className={styles.frameDiv17}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes1.svg"
                      />
                      <div className={styles.mCTDiv}>Power Defined</div>
                    </div>
                    <div className={styles.frameDiv12}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv19}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <div className={styles.labelDiv}>2</div>
                    </div>
                    <div className={styles.frameDiv17}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className={styles.mCTDiv}>Power Defined In</div>
                    </div>
                    <div className={styles.frameDiv12}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv19}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <div className={styles.labelDiv}>3</div>
                    </div>
                    <div className={styles.frameDiv17}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className={styles.mCTDiv}>Power Defined Out</div>
                    </div>
                    <div className={styles.frameDiv12}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv19}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <div className={styles.labelDiv}>3</div>
                    </div>
                    <div className={styles.frameDiv17}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes1.svg"
                      />
                      <div className={styles.mCTDiv7}>
                        Reactive Power Constraints
                      </div>
                    </div>
                    <div className={styles.frameDiv12}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv19}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <div className={styles.labelDiv}>2</div>
                    </div>
                    <div className={styles.frameDiv17}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className={styles.mCTDiv}>
                        Reactive Power Constraints In
                      </div>
                    </div>
                    <div className={styles.frameDiv12}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv19}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <div className={styles.labelDiv}>3</div>
                    </div>
                    <div className={styles.frameDiv17}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className={styles.mCTDiv}>
                        Reactive Power Constraints Out
                      </div>
                    </div>
                    <div className={styles.frameDiv12}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv19}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox5.svg"
                  />
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <div className={styles.labelDiv}>4</div>
                    </div>
                    <div className={styles.frameDiv17}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes1.svg"
                      />
                      <div className={styles.mCTDiv}>Corners PQ</div>
                    </div>
                    <div className={styles.frameDiv12}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv19}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <div className={styles.labelDiv}>2</div>
                    </div>
                    <div className={styles.frameDiv17}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className={styles.mCTDiv}>Corners PQ In</div>
                    </div>
                    <div className={styles.frameDiv12}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv19}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <div className={styles.labelDiv}>3</div>
                    </div>
                    <div className={styles.frameDiv17}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes12.svg"
                      />
                      <div className={styles.mCTDiv}>Corners PQ Out</div>
                    </div>
                    <div className={styles.frameDiv12}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv19}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <div className={styles.labelDiv}>5</div>
                    </div>
                    <div className={styles.frameDiv17}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes13.svg"
                      />
                      <div className={styles.mCTDiv7}>Transformer Rating</div>
                    </div>
                    <div className={styles.frameDiv12}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv19}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv10}>
                    <div className={styles.frameDiv11}>
                      <div className={styles.labelDiv}>2</div>
                    </div>
                    <div className={styles.frameDiv17}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes12.svg"
                      />
                      <div className={styles.mCTDiv}>Transformer Rating In</div>
                    </div>
                    <div className={styles.frameDiv12}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv19}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
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
