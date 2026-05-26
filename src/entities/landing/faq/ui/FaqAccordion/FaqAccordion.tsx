// entities/landing/faq/ui/FaqAccordion.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IFaq } from "~entities/landing/faq";

interface Props {
  faq: IFaq;
}

export const FaqAccordion = ({ faq }: Props) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const isOpen = openId === faq.id;

  return (
    <div className="flex flex-col gap-3">
      <div
        key={faq.id}
        className="bg-white dark:bg-slate-900 rounded-2xl lg:rounded-3xl overflow-hidden flex flex-col my-1"
      >
        <button
          onClick={() => toggle(faq.id)}
          className="w-full flex items-center justify-between gap-3 p-4 lg:p-6 text-left cursor-pointer"
        >
          <span className="font-semibold text-sm lg:text-base dark:text-white">{faq.question}</span>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="
                  dark:border-slate-700 flex items-center justify-center
                  text-slate-500 dark:text-slate-400"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 1V11M1 6H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <p className="px-4 lg:px-6 pb-4 lg:pb-6 text-sm lg:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
