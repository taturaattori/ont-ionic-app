import React from "react";
import { IonButton } from "@ionic/react";
import "./ClearTasks.css";

interface ClearTasksProps {
  onClearTasks: () => void;
}

const ClearTasks: React.FC<ClearTasksProps> = ({ onClearTasks }) => {
  const handleClearTasks = () => {
    onClearTasks();
  };

  return (
    <IonButton onClick={handleClearTasks} id="clear-button">
      Clear all
    </IonButton>
  );
};

export default ClearTasks;
