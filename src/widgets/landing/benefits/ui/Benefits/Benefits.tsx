export const Benefits = () => {
  return (
    <div className="grid grid-cols-12 gap-3 px-3 bg-white dark:bg-slate-900">
      <div className="col-span-6 bg-blue-100 p-12 grid grid-cols-5">
        <h2 className="col-span-3 col-start-2 text-3xl font-semibold text-center dark:text-white">
          Перечень льготников и необходимых документов
        </h2>
      </div>
      <div className="col-span-6 bg-emerald-100 p-12 grid grid-cols-5">
        <h2 className="col-span-3 col-start-2 text-3xl font-semibold text-center dark:text-white">
          Заявка для участия в конкурсе абитуриентам, прошедших срочную военную
          службу
        </h2>
      </div>
    </div>
  );
};
