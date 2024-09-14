import { BaseHTMLAttributes, useEffect, useRef, useState } from 'react'
import SeeMoreButton from '../components/Buttons/SeeMoreButton';
import PageSubtitle from '../components/typography/PageSubtitle';

interface PageContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  pageTitle: string;
  pageSubtitle?: string;
}

const PageContainer = (props: PageContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hideButton, setHideButton] = useState<boolean>(false);

  const handleClick = () => {
    ref.current?.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  }

  useEffect(() => {
    console.log(ref.current?.scrollTop);

    ref.current?.addEventListener("wheel", () => {
      // ref.current?.scrollTo({ top: ref.current?.scrollTop + event.deltaY * event.DOM_DELTA_PAGE, behavior: "smooth" })
      if (ref.current?.scrollTop && ref.current?.scrollTop > 20) {
        setHideButton(true);
      } else {
        setHideButton(false);
      }
    })
  }, [])

  return (
    <div ref={ref || undefined} className="h-[100vh] overflow-x-auto scroll-container p-4 pb-[100px]">
      <div className="relative flex justify-center items-center h-[100vh] flex-col">
        <h1 className="text-5xl font-bold mb-8">{props.pageTitle}</h1>
        {props.pageSubtitle ?
          <PageSubtitle text={props.pageSubtitle} />
          : null}
        <div className={`absolute bottom-[30vh] flex justify-center items-center text-center transition-opacity duration-700 ${hideButton ? "opacity-0" : "opacity-100"}`}>
          <SeeMoreButton className='' onClick={() => handleClick()} />
        </div>
      </div>
      {props.children}
    </div>
  )
}

export default PageContainer