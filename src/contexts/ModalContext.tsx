import React from "react";
import { JsxElement } from "typescript";

interface ModalContent {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
  content: JSX.Element;
  InsertContent: (content: JSX.Element) => void;
}
interface ModalProviderProps {
  children: React.ReactNode;
}
export const ModalContext = React.createContext({} as ModalContent);
export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [content, setContent] = React.useState(<></>);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function InsertContent(content: JSX.Element) {
    setContent(content);
  }
  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, isOpen, content, InsertContent }}
    >
      {children}
    </ModalContext.Provider>
  );
};
