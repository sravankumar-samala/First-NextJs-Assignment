import { v4 as uuid } from "uuid";

const curouselButtonsData = [
    {
      id: uuid(),
      direction: "left",
      imageUrl:
        "https://res.cloudinary.com/dwddin0nz/image/upload/v1711463416/Vector-backward_fdycs1.png",
      altText: "backward button",
    },
    {
      id: uuid(),
      direction: "right",
      imageUrl:
        "https://res.cloudinary.com/dwddin0nz/image/upload/v1711463432/Vector-forward_uqoh8s.png",
      altText: "forward button",
    },
];
  
export default curouselButtonsData