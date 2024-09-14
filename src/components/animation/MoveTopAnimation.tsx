import ReactVisibilitySensor from "react-visibility-sensor"

const MoveTopAnimation = ({ children }: { children: JSX.Element[] | JSX.Element | string }) => {
  return (
    <ReactVisibilitySensor
      partialVisibility
    >
      {({isVisible}: { isVisible: boolean }) => (
        <div className={`an-move-top-fade ${isVisible ? "an-active" : ""}`}>
          {children}
        </div>
      )}
    </ReactVisibilitySensor>
  )
}

export default MoveTopAnimation