import React from "react";
import Image from "next/image";
import styles from "./card.module.css";

export default function Card() {
  return (
    // parte relacionada a containers será colocada em outro componente depois

    <div className="container-lg flex-row">
      <div className="flex-col px-8">
        <div className="body-type">
          <span className="text-secondary font-14 ">
            <strong>SUV</strong>
          </span>
        </div>
        <div className="pb-8 model-name-and-model-type">
          <span className="pr-4 model-name">
            <strong>XC60 Recharge</strong>
          </span>
          <span className="text-secondary model-type">plug-in hybrid</span>
        </div>
        <Image
          src="/images/xc90_recharge.jpg"
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
    </div>
  );
}
