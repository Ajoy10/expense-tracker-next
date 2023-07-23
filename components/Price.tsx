import { IconArrowBadgeUpFilled } from "@tabler/icons-react";

type PriceProps = {
  price: number;
  className?: string;
};

export const Price = (props: PriceProps) => {
  return (
    <div
      className={
        (props.price >= 0 ? " text-white" : "text-cinnabar-500") +
        " flex gap-1 items-center" +
        " " +
        props.className
      }
    >
      <span>₹</span>

      {props.price}
      <div id="price-indicator">
        <IconArrowBadgeUpFilled
          className={
            props.price >= 0
              ? " text-green-500"
              : " text-cinnabar-500 rotate-180"
          }
          size={16}
        />
      </div>
    </div>
  );
};
