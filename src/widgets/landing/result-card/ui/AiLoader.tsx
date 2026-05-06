// widgets/result-card/ui/AiLoader.tsx

export const AiLoader = () => {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-6 px-4 py-12">
      <div className="flex gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#534AB7",
              animation: `ai-pulse 1.2s ease-in-out ${i * 0.15}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-base font-medium text-gray-700">
          Анализируем ваши ответы
        </p>
        <p className="text-sm text-gray-400">
          Подбираем подходящие направления...
        </p>
      </div>

      <style>{`
        @keyframes ai-pulse {
          0%, 100% { transform: scaleY(1);   opacity: 0.4; }
          50%       { transform: scaleY(2.2); opacity: 1;   }
        }
      `}</style>
    </div>
  );
};
