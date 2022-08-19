import React, { Component } from "react";
import { Container } from "../Components/Container";
import { Dropdown } from "../Components/Dropdown";
import { Heading3 } from "../Components/Heading";
import { TextField } from "../Components/TextField";
import { Button } from "../Components/Button";
import { Table, Thead, Th, Tr } from "../Components/Table";
export default class ToDoList extends Component {
  render() {
    return (
      <div>
        <Container>
          <Dropdown>
            <option value="1">Dark Theme</option>
            <option value="2">Light Theme</option>
            <option value="1">Primary Theme</option>
          </Dropdown>

          <Heading3 className="fw-bold">To Do List</Heading3>
          <TextField label="Task Name" className="w-75"></TextField>
          <Button className="ms-2">
            <i className="fa fa-plus"> Add Task</i>
          </Button>
          <Button className="ms-2">
            <i className="fa fa-upload"> Update Task</i>
          </Button>
          <hr />

          <Heading3 className="fw-bold">Task To Do</Heading3>
          <Table>
            <Thead>
              <Tr>
                <Th>Learn VueJS</Th>
                <Th className="text-end">
                  <Button className="ms-2">
                    <i className="fa fa-edit"></i>
                  </Button>

                  <Button className="ms-2">
                    <i className="fa fa-check"></i>
                  </Button>

                  <Button className="ms-2">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>

              <Tr>
                <Th>Learn Angular</Th>
                <Th className="text-end">
                  <Button className="ms-2">
                    <i className="fa fa-edit"></i>
                  </Button>

                  <Button className="ms-2">
                    <i className="fa fa-check"></i>
                  </Button>

                  <Button className="ms-2">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
            </Thead>
          </Table>

          <Heading3 className="fw-bold">Task Complete</Heading3>
          <Table>
            <Thead>
              <Tr>
                <Th>Learn ReactJS</Th>
                <Th className="text-end">
                  <Button className="ms-2">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>

              <Tr>
                <Th>Learn NodeJS</Th>
                <Th className="text-end">
                  <Button className="ms-2">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
            </Thead>
          </Table>
        </Container>
      </div>
    );
  }
}
