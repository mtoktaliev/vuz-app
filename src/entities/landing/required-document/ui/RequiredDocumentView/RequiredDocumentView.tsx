import { IRequiredDocument } from "~entities/landing/required-document";

interface Props {
  document: IRequiredDocument;
}

export const RequiredDocumentView = ({ document }: Props) => {
  return (
    <>
      <div className="bg-slate-100 dark:bg-slate-900 p-12 rounded-3xl flex flex-col gap-6 min-h-full">
        <div className={document.color}>{document.icon}</div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg dark:text-white">
            {document.name}
          </h3>
          <p className="text-slate-500 dark:text-slate-400">
            {document.description}
          </p>
        </div>
      </div>
    </>
  );
};
