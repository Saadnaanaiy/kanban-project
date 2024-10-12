import { useEffect, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import "./KanbanBoard.css"; // Custom CSS for styling

const ItemTypes = {
  CARD: "card",
};

const getRandomColor = () => {
  const colors = [
    "#FFB6C1", // Light Pink
    "#ADD8E6", // Light Blue
    "#90EE90", // Light Green
    "#FFFFE0", // Light Yellow
    "#FFCCCB", // Light Coral
    "#E6E6FA", // Lavender
    "#F0E68C", // Khaki
    "#E0FFFF", // Light Cyan
    "#F5DEB3", // Wheat
    "#FFFACD", // Lemon Chiffon
    "#D8BFD8", // Thistle
    "#FFDEAD", // Navajo White
    "#FFC0CB", // Pink
    "#FAFAD2", // Light Goldenrod Yellow
    "#EEDD82", // Pale Goldenrod
    "#B0E0E6", // Powder Blue
    "#FFE4E1", // Misty Rose
    "#F0FFF0", // Honeydew
    "#FFF5EE", // Seashell
    "#D3FFCE", // Light Moss Green
    "#F0F8FF", // Alice Blue
    "#FFFAF0", // Floral White
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

const TaskCard = ({ task, index, columnIndex, moveTask, deleteTask }) => {
  const [{ isDragging }, ref] = useDrag({
    type: ItemTypes.CARD,
    item: { index, columnIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const cardStyle = {
    opacity: isDragging ? 0.4 : 1, // Apply effect while dragging
    transform: isDragging ? "scale(1.05)" : "scale(1)",
    transition: "transform 0.2s ease",
    cursor: "move",
    backgroundColor: task.color, // Apply the task's background color
  };

  const handleDelete = () => {
    deleteTask(index, columnIndex);
  };

  return (
    <Card ref={ref} style={cardStyle} className="mb-3 shadow-sm">
      <Card.Body>
        <div>
          <strong>{task.text}</strong>
          <span
            style={{
              marginLeft: "10px",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            [{task.priority}]
          </span>
          <div style={{ fontSize: "0.8em", color: "#555" }}>
            Created at: {formatTimestamp(task.timestamp)}
          </div>
          <Button
            variant="danger"
            size="sm"
            onClick={handleDelete}
            style={{ marginTop: "10px" }}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const Column = ({ title, tasks, moveTask, columnIndex, deleteTask }) => {
  const [, ref] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => moveTask(item.index, item.columnIndex, columnIndex),
  });

  return (
    <Col ref={ref} className="kanban-column">
      <h5 className="text-center mb-3">{title}</h5>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          index={index}
          columnIndex={columnIndex}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />
      ))}
    </Col>
  );
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState([
    { title: "To Do", tasks: [] },
    { title: "In Progress", tasks: [] },
    { title: "Done", tasks: [] },
  ]);

  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Low");

  useEffect(() => {
    const storedColumns = JSON.parse(localStorage.getItem("task")) || [
      { title: "To Do", tasks: [] },
      { title: "In Progress", tasks: [] },
      { title: "Done", tasks: [] },
    ];
    setColumns(storedColumns);
  }, []);

  const moveTask = (taskIndex, sourceColumnIndex, targetColumnIndex) => {
    const newColumns = [...columns];

    // Remove task from source column
    const [movedTask] = newColumns[sourceColumnIndex].tasks.splice(
      taskIndex,
      1
    );

    // Add task to target column
    newColumns[targetColumnIndex].tasks.push(movedTask);
    localStorage.setItem("task", JSON.stringify(newColumns)); // Save updated columns
    setColumns(newColumns);
  };

  const addTask = () => {
    if (newTask.trim()) {
      const newColumns = [...columns];
      newColumns[0].tasks.push({
        text: newTask,
        color: getRandomColor(),
        priority: priority,
        timestamp: Date.now(), // Add the current timestamp
      });
      localStorage.setItem("task", JSON.stringify(newColumns)); // Save updated columns
      setColumns(newColumns);
      setNewTask(""); // Clear input after adding the task
      setPriority("Low"); // Reset priority to default
    }
  };

  const deleteTask = (taskIndex, columnIndex) => {
    const newColumns = [...columns];
    newColumns[columnIndex].tasks.splice(taskIndex, 1); // Remove the task
    localStorage.setItem("task", JSON.stringify(newColumns)); // Save updated columns
    setColumns(newColumns);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Container style={{ marginTop: "123px" }} fluid>
        <Row className="mb-4">
          <Col>
            <h2>Task Management</h2>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Form.Group className="mb-3" controlId="formNewTask">
                <Form.Control
                  type="text"
                  placeholder="Enter a new task"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPriority">
                <Form.Label>Priority</Form.Label>
                <Form.Control
                  as="select"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="Lowest">Lowest</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Highest">Highest</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" onClick={addTask}>
                Add Task
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="kanban-board">
          {columns.map((column, index) => (
            <Column
              key={index}
              title={column.title}
              tasks={column.tasks}
              columnIndex={index}
              moveTask={moveTask}
              deleteTask={deleteTask}
            />
          ))}
        </Row>
      </Container>
    </DndProvider>
  );
};

export default KanbanBoard;
