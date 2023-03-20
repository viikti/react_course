import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

const CustomInput = ({ type, onChange, name, value, placeholder, size }) => {
  return (
    <TextField
      color="info"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      size="medium"
      placeholder={placeholder}
    />
  );
};
CustomInput.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
};

export default CustomInput;
