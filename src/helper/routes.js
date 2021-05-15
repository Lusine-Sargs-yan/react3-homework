import ColorPicker from "../pages/colorPicker/ColorPicker";
import Home from "../pages/Home";
import MemoryGame from "../pages/memoryGame/MemoryGame";
import Cities from "../pages/weather/Cities";
import Weather from "../pages/weather/Weather";


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
  {
    route: "/cities",
    component: Cities,
    title: 'Cities'
  },
  {
    route: "/cities/:cityName",
    component: Weather,
    title: 'Weather'
  },

 
];