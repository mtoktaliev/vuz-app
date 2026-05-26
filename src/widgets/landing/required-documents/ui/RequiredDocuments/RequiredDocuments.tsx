import { REQUIRED_DOCUMENTS } from "~shared/config/requiredDocuments";
import { RequiredDocumentView } from "~entities/landing/required-document";
import { useScrollAnimation } from "~shared/lib/use-scroll-animation";

export const RequiredDocuments: React.FC = () => {
    const headerRef = useScrollAnimation<HTMLDivElement>();
    const itemRef = useScrollAnimation<HTMLDivElement>(
    { threshold: 0.1 },
    ".anim-fade-up",
  );
  
  return (
    <div className="bg-white dark:bg-slate-950/50">
    <div className="flex flex-col gap-12 container mx-auto px-4 lg:px-6 py-12 lg:py-28">
      <div className="grid grid-cols-12 gap-6 lg:gap-12">
        <div ref={headerRef} className="col-span-10 col-start-2 lg:col-span-8 lg:col-start-3 text-center flex flex-col gap-2 lg:gap-6 anim-fade-up">
          <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white text-center flex justify-center items-center text-shadow-md">
            Документы необходимые для поступления
          </h2>
          <p className="lg:text-xl text-slate-500 dark:text-slate-400">
            Для поступления в университет вам необходимо предоставить следующие
            документы:
          </p>
        </div>
        <div ref={itemRef} className="col-span-12 grid grid-cols-12 gap-3 lg:gap-6">
          {REQUIRED_DOCUMENTS.map((document, index) => (
            <div style={{ transitionDelay: `${index * 150}ms` }} key={document.id} className="col-span-12 lg:col-span-4 anim-fade-up">
              <RequiredDocumentView document={document} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

    
