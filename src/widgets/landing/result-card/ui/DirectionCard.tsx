// widgets/result-card/ui/DirectionCard.tsx
import type { Direction } from "~entities/landing/direction";

interface Props {
  direction: Direction;
  isPrimary?: boolean;
}

export const DirectionCard = ({ direction, isPrimary = false }: Props) => {
  return (
    <div
      className={`
      flex flex-col gap-3 p-5 rounded-2xl border
      ${isPrimary ? "border-violet-600 border-2" : "border-gray-200"}
    `}
    >
      <span
        className={`
        self-start text-xs font-medium px-3 py-1 rounded-full
        ${
          isPrimary
            ? "bg-violet-50 text-violet-700"
            : "bg-gray-100 text-gray-500"
        }
      `}
      >
        {isPrimary ? "Лучшее совпадение" : "Также подходит"}
      </span>

      <div className="flex flex-col gap-3">
        <div className="text-primary bg-purple-100 dark:bg-slate-900 p-2 rounded-lg w-fit">
          {direction.icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg dark:text-white">
            {direction.name}
          </h3>
          <p className="text-slate-500 dark:text-slate-400">
            {direction.description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {direction.subjects.map((subject) => (
          <span
            key={subject}
            className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600"
          >
            {subject}
          </span>
        ))}
      </div>
    </div>
  );
};
