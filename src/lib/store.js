import { configureStore, createSlice } from "@reduxjs/toolkit";

const defaultTasks = [
  { id: "1", title: "Build date picker", state: "TASK_INBOX" },
  { id: "2", title: "QA dropdown", state: "TASK_INBOX" },
  {
    id: "3",
    title: "Write schema for account avatar component",
    state: "TASK_INBOX",
  },
  { id: "4", title: "Review feature spec", state: "TASK_INBOX" },
  { id: "5", title: "Export logo", state: "TASK_INBOX" },
  { id: "6", title: "Fix bug in input error state", state: "TASK_INBOX" },
  {
    id: "7",
    title: "Draft monthly blog post to customers",
    state: "TASK_INBOX",
  },
  { id: "8", title: "Export projects to drive", state: "TASK_INBOX" },
];
const TaskBoxData = {
  tasks: defaultTasks,
  status: "idle",
  error: null,
};

const TasksSlice = createSlice({
  name: "taskbox",
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.tasks.findIndex((task) => task.id === id);
      if (task >= 0) {
        state.tasks[task].state = newTaskState;
      }
    },
  },
});

export const { updateTaskState } = TasksSlice.actions;

const store = configureStore({
  reducer: {
    taskbox: TasksSlice.reducer,
  },
});

export default store;
