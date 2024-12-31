import type { skillType } from "@/types/skillsTypes";

const frontEndSkills: skillType[] = [
  {
    name: "Html",
    img: new URL("@/assets/html5-plain.svg", import.meta.url).href,
  },
  {
    name: "CSS",
    img: new URL("@/assets/css3-original.svg", import.meta.url).href,
  },
  {
    name: "Javascript",
    img: new URL("@/assets/javascript-original.svg", import.meta.url).href,
  },
  {
    name: "jQuery",
    img: new URL("@/assets/jquery-original.svg", import.meta.url).href,
  },
  {
    name: "Vue.js",
    img: new URL("@/assets/vuejs-original.svg", import.meta.url).href,
  },
];

export default frontEndSkills;
