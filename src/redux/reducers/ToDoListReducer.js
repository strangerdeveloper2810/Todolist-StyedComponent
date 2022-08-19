const initialState = {
    number: 1
};

const ToDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "": {
      return { ...state };
    }

    default:
      return state;
  }
};

export default ToDoListReducer;