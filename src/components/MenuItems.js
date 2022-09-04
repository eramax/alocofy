import MenuItem1 from "../components/MenuItem1";
import "./MenuItems.css";

const MenuItems = () => {
  return (
    <div className="items-div">
      <MenuItem1 short="ISO" name="Insulation Coordination" />
      <MenuItem1 short="MCP" name="Main Circuit Parameters" />
    </div>
  );
};

export default MenuItems;
