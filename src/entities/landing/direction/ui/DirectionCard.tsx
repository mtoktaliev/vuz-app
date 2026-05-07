import { Tag } from "antd";
import type { Direction } from "../model/types";

interface Props {
  direction: Direction;
  isPrimary?: boolean;
}

export const DirectionCard = ({ direction, isPrimary = false }: Props) => {
  return (
    <div
      className={`
      bg-white dark:bg-slate-950 p-6 rounded-2xl flex flex-col gap-6
      ${isPrimary ? "ring-2 ring-primary" : "ring-2 ring-slate-200 dark:ring-slate-800"}
    `}
    >
      <div>
        <Tag color={isPrimary ? "blue" : "default"}>
          {isPrimary ? "Лучшее совпадение" : "Также подходит"}
        </Tag>
      </div>
      <div className="text-primary bg-purple-100 dark:bg-slate-900 p-2 rounded-lg w-fit">
        {direction.icon}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-lg dark:text-white">
          {direction.name}
        </h3>
        <p className="text-slate-500 dark:text-slate-400">
          {direction.description}
        </p>
      </div>
      <div className="flex gap-2">
        {direction.subjects.map((subject) => (
          <Tag key={subject}>{subject}</Tag>
        ))}
      </div>
    </div>
  );
};
