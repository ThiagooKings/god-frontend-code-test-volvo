import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

export default function Shop() {
  const [openCardCore, setOpenCardCore] = useState(true);
  const [openCardPlus, setOpenCardPlus] = useState(false);
  const [openCardUltra, setOpenCardUltra] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  function handleOpenCard(cardType: string) {
    if (cardType === "core") {
      setOpenCardCore(true);
      setOpenCardPlus(false);
      setOpenCardUltra(false);
    } else if (cardType === "plus") {
      setOpenCardCore(false);
      setOpenCardPlus(true);
      setOpenCardUltra(false);
    } else {
      setOpenCardCore(false);
      setOpenCardPlus(false);
      setOpenCardUltra(true);
    }
  }

  return (
    <>
      <h1 className="heading-1 font-medium lg:mt-64 mt-48 mx-24 xl:mx-64 ">
        Compre seu {id}
      </h1>
      <div className="flex-row until-lg:hidden">
        <p className="font-16 text-secondary font-light mt-16 lg:mb-32 mx-24 xl:mx-64">
          Selecione as opções abaixo para personalizar o seu automóvel, em
          seguida conheça as nossas ofertas online e encontre os termos mais
          adequados para você.
        </p>
        <div className="until-lg:hidden" style={{ minWidth: "25rem" }}></div>
      </div>
      <div className="lg:flex-row flex-col justify-between xl:gap-64 xl:mx-64 gap-24 lg:mx-24">
        <div className="relative overflow-hidden aspect-16/9">
          <Image
            src="/images/xc90_recharge.jpg"
            alt="Descrição da imagem"
            width={1600}
            height={1200}
          />
        </div>
        <div
          className="flex-col h-full until-lg:hidden"
          style={{ minWidth: "25rem" }}
        >
          <div className="flex-col">
            <h2 className="font-medium text-center lg:text-start font-24">
              Escolha o nível
            </h2>
            <button
              className={`mt-16 flex-col border rounded-md p-24 ${
                openCardCore ? "border-accent-blue border-2" : ""
              }`}
              onClick={() => handleOpenCard("core")}
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Core</p>
                </div>
                <div>
                  <p>R$ 600.000</p>
                </div>
              </div>
              <div
                className={`flex-col items-start text-start ${
                  openCardCore ? "pt-16 text-secondary" : "hidden"
                }`}
              >
                <p>Incluso:</p>
                <ul>
                  <li>Single Motor</li>
                  <li>Tecnologia avançada de detecção</li>
                  <li>Adaptive Cruise Control</li>
                  <li>Google Assistant, Google Maps e Google Play Store</li>
                  <li>E outros mais</li>
                </ul>
              </div>
            </button>
            <button
              className={`mt-16 flex-col border rounded-md p-24 ${
                openCardPlus ? "border-accent-blue border-2" : ""
              }`}
              onClick={() => handleOpenCard("plus")}
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Plus</p>
                </div>
                <div>
                  <p>R$ 630.000</p>
                </div>
              </div>
              <div
                className={`flex-col items-start text-start ${
                  openCardPlus ? "pt-16 text-secondary" : "hidden"
                }`}
              >
                <p>Equipamento Core e ainda:</p>
                <ul>
                  <li>Single Motor Extended Range</li>
                  <li>Porta-malas elétrico</li>
                  <li>Iluminação interior, padrão alto</li>
                  <li>Medição de qualidade do ar</li>
                  <li>E outros mais</li>
                </ul>
              </div>
            </button>
            <button
              className={`mt-16 flex-col border rounded-md p-24 ${
                openCardUltra ? "border-accent-blue border-2" : ""
              }`}
              onClick={() => handleOpenCard("ultra")}
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Ultra</p>
                </div>
                <div>
                  <p>R$ 699.000</p>
                </div>
              </div>
              <div
                className={`flex-col items-start text-start ${
                  openCardUltra ? "pt-16 text-secondary" : "hidden"
                }`}
              >
                <p>Equipamento Plus e ainda:</p>
                <ul>
                  <li>Single Motor Extended Range</li>
                  <li>Teto panorâmico</li>
                  <li>Park Pilot Assist</li>
                  <li>Câmera de 360°, visualização 3D</li>
                  <li>E outros mais</li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="mx-24 xl:mx-64">
        <div className="pt-48 pb-48">
          <h2>Adicionar equipamento adicional</h2>
        </div>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-gutter">
          <div className="flex-col mb-32">
            <Image
              src="/images/acessorios/Dog_harness.avif"
              alt="Descrição da imagem"
              width={300}
              height={225}
              objectFit="cover"
            />

            <small className="micro text-start text-secondary pt-16">
              Acessório
            </small>
            <p className="p-0">
              <b>Cinto para cães</b>
            </p>
            <p className="p-0">R$ 900,00</p>
            <button className="mt-8 w-fit py-4 px-16 border rounded-md border-always-black ">
              <b>Adicionar</b>
            </button>
          </div>

          <div className="flex-col mb-32">
            <Image
              src="/images/acessorios/Charging_cable_bag.avif"
              alt="Descrição da imagem"
              width={300}
              height={225}
              objectFit="cover"
            />

            <small className="micro text-start text-secondary pt-16">
              Acessório
            </small>
            <p className="p-0">
              <b>Sacola para cabo de carregamento</b>
            </p>
            <p className="p-0">R$ 500,00</p>
            <button className="mt-8 w-fit py-4 px-16 border rounded-md border-always-black ">
              <b>Adicionar</b>
            </button>
          </div>

          <div className="flex-col mb-32">
            <Image
              src="/images/acessorios/Roof_box_Space_Design.avif"
              alt="Descrição da imagem"
              width={300}
              height={225}
              objectFit="cover"
            />

            <small className="micro text-start text-secondary pt-16">
              Acessório
            </small>
            <p className="p-0">
              <b>Bagageiro de teto Travel</b>
            </p>
            <p className="p-0">R$ 2.900,00</p>
            <button className="mt-8 w-fit py-4 px-16 border rounded-md border-always-black ">
              <b>Adicionar</b>
            </button>
          </div>

          <div className="flex-col mb-32">
            <Image
              src="/images/acessorios/Bumper_cover.avif"
              alt="Descrição da imagem"
              width={300}
              height={225}
              objectFit="cover"
            />

            <small className="micro text-start text-secondary pt-16">
              Acessório
            </small>
            <p className="p-0">
              <b>Cobertura de para-choques</b>
            </p>
            <p className="p-0">R$ 950,00</p>
            <button className="button-outlined mt-8 w-fit">
              <b>Adicionar</b>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

/**
<div className="pb-32">
            <h2 className="font-medium text-center lg:text-start font-24">
              Escolha o nível
            </h2>
            <SteppedAccordion className="w-xs mt-16" onClick={function Ki() {}}>
              <SteppedAccordionDetails open={openCardCore}>
                <SteppedAccordionSummary onClick={() => handleOpenCard("core")}>
                  Core
                </SteppedAccordionSummary>
                <div className="pb-8 px-24 text-secondary">
                  This advanced sound system employs 21 speakers and two
                  amplifiers to deliver high-fidelity audio in 3D throughout the
                  cabin.
                </div>
              </SteppedAccordionDetails>
              <SteppedAccordionDetails open={openCardPlus}>
                <SteppedAccordionSummary onClick={() => handleOpenCard("plus")}>
                  Plus
                </SteppedAccordionSummary>
                <div className="pb-8 px-24 text-secondary">
                  With the new soundbar concept, a 1040W amplifier and nine
                  high-performance speakers, this state-of-the-art system
                  delivers immersive surround sound for everyone.
                </div>
              </SteppedAccordionDetails>
              <SteppedAccordionDetails open={openCardUltra}>
                <SteppedAccordionSummary
                  onClick={() => handleOpenCard("ultra")}
                >
                  Ultra
                </SteppedAccordionSummary>
                <div className="pb-8 px-24 text-secondary">
                  Every aspect of the audio system is tuned to the interior.
                  Select Dynamic, Soft or Voice mode to deepen your listening
                  experience, or customise a sound mode
                </div>
              </SteppedAccordionDetails>
            </SteppedAccordion>
          </div>
 */
