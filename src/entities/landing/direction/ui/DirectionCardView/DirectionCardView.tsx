import type { CSSProperties } from "react";
import { Tag } from "antd";
import type { IDirection } from "~entities/landing/direction";

interface Props {
  direction: IDirection;
  isPrimary?: boolean;
  showBadge?: boolean;
  bordered?: boolean;
  style?: CSSProperties;
}

export const DirectionCardView = ({
  direction,
  isPrimary = false,
  showBadge = false,
  bordered = true,
  style,
}: Props) => {
  return (
    <div
      style={style}
      className={`
        bg-white dark:bg-slate-950/50 p-6 rounded-3xl flex flex-col gap-6
        ${
          bordered
            ? isPrimary
              ? "border-2 border-primary"
              : "border-2 border-slate-200 dark:border-slate-800"
            : ""
        }
      `}
    >
      {showBadge && (
        <div>
          <Tag color={isPrimary ? "blue" : "default"}>
            {isPrimary ? "Лучшее совпадение" : "Также подходит"}
          </Tag>
        </div>
      )}

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

      <div className="flex gap-2 flex-wrap">
        {direction.subjects.map((subject) => (
          <Tag key={subject}>{subject}</Tag>
        ))}
      </div>
    </div>
  );
};
