import {
  FaReact,
  FaNodeJs,
  FaChartBar,
  FaDatabase,
  FaBrain,
  FaCog,
  FaCloud,
  FaLine,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiN8N, SiSupabase } from "react-icons/si";

const techIcons = {
  React: FaReact,
  TailwindCSS: SiTailwindcss,
  Nodejs: FaNodeJs,
  MySQL: SiMysql,
  Chart: FaChartBar,
  RAG: FaBrain,
  n8n: SiN8N,
  Supabase: SiSupabase,
  LINE: FaLine,
};

const projects = [
  {
    image: "e-com.png",
    category: "FULL-STACK",
    title: "Gaming Gear E-Commerce",
    description:
      "แพลตฟอร์ม E-Commerce สำหรับอุปกรณ์เกมมิ่ง รองรับการจัดการสินค้า ตะกร้าสินค้า การชำระเงิน โปรโมชั่น และสิทธิ์การเข้าถึงตามบทบาทผู้ใช้",
    tech: [
      { label: "C#", icon: FaCog },
      { label: "ASP.NET Core", icon: FaCog },
      { label: "Tailwind CSS", icon: techIcons.TailwindCSS },
      { label: "MySQL", icon: techIcons.MySQL },
    ],
    github: "https://github.com/ThanapoomWi/gaming-gear",
  },
  {
    image: "dashboard.png",
    category: "DASHBOARD",
    title: "Towing Service Dashboard",
    description:
      "แดชบอร์ดสำหรับจัดการงานบริการรถลากและแสดงข้อมูลสำคัญผ่านอินเทอร์เฟซที่สะอาดและใช้งานง่าย",
    tech: [
      { label: "React", icon: techIcons.React },
      { label: "Tailwind CSS", icon: techIcons.TailwindCSS },
      { label: "Rechart.JS", icon: techIcons.Chart },
      { label: "Postman", icon: FaCloud },
      { label: "Git", icon: FaCog }
    ],
    github: "https://kketsaraporn.github.io/SlideMeAdmin/",
  },
  {
    image: "pos.png",
    category: "POS",
    title: "POS System",
    description:
      "ระบบ POS สำหรับร้านอาหารที่ช่วยให้การจัดการคำสั่งซื้อ การชำระเงิน และการจัดการเมนูเป็นเรื่องง่ายและมีประสิทธิภาพ",
    tech: [
      { label: "React", icon: techIcons.React },
      { label: "Tailwind CSS", icon: techIcons.TailwindCSS },
      { label: "Node.js", icon: techIcons.Nodejs },
      { label: "MySQL", icon: techIcons.MySQL },
      { label: "Postman", icon: FaCloud },
      { label: "Git", icon: FaCog }
    ],
    github: "https://pos-system-theta-six.vercel.app/",
  },
  {
    image: "project3img.png",
    category: "FRONT-END",
    title: "Single-Page Front-End Project",
    description:
      "โปรเจกต์ที่ผมใช้ฝึกสร้าง Single-Page Application ด้วย React และ Tailwind CSS พร้อมการเชื่อมต่อกับ API และการจัดการสถานะของแอปพลิเคชัน",
    tech: [
      { label: "React", icon: techIcons.React },
      { label: "Tailwind CSS", icon: techIcons.TailwindCSS },
    ],
    github: "https://thanapoomwi.github.io/Clipboard/",
  },
  {
    image: "project4img.png",
    category: "FRONT-END",
    title: "Sunnyshine Front-End Project",
    description:
      "หน้าเว็บที่ผมสร้างขึ้นเพื่อฝึกการออกแบบและพัฒนา Front-End ด้วย React และ Tailwind CSS โดยเน้นการสร้าง UI ที่สวยงามและตอบสนองต่อผู้ใช้",
    tech: [
      { label: "React", icon: techIcons.React },
      { label: "Tailwind CSS", icon: techIcons.TailwindCSS },
    ],
    github: "https://thanapoomwi.github.io/sunnyside/",
  },
  {
    image: "exchange.png",
    category: "FRONT-END",
    title: "Currency Exchange Rate",
    description:
      "โปรเจกต์ที่ผมสร้างขึ้นเพื่อฝึกการดึงข้อมูลอัตราแลกเปลี่ยนสกุลเงินจาก API และแสดงผลในรูปแบบที่เข้าใจง่าย",
    tech: [
      { label: "JavaScript", icon: FaCog },
      { label: "HTML", icon: FaCog },
      { label: "CSS", icon: FaCog },
      { label: "API", icon: FaCloud },
    ],
    github: "https://thanapoomwi.github.io/moneyExchange/",
  }
];

export default projects;