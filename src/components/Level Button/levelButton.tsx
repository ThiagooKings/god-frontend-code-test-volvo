type LevelButtonProps = {
  isActive: boolean;
  value: number;
  type: string;
  titleDescriptionItens: string;
  descriptionItens: string[];
};

export default function LevelButton({
  isActive,
  value,
  type,
  titleDescriptionItens,
  descriptionItens,
}: LevelButtonProps) {
  return (
    <button
      className={`mt-16 flex-col border rounded-md p-24 ${
        isActive ? "border-accent-blue border-2" : ""
      }`}
    >
      <div className="flex justify-between">
        <div>
          <p className="font-medium">{type}</p>
        </div>
        <div>
          <p>{value}</p>
        </div>
      </div>
      <div
        className={`flex-col items-start text-start ${
          isActive ? "pt-16 text-secondary" : "hidden"
        }`}
      >
        <p>{titleDescriptionItens}</p>
        <ul>
          {descriptionItens.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </button>
  );
}
