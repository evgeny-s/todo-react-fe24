import {connect} from 'react-redux';
import Todos from "../components/Todos";

const mapStateToProps = state => {
  return {
    items: state.todo.items,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onItemClicked: (id) => dispatch({
      type: 'TODO/ITEM_CLICKED',
      payload: {
        id,
      }
    }),
    onItemRemove: (id) => dispatch({
      type: 'TODO/ITEM_REMOVE',
      payload: {
        id,
      }
    }),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
