import React, { Component } from "react";
import { Container } from "../Components/Container";
import { Dropdown } from "../Components/Dropdown";
import { Heading3 } from "../Components/Heading";
import { TextField } from "../Components/TextField";
import { Button } from "../Components/Button";
import { Table, Thead, Th, Tr } from "../Components/Table";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import {
  AddTaskAction,
  DeleteTaskAction,
  DoneTaskAction,
  ChangeThemeAction,
  EditTaskAction,
  UpdateTaskAction,
} from "../redux/actions/ToDoListAction";
import { arrTheme } from "../themes/ThemeManager";
class ToDoList extends Component {
  state = {
    taskName: "",
    disable: true,
  };

  renderTaskToDo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th>{task.taskName}</Th>
            <Th className="text-end">
              <Button
                className="ms-2"
                onClick={() => {
                  this.setState(
                    {
                      disabled: false,
                    },
                    () => {
                      this.props.dispatch(EditTaskAction(task));
                    }
                  );
                }}
              >
                <i className="fa fa-edit"></i>
              </Button>

              <Button
                className="ms-2"
                onClick={() => {
                  this.props.dispatch(DoneTaskAction(task.id));
                }}
              >
                <i className="fa fa-check"></i>
              </Button>

              <Button
                className="ms-2"
                onClick={() => {
                  this.props.dispatch(DeleteTaskAction(task.id));
                }}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  renderTaskCompleted = () => {
    return this.props.taskList
      .filter((task) => task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th>{task.taskName}</Th>
            <Th className="text-end">
              <Button
                className="ms-2"
                onClick={() => {
                  this.props.dispatch(DeleteTaskAction(task.id));
                }}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  renderTheme = () => {
    return arrTheme.map((theme, index) => {
      return (
        <option value={theme.id} key={index}>
          {theme.name}
        </option>
      );
    });
  };

  render() {
    return (
      <ThemeProvider theme={this.props.ThemeDefault}>
        <Container className="w-50">
          <Dropdown
            onChange={(event) => {
              let { value } = event.target;

              // dispatch value lên reducer
              this.props.dispatch(ChangeThemeAction(value));
            }}
          >
            {this.renderTheme()}
          </Dropdown>
          <Heading3>To Do List</Heading3>
          <TextField
            value={this.state.taskName}
            name="taskName"
            label="Task name"
            className="w-50"
            onChange={(event) => {
              this.setState({
                taskName: event.target.value,
              });
            }}
          />
          <Button
            className="ms-2"
            onClick={() => {
              // Lấy thông tin người dùng nhập vào từ input
              let { taskName } = this.state;
              // Tạo ra 1 task object
              let newtask = {
                id: Date.now(),
                taskName: taskName,
                done: false,
              };
              // Đưa task object lên redux thông qua phương thức dispatch
              this.props.dispatch(AddTaskAction(newtask));
            }}
          >
            <i className="fa fa-plus"> Add Task</i>
          </Button>

          {this.state.disabled ? (
            <Button
              className="ms-2"
              disabled
              onClick={() => {
                this.props.dispatch(UpdateTaskAction(this.state.taskName));
              }}
            >
              <i className="fa fa-upload"> Update Task</i>
            </Button>
          ) : (
            <Button
              className="ms-2"
              onClick={() => {
                let { taskName } = this.state;
                this.setState(
                  {
                    disabled: true,
                    taskName: "",
                  },
                  () => {
                    this.props.dispatch(UpdateTaskAction(taskName));
                  }
                );
              }}
            >
              <i className="fa fa-upload"></i>
              Update Task
            </Button>
          )}

          <hr />
          <Heading3>Task To Do</Heading3>
          <Table>
            <Thead>{this.renderTaskToDo()}</Thead>
          </Table>

          <Heading3>Task Complete</Heading3>
          <Table>
            <Thead>{this.renderTaskCompleted()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }

  //Đây là lifecycle trả về props cũ và state cũ của component trước khi render (lifecycle này chạy sau render)
  componentDidUpdate(prevProps, prevState) {
    //So sánh nếu như props trước đó (taskEdit trước khác taskEdit hiện tại thì mình mới setState)
    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      this.setState(
        {
          taskName: this.props.taskEdit.taskName,
        },
        () => {
          console.log(this.state);
        }
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    ThemeDefault: state.ToDoListReducer.ThemeDefault,
    taskList: state.ToDoListReducer.taskList,
    taskEdit: state.ToDoListReducer.taskEdit,
  };
};
export default connect(mapStateToProps)(ToDoList);
