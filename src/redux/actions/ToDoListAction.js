import {
  ADD_TASK,
  DONE_TASK,
  DELETE_TASK,
  CHANGE_THEME,
} from "../types/ToDoListType";

export const AddTaskAction = (newTask) => {
  return {
    type: ADD_TASK,
    newTask,
  };
};

export const DoneTaskAction = (taskId) => {
  return {
    type: DONE_TASK,
    taskId,
  };
};

export const DeleteTaskAction = (taskId) => {
  return {
    type: DELETE_TASK,
    taskId,
  };
};

export const ChangeThemeAction = (themeId) => {
  return {
    type: CHANGE_THEME,
    themeId,
  };
};
