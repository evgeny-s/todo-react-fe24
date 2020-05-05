import update from 'immutability-helper';

const initialState = {
  items: [
    {id: 1, title: 'Play with dog', done: false},
  ],
  newItem: '',
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'TODO/ITEM_CLICKED':
      const items = state.items.slice();

      items.forEach((item) => {
        if (item.id === action.payload.id) {
          item.done = !item.done;
        }
      });

      return update(state, {
        $merge:
          {
            items,
          }
      });
    case 'TODO/NEW_ITEM_CHANGED':
      return update(state, {
        $merge:
          {
            newItem: action.payload.value,
          }
      });
    case 'TODO/NEW_ITEM_SUBMITTED':
      return update(state, {
        items: {
          $push: [{
            id: state.items.length + 1,
            title: state.newItem,
            done: false,
          }]
        },
        $merge: {
          newItem: initialState.newItem,
        },
      });
    default:
      return state
  }
}

export default todoReducer;
