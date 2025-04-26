import Card from "../Card/Card";
import cars from "../../../public/api/cars.json";
import { Car } from "../../interfaces/Car";

export default function Carousel() {
  return (
    <div className="container-lg flex-row flex-wrap">
      {cars.map((car) => (
        <Card key={car.id} car={car as Car} />
      ))}
      ;
    </div>
  );
}
