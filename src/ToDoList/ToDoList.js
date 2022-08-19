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
  ChangeThemeAction,
  DeleteTaskAction,
  DoneTaskAction,
} from "../redux/actions/ToDoListAction";
import { arrTheme } from "../themes/ThemeManager";
class ToDoList extends Component {
  state = {
    taskName: "",
  };
  renderTaskTodo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th>{task.taskName}</Th>
            <Th className="text-end">
              <Button className="ms-2">
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
      <div>
        <ThemeProvider theme={this.props.ThemeDefault}>
          <Container>
            <Dropdown onChange={(event)=>{
              let {value} = event.target
              this.props.dispatch(ChangeThemeAction(value));
            }}>
              {this.renderTheme()}
            </Dropdown>

            <Heading3 className="fw-bold">To Do List</Heading3>
            <TextField
              label="Task Name"
              name="taskName"
              className="w-75"
              onChange={(event) => {
                this.setState({
                  taskName: event.target.value,
                });
              }}
            />
            <Button
              className="ms-2"
              onClick={() => {
                let { taskName } = this.state;

                let newTask = {
                  id: Date.now,
                  taskName: taskName,
                  done: false,
                };
                this.props.dispatch(AddTaskAction(newTask));
              }}
            >
              <i className="fa fa-plus"> Add Task</i>
            </Button>
            <Button className="ms-2">
              <i className="fa fa-upload"> Update Task</i>
            </Button>
            <hr />

            <Heading3 className="fw-bold">Task To Do</Heading3>
            <Table>
              <Thead>{this.renderTaskTodo()}</Thead>
            </Table>

            <Heading3 className="fw-bold">Task Complete</Heading3>
            <Table>
              <Thead>{this.renderTaskCompleted()}</Thead>
            </Table>
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ThemeDefault: state.ToDoListReducer.ThemeDefault,
    taskList: state.ToDoListReducer.taskList,
  };
};
export default connect(mapStateToProps)(ToDoList);
