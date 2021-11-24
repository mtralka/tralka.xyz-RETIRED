import { useRef, useState } from "react";
import Icon from "./Icon";
export default function HorizontalContainer({children,...props}) {

    const container = useRef();
    const [offset, setOffset] = useState(0);

    const handleShift = (sign) => {
        const scrollWidth = container.current.scrollWidth
        const clientWidth = container.current.clientWidth
        const childWidth = container.current.firstChild.clientWidth
        const pxSpacing = 24
       
        // less than one child width remaining on left side
        // translate remaining distance
        if (Math.abs(offset) < childWidth && offset < 0){
            setOffset((prev) => prev + Math.abs(offset))
            return
        }

        // already at left side
        // do not translate
        if (offset + (sign * childWidth) > 0){
            return
        }

        // container moving left
        // translate child width
        if (offset + (sign * childWidth) < scrollWidth && sign === 1){
            setOffset((prev) => prev + (sign * childWidth) + pxSpacing)
            return
        }

        // min of remaining right distance or child width
        const distToScroll = Math.min((scrollWidth - clientWidth - Math.abs(offset) - pxSpacing), container.current.firstChild.clientWidth)
        const scrollChange = offset + (sign * distToScroll) > 0 ? 0 : offset + (sign * distToScroll) - pxSpacing

        setOffset(scrollChange )
    }

    const style = {
        "transform" : `translateX(${offset || 0}px)`,
        "transition" : "all 300ms ease-in-out 0s"
    }
  
    return (
      <>
        <div display="flex" flex="col" justify="items-center">
            {/* <div display="flex" justify="evenly items-center" space="x-3" align="self-end" p="b-8 r-8">
                <p display="flex" align="items-center">
                    See all
                </p>
                <div w="min-10" h="min-10" p="1" onClick={() => handleShift(1)}>
                    <Icon name="bi:arrow-left-circle-fill" w="full" h="full"   />
                </div>
                <div w="min-10" h="min-10" p="1" onClick={() => handleShift(-1)}>
                    <Icon name="bi:arrow-right-circle-fill" w="full" h="full"  />
                </div>
            </div>  */}
            <div overflow="hidden">
                <div ref={container} style={style} w="max-full full"  display="flex" flex="row" space="x-6">
                    {children}
                </div>
            </div>
            <div
                display="flex"
                align="items-center"
                justify="center"
                m="t-10"
                space="x-6 md:x-2"
            >
                <button
                    w="min-10" h="min-10"
                    aria-label="Scroll left"
                    onClick={() => handleShift(1)}
                >
                    <Icon name="ic:outline-keyboard-arrow-left" w="full" h="full"   />
                </button>

                <button
                    w="min-10" h="min-10"
                    aria-label="Scroll right"
                    onClick={() => handleShift(-1)}
                >
                    <Icon name="ic:outline-keyboard-arrow-right" w="full" h="full"  />       
                </button>
            </div>
        </div>
      </>
    );
  }
  