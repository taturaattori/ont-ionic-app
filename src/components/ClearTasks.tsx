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
    <IonButton onClick={handleClearTasks} id="clear-button" size="small">
      Poista kaikki
    </IonButton>
  );
};

export default ClearTasks;
