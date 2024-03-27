import { v4 as uuid } from "uuid";

const ticketItemData = [
  {
    id: uuid(),
    imageUrl:
      "https://res.cloudinary.com/dwddin0nz/image/upload/v1711517339/Hexleap-ticket-1_qug5sg.png",
    destination: "Las Vegas Aviators",
    dateTime: "OCT 15 | SUN | 4:30 PM",
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    buttonText: "Take Flight Collection",
  },
  {
    id: uuid(),
    imageUrl:
      "https://res.cloudinary.com/dwddin0nz/image/upload/v1711532339/Hexleap-ticket-2_1_rdmyft.png",
    destination: "Sacramento River Cats",
    dateTime: "OCT 15 | SUN | 4:30 PM",
    address: "Sutter Health Park, Sacramento, California",
    buttonText: "Orange Collection",
  },
  {
    id: uuid(),
    imageUrl:
      "https://res.cloudinary.com/dwddin0nz/image/upload/v1711517339/Hexleap-ticket-1_qug5sg.png",
    destination: "Las Vegas Aviators",
    dateTime: "OCT 15 | SUN | 4:30 PM",
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    buttonText: "Take Flight Collection",
  },
];

export default ticketItemData;
