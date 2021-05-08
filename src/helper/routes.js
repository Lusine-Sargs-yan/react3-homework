import ColorPicker from "../pages/colorPicker/ColorPicker";
import Home from "../pages/Home";
import MemoryGame from "../pages/memoryGame/MemoryGame";


export const Routes = [
  {
    route: "/",
    component: Home,
    title: 'Home'
  },
  {
    route: "/memory",
    component: MemoryGame,
    title: 'Memory Game'
  },
  {
    route: "/color",
    component: ColorPicker,
    title: 'Color Picker'
  },

 
];