"use client";
import { createContext, useCallback, useEffect, useState } from "react";

interface MaterialsPopupProvider {
  children: React.ReactNode;
}

interface Context {
  openPopup: (popupId: registeredPopups) => void;
  closePopup: (popupId: registeredPopups) => void;
  isOpen: (popupId: registeredPopups) => boolean;
}

export type registeredPopups =
  | "alex"
  | "wings"
  | "presentation_jul"
  | "presentation_massage"
  | "presentation_conference"
  | "presentation_smm"
  | "commercial"
  | "speakers"
  | "languageSchool"
  | "lips"
  | "vk";

export const PopupContext = createContext<Context>({
  openPopup: () => {},
  closePopup: () => {},
  isOpen: () => false,
});

export function MaterialsPopupProvider({ children }: MaterialsPopupProvider) {
  const [popupState, setPopupState] = useState<Record<string, boolean>>({});

  const openPopup = useCallback(
    (popupId: registeredPopups) =>
      setPopupState((prevState) => ({ ...prevState, [popupId]: true })),
    [setPopupState],
  );

  const closePopup = useCallback(
    (popupId: registeredPopups) =>
      setPopupState((prevState) => ({ ...prevState, [popupId]: false })),
    [setPopupState],
  );

  const isOpen = (popupId: registeredPopups) => popupState[popupId];

  useEffect(() => {
    if (Object.values(popupState).some((value) => value)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [popupState]);

  return (
    <PopupContext value={{ openPopup, closePopup, isOpen }}>
      {children}
    </PopupContext>
  );
}
