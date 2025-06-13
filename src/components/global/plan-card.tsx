import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card-aceternity";
import { CheckIcon } from "lucide-react";

type TPlanProps = {
  title: string;
  price: number;
  description: string;
  features: string[];
};

const PlanCard = ({ title, price, description, features }: TPlanProps) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative grid/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/10 dark:bg-black dark:border-white/20 border-black/10 w-full md:!w-[350px] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
          <h2 className="text-3xl">${price}/month</h2>
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
          <ul className="my-4 flex flex-col gap-2">
            {features.map((feature, index) => (
              <li className="flex items-center gap-2" key={index}>
                <CheckIcon />
                {feature}
              </li>
            ))}
          </ul>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default PlanCard;
