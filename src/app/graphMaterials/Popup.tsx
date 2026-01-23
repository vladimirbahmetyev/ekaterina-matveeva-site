"use client";

import { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Image from "next/image";
import {
  PopupContext,
  registeredPopups,
} from "@/app/graphMaterials/MaterialsPopupProvider";

export function Popup({
  children,
  popupId,
}: {
  children: React.ReactNode;
  popupId: registeredPopups;
}) {
  const { closePopup, isOpen } = useContext(PopupContext);
  const handlePopupContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      in={isOpen(popupId)}
      timeout={300}
      classNames="popup"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className="content fixed h-screen w-screen bg-[#00000080] top-0 left-0 justify-center flex pt-20"
        onClick={() => closePopup(popupId)}
      >
        <Image
          src="/svg/close.svg"
          alt="close"
          onClick={() => closePopup(popupId)}
          width={60}
          height={60}
          className="absolute top-2 right-2 cursor-pointer"
        />
        <div
          className="bg-white w-9/10 p-5 h-8/10 rounded-xl"
          onClick={handlePopupContentClick}
        >
          {children}
        </div>
      </div>
    </CSSTransition>
  );
}
