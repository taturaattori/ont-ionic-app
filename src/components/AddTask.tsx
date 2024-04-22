import React, { useState } from "react";
import {
  IonButton,
  IonButtons,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import "./AddTask.css";

export interface Task {
  name: string;
  status: boolean;
}

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      const newTask: Task = { name: task, status: false };
      onAddTask(newTask);
      setTask("");
      setModalVisible(false);
    }
  };

  return (
    <>
      <IonModal
        id="addtask-modal"
        isOpen={modalVisible}
        onWillDismiss={() => setModalVisible(false)}
        keyboardClose={false}
      >
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton onClick={() => setModalVisible(false)} id="add-buttons">
              Cancel
            </IonButton>
          </IonButtons>
          <IonTitle>New Task</IonTitle>
        </IonToolbar>
        <IonItem>
          <IonInput
            placeholder="Enter task"
            value={task}
            onIonChange={(e) => setTask(e.detail.value!)}
          />
        </IonItem>
        <IonButton
          onClick={addTask}
          size="small"
          shape="round"
          id="add-buttons"
        >
          Add Task
        </IonButton>
      </IonModal>
      <IonButton onClick={() => setModalVisible(true)} id="add-buttons">
        Add a task
      </IonButton>
    </>
  );
};

export default AddTask;
