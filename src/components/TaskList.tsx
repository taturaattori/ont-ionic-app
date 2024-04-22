import React from "react";
import {
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonContent,
} from "@ionic/react";
import { trashOutline, checkboxOutline, checkboxSharp } from "ionicons/icons";
import "./TaskList.css";

interface Task {
  name: string;
  status: boolean;
}

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  const toggleTaskStatus = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = !updatedTasks[index].status;
    setTasks(updatedTasks);
  };
  const handleDelete = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <IonContent>
      <IonList>
        {tasks.map((item, index) => (
          <IonItem key={index} id="list-item">
            <IonButton
              onClick={() => toggleTaskStatus(index)}
              fill="clear"
              color={"dark"}
            >
              <IonIcon
                icon={item.status ? checkboxSharp : checkboxOutline}
                size="small"
              />
            </IonButton>
            <IonLabel id="item-name">{item.name}</IonLabel>
            <IonButton
              onClick={() => handleDelete(index)}
              fill="clear"
              color={"dark"}
            >
              <IonIcon icon={trashOutline} size="small" />
            </IonButton>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  );
};

export default TaskList;
