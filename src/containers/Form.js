import {connect} from 'react-redux';
import Form from "../components/Form";

const mapStateToProps = state => {
  return {
    newItem: state.todo.newItem,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    newItemChanged: (e) => dispatch({
      type: 'TODO/NEW_ITEM_CHANGED',
      payload: {
        value: e.target.value,
      }
    }),
    onSubmit: () => dispatch({
      type: 'TODO/NEW_ITEM_SUBMITTED',
    }),
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
