import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import ReactDOM from "react-dom";
import { Button } from "../components/buttons/Button";
import { Xmark } from "../components/icons/Icons";
import { isEmpty } from "../helpers";

export type ModalProps = PropsWithChildren<{
  title?: string;
  confirm?: () => void;
  backgroundClose?: boolean;
  className?: string;
}>;

type GlobalModalContext = {
  showModal: (modalProps: ModalProps) => void;
  hideModal: () => void;
};

const initalState: GlobalModalContext = {
  showModal: () => {},
  hideModal: () => {},
};

const GlobalModalContext = createContext(initalState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

export const GlobalModal: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [modalProps, setModalProps] = useState<ModalProps>({});

  const showModal = (modalProps: ModalProps) => {
    setModalProps(modalProps);
  };

  const hideModal = () => {
    setModalProps({});
  };

  const dest = document.getElementById("modal")!;

  const renderComponent = () => {
    return dest
      ? ReactDOM.createPortal(
          <AnimatePresence>
            {!isEmpty(modalProps) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={clsx({
                  modal: true,
                  [`${modalProps.className}`]: modalProps.className,
                })}
                onClick={() =>
                  modalProps.backgroundClose ? hideModal() : null
                }>
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="modal__window"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}>
                  <button
                    className="transparent modal__close fs-12 color-white fw-600 flex ai-c mr-1 mb-1 hover-primary1"
                    onClick={hideModal}>
                    <Xmark className="w-2 h-a mr-1" />
                    Close
                  </button>
                  {modalProps.title && (
                    <div className="modal__header">
                      <h2>{modalProps.title}</h2>
                    </div>
                  )}
                  {modalProps.children && modalProps.children}
                  {modalProps.confirm && (
                    <div className="modal__footer mt-4 px-3 py-2 text-right">
                      <Button
                        className="button--grey button--outline"
                        onClick={hideModal}
                        label="Cancel"
                      />
                      <Button
                        className="button ml-1"
                        onClick={modalProps.confirm}
                        label="Confirm"
                      />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          dest
        )
      : null;
  };

  return (
    <GlobalModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {renderComponent()}
    </GlobalModalContext.Provider>
  );
};
