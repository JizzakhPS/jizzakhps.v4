import { forwardRef } from "react";
import PropTypes from "prop-types";

// Custom styles for MKAvatar
import MKAvatarRoot from "components/MKAvatar/MKAvatarRoot";

const MKAvatar = forwardRef(({ bgColor, size, shadow, ...rest }, ref) => (
  <MKAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));

MKAvatar.defaultProps = {
  bgColor: "transparent",
  size: "md",
  shadow: "none",
};

MKAvatar.propTypes = {
  bgColor: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  shadow: PropTypes.oneOf(["none", "xs", "sm", "md", "lg", "xl", "xxl", "inset"]),
};

export default MKAvatar;
