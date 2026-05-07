// widgets/landing/popular-directions/ui/PopularDirectionsView.tsx
import { Button } from "antd";
import { useRef } from "react";
import { AltArrowLeft, AltArrowRight } from "@solar-icons/react-perf/Outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "~shared/lib/i18n";
import { RoutesUrls } from "~shared/lib/router/types";
import { DirectionCardView } from "~entities/landing/direction";
import { DIRECTIONS } from "~shared/config/directions";
import "swiper/css";
import "swiper/css/navigation";

export const PopularDirections = () => {
  const { t } = useTranslation();
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="container mx-auto px-6 flex flex-col gap-12 py-20">
      <div className="flex gap-6 justify-between items-center">
        <h2 className="text-4xl font-semibold dark:text-white">
          Самые популярные направления
        </h2>
        <Link to={RoutesUrls.helpMeChoose}>
          <Button
            type="link"
            size="large"
            icon={<AltArrowRight />}
            iconPosition="end"
          >
            Помощь с выбором
          </Button>
        </Link>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        // breakpoints={{
        //   0: { slidesPerView: 1, spaceBetween: 12 },
        //   640: { slidesPerView: 2, spaceBetween: 16 },
        //   1024: { slidesPerView: 3, spaceBetween: 24 },
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
        {DIRECTIONS.map((direction) => (
          <SwiperSlide key={direction.id} style={{ height: "auto" }}>
            <DirectionCardView
              direction={direction}
              bordered={false}
              style={{ height: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
