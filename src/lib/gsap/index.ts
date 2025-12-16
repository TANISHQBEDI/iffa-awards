import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;
const RECIPROCAL_GR = 1 / GOLDEN_RATIO;
const DURATION = RECIPROCAL_GR;

gsap.config({
    autoSleep: 60,
    nullTargetWarn: false,
})

gsap.defaults({
    duration: DURATION,
})

export { gsap, DURATION, GOLDEN_RATIO, SplitText, ScrollTrigger };