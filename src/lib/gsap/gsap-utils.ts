import { gsap } from '@/lib/gsap'

type HoverOptions = {
    target: Element
    onEnter: (target: Element) => gsap.core.Tween | gsap.core.Timeline | void
    onLeave: (target: Element) => gsap.core.Tween | gsap.core.Timeline | void
    enterEvent?: 'mouseenter' | 'mouseover'
    leaveEvent?: 'mouseleave' | 'mouseout'
}

export function setupGsapHover({
                                   target,
                                   onEnter,
                                   onLeave,
                                   enterEvent = 'mouseenter',
                                   leaveEvent = 'mouseleave',
                               }: HoverOptions) {
    const handleEnter = () => onEnter(target)
    const handleLeave = () => onLeave(target)

    target.addEventListener(enterEvent, handleEnter)
    target.addEventListener(leaveEvent, handleLeave)

    // return cleanup function
    return () => {
        target.removeEventListener(enterEvent, handleEnter)
        target.removeEventListener(leaveEvent, handleLeave)
    }
}
