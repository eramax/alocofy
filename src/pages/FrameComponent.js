import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Icon,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  Box,
  Slider,
  Autocomplete as MuiAutocomplete,
} from "@mui/material";
import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  Dropdown as BsDropdown,
  DropdownButton,
  SplitButton,
} from "react-bootstrap";
import { Input } from "@chakra-ui/react";
import "./FrameComponent.css";

const FrameComponent = () => {
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] =
    useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="frame-div90">
        <Button
          className="buttoncontained-text-and-ico"
          variant="contained"
          color="primary"
          endIcon={<Icon>arrow_forward_sharp</Icon>}
        >
          Button
        </Button>
        <TextField
          className="inputstandard-textfield"
          sx={{ width: 220 }}
          color="primary"
          variant="standard"
          defaultValue="Input"
          type="text"
          label="Label"
          size="medium"
          margin="none"
        />
        <FormControlLabel
          className="checkboxchecked-checkbox-and"
          label="Label"
          labelPlacement="end"
          control={<Checkbox color="primary" defaultChecked size="medium" />}
        />
        <FormControl
          className="selectstandard-formcontrol"
          sx={{ width: 220 }}
          variant="standard"
        >
          <InputLabel color="primary">Label</InputLabel>
          <Select color="primary" size="medium" label="Label">
            <MenuItem value="a">a</MenuItem>
            <MenuItem value="b">b</MenuItem>
            <MenuItem value="c">c</MenuItem>
            <MenuItem value="d">d</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <DropdownButton
          className="dropdownbutton-with-dropdown"
          title="Dropdown"
          variant="primary"
          align="start"
          drop="down"
        >
          <BsDropdown.Item>Option 1</BsDropdown.Item>
          <BsDropdown.Item>Option 2</BsDropdown.Item>
          <BsDropdown.Item>Option 3</BsDropdown.Item>
        </DropdownButton>
        <Box className="slidercontinuous-box" sx={{ width: 494 }}>
          <Slider color="primary" defaultValue={20} orientation="horizontal" />
        </Box>
        <div className="date-picker-div">
          <MuiDatePicker
            label="Date picker"
            value={datePickerDateTimePickerValue}
            onChange={(newValue) => {
              setDatePickerDateTimePickerValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                color="primary"
                variant="standard"
                size="medium"
                renderInput={{ placeholder: "01/01/2022" }}
                helperText=""
              />
            )}
          />
        </div>
        <Input
          className="dt-pickeroutlined-input"
          variant="outline"
          width="320px"
          type="date"
        />
        <MuiAutocomplete
          className="autocompletestandard-muiautocomplete"
          sx={{ width: "100%" }}
          disablePortal
          options={["ahmed", "essam", "morsi", "ali", "amr"]}
          renderInput={(params) => (
            <TextField
              {...params}
              color="primary"
              label="Label"
              variant="standard"
              placeholder=""
              helperText=""
            />
          )}
          defaultValue="Value"
          size="small"
        />
      </div>
    </LocalizationProvider>
  );
};

export default FrameComponent;
