import React, { useState } from "react";
import AddTask, { Task } from "../components/AddTask";
import TaskList from "../components/TaskList";
import ClearTasks from "../components/ClearTasks";
import "./Home.css";
import Header from "../components/Header";
import { IonContent, IonRow } from "@ionic/react";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { name: "Siivous", status: false },
    { name: "Treeni", status: false },
    { name: "Kauppa", status: true },
    { name: "Opiskelu", status: false },
    { name: "Roskat", status: true },
  ]);

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <>
      <Header title="Task Manager" />
      <IonContent className="ion-padding" scrollY={false}>
        <IonRow class="ion-justify-content-center ion-padding">
          <AddTask onAddTask={addTask} />
          <ClearTasks onClearTasks={clearTasks} />
        </IonRow>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </IonContent>
    </>
  );
};

export default Home;
