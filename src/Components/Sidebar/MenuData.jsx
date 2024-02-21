import menu1 from "../../assets/menu-1.png";
import menu2 from "../../assets/menu-2.png";
import menu3 from "../../assets/menu-3.png";
import menu4 from "../../assets/menu-4.png";
import menu5 from "../../assets/menu-5.png";
import menu6 from "../../assets/menu-6.png";
import menu7 from "../../assets/menu-7.png";
import menu8 from "../../assets/menu-8.png";
import menu9 from "../../assets/menu-9.png";
import vector from "../../assets/vector.png";
import colorVector from "../../assets/color-vector.png";

export const menu = [
  { id: 1, img: menu1, text: "Home", icon: vector },
  { id: 2, img: menu2, text: "My Courses", icon: vector },
  {
    id: 3,
    img: menu3,
    text: "My Learning",
    textb: "Journey",
    icon: vector,
    colorIcon: colorVector,
  },
  { id: 4, img: menu4, text: "Anonymous", textb: "Helpline", icon: vector },
  { id: 5, img: menu5, text: "Documents", icon: vector },
  { id: 6, img: menu6, text: "Training Library", icon: vector },
  { id: 7, img: menu7, text: "Settings", icon: vector },
];
export const bottomMenu = [
  { id: 8, img: menu8, text: "Help" },
  { id: 9, img: menu9, text: "Switch account" },
];
