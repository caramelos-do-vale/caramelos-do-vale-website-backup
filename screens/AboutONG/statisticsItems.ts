import { mainInfo } from "@/constants/mainInfo";

export const statisticsItems = [
  {
    icon: "🏠",
    data: mainInfo.adoptions,
    title: "Adoções",
    description: "Cães encontraram um lar",
  },
  {
    icon: "🐾",
    data: mainInfo.rescues,
    title: "Resgates",
    description: "Animais salvos desde 2022",
  },
  {
    icon: "❤️",
    data: mainInfo.inCare,
    title: "Sob nossos cuidados",
    description: "Animais em lares temporários agora",
  },
];
