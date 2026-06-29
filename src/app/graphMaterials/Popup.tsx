"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Image from "next/image";
import {
  PopupContext,
  registeredPopups,
} from "@/app/graphMaterials/MaterialsPopupProvider";

export function Popup({
  children,
  popupId,
  classNames,
}: {
  children: React.ReactNode;
  popupId: registeredPopups;
  classNames?: string;
}) {
  const { closePopup, isOpen } = useContext(PopupContext);
  const handlePopupContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const nodeRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const el = popupRef.current;
    if (!el) {
      return;
    }
    const observer = new ResizeObserver(() => {
      if (isOverflow && el?.scrollHeight <= el?.clientHeight) {
        setIsOverflow(false);
      } else {
        setIsOverflow(el?.scrollHeight > el?.clientHeight);
      }
    });

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [isOpen]);

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
        className={`content fixed h-screen w-screen bg-[#00000080] top-0 left-0 justify-center flex pt-20 z-100 ${isOverflow ? "items-stretch" : "items-center"} lg:items-stretch`}
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
          className={`bg-white p-5 rounded-xl max-w-9/10 aspect-1213/900 max-h-9/10 ${isOverflow ? "overflow-scroll" : ""} lg:overflow-scroll ${classNames ? classNames : ""}`}
          onClick={handlePopupContentClick}
          ref={popupRef}
        >
          {children}
        </div>
      </div>
    </CSSTransition>
  );
}
