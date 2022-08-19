import { ADD_TASK, DONE_TASK } from "../types/ToDoListType";

export const AddTaskAction = (newTask) => {
  return {
    type: ADD_TASK,
    newTask,
  };
};

export const DoneTaskAction = (taskId) => {
  return {
    type: DONE_TASK,
    taskId
  };
};
