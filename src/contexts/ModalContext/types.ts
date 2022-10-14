export interface ModalContextProps {
  toggleOpen: (modalRef: string) => void;
  openList: Record<string, boolean>;
}
