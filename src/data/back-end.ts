import type { skillType } from "@/types/skillsTypes";
const backEndSkills: skillType[] = [
  {
    name: "C# ASP.NET MVC",
    img: new URL("@/assets/csharp-original.svg", import.meta.url).href,
  },
  {
    name: "PHP & phpMyAdmin",
    img: new URL("@/assets/php-original.svg", import.meta.url).href,
  },
  {
    name: "Laravel (API)",
    img: new URL("@/assets/laravel-original.svg", import.meta.url).href,
  },
  {
    name: "Node.js (API)",
    img: new URL("@/assets/nodejs-original.svg", import.meta.url).href,
  },
  {
    name: "MSSQL",
    img: new URL("@/assets/sqldeveloper-original.svg", import.meta.url).href,
  },
];
export default backEndSkills;
