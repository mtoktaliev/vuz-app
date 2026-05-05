interface Props {
  current: number;
  total: number;
}

export const StepProgress = ({ current, total }: Props) => {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="w-full h-1 bg-gray-200 rounded-full">
      <div
        className="h-1 bg-violet-600 rounded-full transition-all duration-400"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
};
