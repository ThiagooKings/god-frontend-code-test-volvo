import { useRouter } from "next/router";
import {
  SteppedAccordion,
  SteppedAccordionDetails,
  SteppedAccordionSummary,
} from "@volvo-cars/react-accordion";
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
          <div className="fex pb-32">
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
        </div>
      </div>
    </>
  );
}
