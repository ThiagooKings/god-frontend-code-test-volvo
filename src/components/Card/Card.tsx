import React from "react";
import Image from "next/image";
import { Car } from "../../interfaces/Car";

type CardProps = {
  car: Car;
};

export default function Card({ car }: CardProps) {
  return (
    // parte relacionada a containers será colocada em outro componente depois
    <div className="flex-col px-8">
      <div className="body-type">
        <span className="text-secondary font-14 ">
          <strong>{car.bodyType}</strong>
        </span>
      </div>
      <div className="pb-8 model-name-and-model-type">
        <span className="pr-4 model-name">
          <strong>{car.modelName}</strong>
        </span>
        <span className="text-secondary model-type">{car.modelType}</span>
      </div>
      <Image
        src={car.imageUrl}
        alt="Descrição da imagem"
        width={300}
        height={225}
      />
      <div className="pt-16 flex-row justify-evenly card-buttons">
        <a className="button-text font-14" data-color="accent" href="#top">
          LEARN
        </a>
        <a className="button-text font-14" data-color="accent" href="#top">
          SHOP
        </a>
      </div>
    </div>
  );
}
