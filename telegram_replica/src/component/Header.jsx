import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
export const Header = ({ name }) => {
  console.log(name);
  return (
    <div className="header">
      <div className="user-info">
        <span className="username">{name == null ? "Unknown" : name}</span>
        <span className="last-seen">12:03</span>
      </div>
      <div className="icons">
        <SearchOutlinedIcon className="icon" />
        <CallOutlinedIcon className="icon" />
        <VideocamOutlinedIcon className="icon" />
        <MoreVertOutlinedIcon className="icon" />
      </div>
    </div>
  );
};