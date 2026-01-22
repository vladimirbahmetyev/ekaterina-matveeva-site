"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";

interface MaterialsPopupProvider {
  children: React.ReactNode;
}

interface Context {
  openPopup: (popupId: string) => void;
  closePopup: (popupId: string) => void;
  registerPopup: (popupId: string) => void;
  isOpen: (popupId: string) => boolean;
}

export const PopupContext = createContext<Context>({
  openPopup: () => {},
  closePopup: () => {},
  registerPopup: () => {},
  isOpen: () => false,
});

export function MaterialsPopupProvider({ children }: MaterialsPopupProvider) {
  const [popupState, setPopupState] = useState<Record<string, boolean>>({});

  const openPopup = (popupId: string) => {
    setPopupState({ ...popupState, [popupId]: true });
  };

  const closePopup = (popupId: string) =>
    setPopupState({ ...popupState, [popupId]: false });

  const registerPopup = (popupId: string) =>
    setPopupState({ ...popupState, [popupId]: true });

  const isOpen = (popupId: string) => popupState[popupId];

  useEffect(() => {
    if (Object.values(popupState).some((value) => !!value)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [popupState]);

  return (
    <PopupContext value={{ openPopup, closePopup, registerPopup, isOpen }}>
      {children}
    </PopupContext>
  );
}

export function Popup({
  children,
  popupId,
}: {
  children: React.ReactNode;
  popupId: string;
}) {
  const { registerPopup, closePopup, isOpen } = useContext(PopupContext);
  useEffect(() => {
    registerPopup(popupId);
  }, []);

  return (
    isOpen(popupId) && (
      <div className="absolute h-screen w-screen bg-[#00000080] top-0 left-0 justify-center flex">
        <Image
          src="/svg/close.svg"
          alt="close"
          onClick={() => closePopup(popupId)}
          width={60}
          height={60}
          className="absolute top-2 right-2 cursor-pointer"
        />
        <div className="bg-white w-8/10 p-10">{children}</div>
      </div>
    )
  );
}
