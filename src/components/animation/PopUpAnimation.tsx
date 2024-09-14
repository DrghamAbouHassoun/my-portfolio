import ReactVisibilitySensor from "react-visibility-sensor"

const PopUpAnimation = ({ children }: { children: JSX.Element[] | JSX.Element | string }) => {
  return (
    <ReactVisibilitySensor
      partialVisibility
    >
      {({isVisible}: { isVisible: boolean }) => (
        <div className={`w-fit an-pop-up ${isVisible ? "an-active" : ""}`}>
          {children}
        </div>
      )}
    </ReactVisibilitySensor>
  )
}

export default PopUpAnimation