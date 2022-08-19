import { ADD_TASK, DONE_TASK,DELETE_TASK } from "../types/ToDoListType";

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

export const DeleteTaskAction = taskId => {
    return {
        type: DELETE_TASK,
        taskId
    }
}


