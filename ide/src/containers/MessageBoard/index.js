import { connect } from "react-redux";
import MessageBoard from "../../components/MessageBoard";

const mapStateToProps = ({ messages }) => ({ ...messages });

export default connect(mapStateToProps)(MessageBoard);
