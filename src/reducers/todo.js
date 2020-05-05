import update from 'immutability-helper';

const items = [{id: 1, title: 'Play with dog', done: false}];

const initialState = {
  items,
  newItem: '',
};

let counter = items.length;

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'TODO/ITEM_CLICKED':
      const items = state.items.slice();

      let indexToUpdate;
      items.forEach((item, index) => {
        if (item.id === action.payload.id) {
          indexToUpdate = index;
        }
      });

      return update(state, {
        items: {
          [indexToUpdate]: {
            done: {
              $set: !items[indexToUpdate].done
            }
          }
        }
      });
    case 'TODO/ITEM_REMOVE':
      const fromState = state.items.slice();

      let indexToRemove;
      fromState.forEach((item, index) => {
        if (item.id === action.payload.id) {
          indexToRemove = index;
        }
      });

      fromState.splice(indexToRemove, 1);

      return update(state, {
        $merge:
          {
            items: fromState,
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
      counter++;
      return update(state, {
        items: {
          $push: [{
            id: counter,
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
