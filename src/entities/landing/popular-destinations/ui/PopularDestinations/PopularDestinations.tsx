import { Button } from "antd";
import React, { useRef } from "react";
import {
  Code,
  AltArrowLeft,
  AltArrowRight,
} from "@solar-icons/react-perf/Outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "~shared/lib/i18n";
import { useTheme } from "~shared/lib/theme";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { RoutesUrls } from "~shared/lib/router/types";

export const PopularDestinations: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div className="container mx-auto px-6 flex flex-col gap-6 py-20">
        <div className="flex gap-6 justify-between items-center">
          <h2 className="text-4xl font-semibold dark:text-white">
            Самые популярные направления
          </h2>
          <Link to={RoutesUrls.helpMeChoose}>
            <Button
              type="link"
              size="large"
              icon={<AltArrowRight />}
              iconPlacement="end"
            >
              Помошь с выбором
            </Button>
          </Link>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          // breakpoints={{
          //   0: {
          //     slidesPerView: 1,
          //     spaceBetween: 12,
          //   },
          //   640: {
          //     slidesPerView: 2,
          //     spaceBetween: 16,
          //   },
          //   1024: {
          //     slidesPerView: 3,
          //     spaceBetween: 24,
          //   },
          // }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          modules={[Pagination, Navigation]}
          className="w-full"
        >
          <div className="flex justify-end gap-3 p-6">
            <Button
              ref={navigationPrevRef}
              icon={<AltArrowLeft />}
              shape="circle"
              size="large"
            />
            <Button
              ref={navigationNextRef}
              icon={<AltArrowRight />}
              shape="circle"
              size="large"
            />
          </div>
          <SwiperSlide>
            <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl flex flex-col gap-6">
              <div className="text-primary bg-purple-100 dark:bg-slate-900 p-2 rounded-lg w-fit">
                <Code size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg dark:text-white">
                  Информационные технологии
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Программирование, кибербезопасность, AI
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl flex flex-col gap-6">
              <div className="text-primary bg-purple-100 dark:bg-slate-900 p-2 rounded-lg w-fit">
                <Code size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg dark:text-white">
                  Информационные технологии
                </h3>
                <p className="text-slate-500">
                  Программирование, кибербезопасность, AI
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl flex flex-col gap-6">
              <div className="text-primary bg-purple-100 dark:bg-slate-900 p-2 rounded-lg w-fit">
                <Code size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg dark:text-white">
                  Информационные технологии
                </h3>
                <p className="text-slate-500">
                  Программирование, кибербезопасность, AI
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl flex flex-col gap-6">
              <div className="text-primary bg-purple-100 dark:bg-slate-900 p-2 rounded-lg w-fit">
                <Code size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg dark:text-white">
                  Информационные технологии
                </h3>
                <p className="text-slate-500">
                  Программирование, кибербезопасность, AI
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl flex flex-col gap-6">
              <div className="text-primary bg-purple-100 dark:bg-slate-900 p-2 rounded-lg w-fit">
                <Code size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg dark:text-white">
                  Информационные технологии
                </h3>
                <p className="text-slate-500">
                  Программирование, кибербезопасность, AI
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl flex flex-col gap-6">
              <div className="text-primary bg-purple-100 dark:bg-slate-900 p-2 rounded-lg w-fit">
                <Code size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg dark:text-white">
                  Информационные технологии
                </h3>
                <p className="text-slate-500">
                  Программирование, кибербезопасность, AI
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl flex flex-col gap-6">
              <div className="text-primary bg-purple-100 dark:bg-slate-900 p-2 rounded-lg w-fit">
                <Code size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg dark:text-white">
                  Информационные технологии
                </h3>
                <p className="text-slate-500">
                  Программирование, кибербезопасность, AI
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
