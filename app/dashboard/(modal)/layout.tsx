const ModalLayout: React.FC<Props> = ({ modal }) => (
  <div className="fixed inset-0 z-50 grid place-items-center bg-background/50 backdrop-blur">
    {modal}
  </div>
)

export default ModalLayout

interface Props {
  modal: Readonly<React.ReactNode>
}
