import Card from "../Card/Card";
import cars from "../../../public/api/cars.json";
import { Car } from "../../interfaces/Car";
import {
  useSnapIndicators,
  useSnapNavigation,
} from "@volvo-cars/react-headless";
import { IconButton } from "@volvo-cars/react-icons";
import { useRef } from "react";

export default function Carousel() {
  const ref = useRef(null);
  const { previousButtonProps, nextButtonProps } = useSnapNavigation({
    ref,
  });

  const refIndicators = useRef(null);

  const { indicators } = useSnapIndicators({
    ref: refIndicators,
  });

  return (
    <section className="container-lg  py-s" data-bleed="until-md">
      <>
        <div ref={ref} className="reel scrollbar-none until-lg:hidden">
          {cars.map((car, index) => (
            <div
              id={car.id}
              className="snap-center transition-colors"
              key={index}
              style={{
                width: "25%",
                flex: "0 0 25%",
                marginInlineStart: index === 0 ? "0%" : undefined,
                marginInlineEnd: index === cars.length - 1 ? "0%" : undefined,
              }}
            >
              <Card key={car.id} car={car as Car} />
            </div>
          ))}
        </div>
        <div ref={refIndicators} className="reel scrollbar-none md:hidden">
          {cars.map((car, index) => (
            <div
              id={car.id}
              className="snap-center transition-colors"
              key={index}
              style={{
                width: "100%",
                flex: "0 0 80%",
                marginInlineStart: index === 0 ? "10%" : undefined,
                marginInlineEnd: index === cars.length - 1 ? "10%" : undefined,
              }}
            >
              <Card key={car.id} car={car as Car} />
            </div>
          ))}
        </div>
        <div
          ref={ref}
          className="reel scrollbar-none lg:hidden until-md:hidden"
        >
          {cars.map((car, index) => (
            <div
              id={car.id}
              className="snap-center transition-colors"
              key={index}
              style={{
                width: "33%",
                flex: "0 0 33%",
                marginInlineStart: index === 0 ? "0%" : undefined,
                marginInlineEnd: index === cars.length - 1 ? "0%" : undefined,
              }}
            >
              <Card key={car.id} car={car as Car} />
            </div>
          ))}
        </div>
      </>
      <ul className="pagination-dots md:hidden">
        {indicators.map((props, index) => {
          return (
            <li key={index}>
              <button {...props}>
                <span className="sr-only">Go to next car {index + 1}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="container-sm flex gap-16 mt-24 justify-end mr-0 until-md:hidden">
        <IconButton
          icon="chevron-back"
          variant="outlined"
          {...previousButtonProps}
        />
        <IconButton
          icon="chevron-forward"
          variant="outlined"
          {...nextButtonProps}
        />
      </div>
    </section>
  );
}
