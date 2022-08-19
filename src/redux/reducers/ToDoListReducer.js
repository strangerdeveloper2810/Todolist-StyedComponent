import { ToDoListDarkTheme } from "../../themes/ToDoListDarkTheme";
import { ADD_TASK, DELETE_TASK, DONE_TASK } from "../types/ToDoListType";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const initialState = {
  ThemeDefault: ToDoListDarkTheme,
  taskList: [
    { id: "task-1", taskName: "Learn ReactJS", done: true },
    { id: "task-2", taskName: "Learn NodeJS", done: true },
    { id: "task-3", taskName: "Learn Angular", done: false },
    { id: "task-4", taskName: "Learn VueJS", done: false },
  ],
};

const Error = withReactContent(Swal);

const ToDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      // Kiểm tra input có bị rỗng không
      if (action.newTask.taskName.trim() === "") {
        Error.fire({
          icon: "error",
          title: "Oops...",
          text: "Task name is required!",
        });
        return { ...state };
      }

      // Kiểm tra taskName có bị trùng không
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );

      if (index !== -1) {
        Error.fire({
          icon: "error",
          title: "Oops...",
          text: "Task name is exists!",
        });
        return { ...state };
      }

      taskListUpdate.push(action.newTask);
      state.taskList = taskListUpdate;
      return { ...state };
    }

    case DONE_TASK: {
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);

      if (index !== -1) {
        taskListUpdate[index].done = true;
      }

      return { ...state, taskList: taskListUpdate };
    }

    case DELETE_TASK: {
      // Option 1
      // let taskListUpdate = [...state.taskList];
      // let index = taskListUpdate.findIndex((task) => task.id === action.taskId);

      // if (index !== -1) {
      //   taskListUpdate.splice(index, 1);
      // }
      // return { ...state, taskList: taskListUpdate };

      // Option 2
      // let taskListUpdate = [...state.taskList];
      // let result = taskListUpdate.filter((task) => task.id !== action.taskId);
      // return { ...state, taskList: result };

      // Option 3
      return {...state, taskList: state.taskList.filter(task=> task.id !== action.taskId)}
    }

    default:
      return state;
  }
};

export default ToDoListReducer;
