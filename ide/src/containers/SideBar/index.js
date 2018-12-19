import { connect } from "react-redux";
import SideBar from "../../components/SideBar";

const mapStateToProps = ({ scripts: { files } }) => ({ scripts: files });

export default connect(mapStateToProps)(SideBar);

