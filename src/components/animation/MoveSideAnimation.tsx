import ReactVisibilitySensor from "react-visibility-sensor"

const MoveSideAnimation = ({ children }: { children: JSX.Element[] | JSX.Element | string }) => {
  return (
    <ReactVisibilitySensor
      partialVisibility
    >
      {({isVisible}: { isVisible: boolean }) => (
        <div className={`w-fit an-move-side-fade ${isVisible ? "an-active" : ""}`}>
          {children}
        </div>
      )}
    </ReactVisibilitySensor>
  )
}

export default MoveSideAnimation