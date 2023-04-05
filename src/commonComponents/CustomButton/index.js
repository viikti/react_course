import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const CustomButton = ({ text, onClick, color, size }) => {
  return (
    <Button onClick={onClick} color={color} size="medium">
      {text}
    </Button>
  );
};

CustomButton.prototype = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default CustomButton;
