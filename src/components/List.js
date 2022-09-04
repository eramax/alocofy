import { useState, useCallback } from "react";
import FormPopup from "../components/FormPopup";
import PortalPopup from "../components/PortalPopup";
import MenuItems from "../components/MenuItems";
import "./List.css";

const List = ({ title }) => {
  const [isFormPopupOpen, setFormPopupOpen] = useState(false);

  const openFormPopup = useCallback(() => {
    setFormPopupOpen(true);
  }, []);

  const closeFormPopup = useCallback(() => {
    setFormPopupOpen(false);
  }, []);

  return (
    <>
      <div className="studylist-div">
        <MenuItems />
        <div className="header-div">
          <div className="studies-div">{title}</div>
          <button className="icon-tools-archivenew" onClick={openFormPopup}>
            <img className="shape-icon7" alt="" src="../shape.svg" />
          </button>
        </div>
      </div>
      {isFormPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFormPopup}
        >
          <FormPopup onClose={closeFormPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default List;
