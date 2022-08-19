import {ADD_TASK} from "../types/ToDoListType";

export const AddTaskAction = newTask => {
    return {
        type: ADD_TASK,
        newTask
    }
}