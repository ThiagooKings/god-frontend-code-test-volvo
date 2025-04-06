import React from "react";
import Image from "next/image";
import styles from "./card.module.css";

export default function Card() {
  return (
    // parte relacionada a containers será colocada em outro componente depois

    <div className="container-lg flex-row">
      <div className="flex-col">
        <div className="body-type">
          <span className="text-secondary font-14 ">
            <strong>SUV</strong>
          </span>
        </div>
        <div className="model-name-and-model-type">
          <span className="model-name">XC60 Recharge</span>
          <span className="model-type">plug-in hybrid</span>
        </div>
        <Image
          src="/images/xc90_recharge.jpg"
          alt="Descrição da imagem"
          width={400}
          height={300}
        />
        texto
      </div>
      <div className="flex-col">
        <Image
          src="/images/xc90_recharge.jpg"
          alt="Descrição da imagem"
          width={400}
          height={300}
        />
        texto
      </div>
      <div className="flex-col">
        <Image
          src="/images/xc90_recharge.jpg"
          alt="Descrição da imagem"
          width={400}
          height={300}
        />
        texto
      </div>
      <div className="flex-col">
        <Image
          src="/images/xc90_recharge.jpg"
          alt="Descrição da imagem"
          width={400}
          height={300}
        />
        texto
      </div>
    </div>
  );
}
