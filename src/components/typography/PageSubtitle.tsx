import { TypeAnimation } from 'react-type-animation'
import ReactVisibilitySensor from 'react-visibility-sensor'

const PageSubtitle = ({ text }: { text: string }) => {
  return (
    <ReactVisibilitySensor
      partialVisibility
    >
      {({ isVisible }: { isVisible: boolean }) => (
        <h2 className='min-h-1 min-w-2 text-center'>
          {isVisible ?
          <TypeAnimation
            role='heading'
            sequence={[
              text,
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-3xl text-gray-300 text-center"
            
          // style={{ fontSize: '3rem', display: 'inline-block', fontWeight: "bold", textTransform: "uppercase", color: "#00f8f8" }}
          // repeat={Infinity}
          /> 
          : null}
        </h2>
      )}

    </ReactVisibilitySensor>
  )
}

export default PageSubtitle