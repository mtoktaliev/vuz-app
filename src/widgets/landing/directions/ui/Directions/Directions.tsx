// widgets/landing/popular-directions/ui/PopularDirectionsView.tsx
import { Button } from "antd";
import { useRef } from "react";
import { AltArrowLeft, AltArrowRight } from "@solar-icons/react-perf/Outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "~shared/lib/i18n";
import { RoutesUrls } from "~shared/lib/router/types";
import { DirectionCardView } from "~entities/landing/direction";
import { DIRECTIONS } from "~shared/config/directions";
import "swiper/css";
import "swiper/css/navigation";
import { useScrollAnimation } from "~shared/lib/use-scroll-animation";

export const Directions = () => {
  const { t } = useTranslation();
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const sliderRef = useScrollAnimation<HTMLDivElement>();

  const getOffset = () => {
    const w = window.innerWidth;
    let containerWidth: number;
    let px: number;

    if (w >= 1536) {
      containerWidth = 1536;
      px = 24;
    } else if (w >= 1280) {
      containerWidth = 1280;
      px = 24;
    } else if (w >= 1024) {
      containerWidth = 1024;
      px = 24;
    } else if (w >= 768) {
      containerWidth = 768;
      px = 20;
    } else if (w >= 640) {
      containerWidth = 640;
      px = 20;
    } else {
      containerWidth = w;
      px = 16;
    }

    const margin = Math.max(0, (w - containerWidth) / 2);
    return margin + px;
  };

  return (
    <div className="flex flex-col gap-6 lg:gap-12 py-12 lg:py-28">
      <div
        ref={headerRef}
        className="container mx-auto px-4 lg:px-6 flex gap-4 lg:gap-6 justify-between items-center anim-fade-up"
      >
        <h2 className="text-2xl lg:text-4xl font-semibold dark:text-white">
          {t("landing:popularDirections")}
        </h2>
        <Link to={RoutesUrls.directionQuiz}>
          <Button
            type="link"
            size="small"
            icon={<AltArrowRight />}
            iconPlacement="end"
          >
            {t("buttons.helpChoose")}
          </Button>
        </Link>
      </div>
      <div className="anim-fade-up" ref={sliderRef}>
        <Swiper
          slidesPerView={3.5}
          spaceBetween={24}
          slidesOffsetBefore={getOffset()}
          slidesOffsetAfter={24}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 12,
              slidesOffsetBefore: getOffset(),
              slidesOffsetAfter: 16,
            },
            640: {
              spaceBetween: 16,
              slidesOffsetBefore: getOffset(),
              slidesOffsetAfter: 20,
            },
            1024: {
              spaceBetween: 24,
              slidesOffsetBefore: getOffset(),
              slidesOffsetAfter: 24,
            },
          }}
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
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full"
        >
          {DIRECTIONS.map((direction) => (
            <SwiperSlide key={direction.id} style={{ height: "auto" }}>
              <DirectionCardView
                direction={direction}
                bordered={false}
                style={{ height: "100%" }}
              />
            </SwiperSlide>
          ))}
          <div className="container mx-auto flex justify-end gap-2 lg:gap-3 py-4 lg:py-6 px-4 lg:px-12">
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
        </Swiper>
      </div>
    </div>
  );
};
