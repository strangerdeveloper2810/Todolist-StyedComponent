import { ToDoListDarkTheme } from "../../themes/ToDoListDarkTheme";

const initialState = {
  ThemeDefault: ToDoListDarkTheme,
  taskList: [
    { id: "task-1", name: "Learn ReactJS", done: true },
    { id: "task-2", name: "Learn NodeJS", done: true },
    { id: "task-3", name: "Learn Angular", done: false },
    { id: "task-4", name: "Learn VueJS", done: false },
  ],
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
