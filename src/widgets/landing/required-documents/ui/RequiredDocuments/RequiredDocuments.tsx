import { VerifiedCheck, Diploma, Notes } from "@solar-icons/react-perf/Outline";

export const RequiredDocuments: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 container mx-auto px-6 py-28">
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-8 col-start-3 text-center flex flex-col gap-6">
          <h2 className="text-5xl font-semibold dark:text-white text-center flex justify-center items-center">
            Документы необходимые для поступления
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400">
            Для поступления в университет вам необходимо предоставить следующие
            документы:
          </p>
        </div>
        <div className="col-span-12 grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <div className="bg-white dark:bg-slate-950/50 p-12 rounded-3xl flex flex-col gap-6 min-h-full">
              <div className="text-white bg-linear-to-b from-olive-800 to-olive-950 p-3 rounded-xl w-fit border-2 border-olive-900">
                <VerifiedCheck size={28} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg dark:text-white">
                  Паспорт или свидетельство о рождении
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Для подтверждения вашей личности и гражданства вам необходимо
                  предоставить паспорт или свидетельство о рождении. Это
                  обязательный документ для всех абитуриентов.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="bg-white dark:bg-slate-950/50 p-12 rounded-3xl flex flex-col gap-6 min-h-full">
              <div className="text-white bg-linear-to-b from-fuchsia-800 to-fuchsia-950 p-3 rounded-xl w-fit border-2 border-fuchsia-900">
                <Diploma size={28} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg dark:text-white">
                  Аттестат или диплом о среднем профессиональном образовании
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Для подтверждения вашего образования вам необходимо
                  предоставить аттестат или диплом о среднем профессиональном
                  образовании
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="bg-white dark:bg-slate-950/50 p-12 rounded-3xl flex flex-col gap-6 min-h-full">
              <div className="text-white bg-linear-to-b from-rose-800 to-rose-950 p-3 rounded-xl w-fit border-2 border-rose-900">
                <Notes size={28} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg dark:text-white">
                  Сертификат ОРТ
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Для подтверждения ваших знаний и навыков вам необходимо
                  предоставить сертификат ОРТ. Этот сертификат подтверждает, что вы успешно сдали экзамены
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
