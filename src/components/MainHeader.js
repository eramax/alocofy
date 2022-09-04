import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={styles.mainHeaderDiv}>
      <div className={styles.highlightDiv} />
      <div className={styles.menuBarDiv}>
        <div className={styles.frameDiv}>
          <div className={styles.groupDiv}>
            <div className={styles.buttonDiv}>
              <div className={styles.labelDiv}>Clear</div>
            </div>
            <div className={styles.groupDiv1}>
              <img
                className={styles.component1Icon}
                alt=""
                src="../component-1.svg"
              />
              <div className={styles.gridStarDiv}>
                <div className={styles.gridstarDiv}>Gridstar</div>
              </div>
            </div>
          </div>
          <img className={styles.borderIcon} alt="" src="../border.svg" />
          <div className={styles.frameDiv1}>
            <div className={styles.horizontalNavigationDiv}>
              <div className={styles.itemAutoLayout}>
                <img
                  className={styles.iconGRIDSTARCUSTOMProje}
                  alt=""
                  src="../icon--gridstar-custom--projects-all.svg"
                />
              </div>
            </div>
            <div className={styles.horizontalNavigationDiv1}>
              <div className={styles.frameDiv2}>
                <div className={styles.itemAutoLayout1}>
                  <div className={styles.iconGRIDSTARCUSTOMProje}>
                    <div className={styles.rectangleDiv} />
                    <b className={styles.gLB}>GL</b>
                    <img className={styles.gLIcon} alt="" src="../gl.svg" />
                  </div>
                  <div className={styles.textDiv}>GridLink</div>
                </div>
                <div className={styles.buttonDiv1}>
                  <img
                    className={styles.iconGRIDSTARCUSTOMProje}
                    alt=""
                    src="../close-small.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.horizontalNavigationDiv2}>
              <div className={styles.frameDiv2}>
                <div className={styles.itemAutoLayout1}>
                  <div className={styles.iconGRIDSTARCUSTOMProje}>
                    <div className={styles.rectangleDiv} />
                    <img className={styles.p1Icon} alt="" src="../p1.svg" />
                  </div>
                  <div className={styles.textDiv1}>Project 1</div>
                </div>
                <div className={styles.buttonDiv1}>
                  <img
                    className={styles.iconGRIDSTARCUSTOMProje}
                    alt=""
                    src="../close-small.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.horizontalNavigationDiv2}>
              <div className={styles.frameDiv2}>
                <div className={styles.itemAutoLayout1}>
                  <div className={styles.iconGRIDSTARCUSTOMProje}>
                    <div className={styles.rectangleDiv} />
                    <img className={styles.p2Icon} alt="" src="../p2.svg" />
                  </div>
                  <div className={styles.textDiv1}>Project 2</div>
                </div>
                <div className={styles.buttonDiv1}>
                  <img
                    className={styles.iconGRIDSTARCUSTOMProje}
                    alt=""
                    src="../close-small.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.horizontalNavigationDiv4}>
              <div className={styles.frameDiv5}>
                <div className={styles.itemAutoLayout4}>
                  <img
                    className={styles.iconGRIDSTARCUSTOMProje}
                    alt=""
                    src="../icon--gridstar-custom--studyicongridstar-customstudy-management.svg"
                  />
                  <div className={styles.textDiv3}>Study Management</div>
                </div>
                <div className={styles.buttonDiv1}>
                  <img
                    className={styles.iconGRIDSTARCUSTOMProje}
                    alt=""
                    src="../close-small.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.actionsDiv}>
          <div className={styles.buttonDiv1}>
            <img
              className={styles.iconGRIDSTARCUSTOMProje}
              alt=""
              src="../icon--gridstar-custom--studyicongridstar-customstudy-management1.svg"
            />
          </div>
          <div className={styles.buttonDiv1}>
            <img
              className={styles.iconGRIDSTARCUSTOMProje}
              alt=""
              src="../icon--gridstar-custom--settings.svg"
            />
          </div>
          <div className={styles.buttonDiv1}>
            <img
              className={styles.iconGRIDSTARCUSTOMProje}
              alt=""
              src="../badge.svg"
            />
          </div>
          <div className={styles.buttonDiv1}>
            <div className={styles.iconGRIDSTARCUSTOMProje}>
              <img
                className={styles.image3Icon}
                alt=""
                src="../image-3@2x.png"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-218@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.highlightDiv1} />
    </div>
  );
};

export default MainHeader;
