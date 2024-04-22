import React from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import "./Header.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar mode="ios">
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
