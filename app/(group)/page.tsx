"use client"

import { useState } from "react"
import { cn } from "@/utils/functions"
import { ChevronLeft, ChevronRight } from "@blend-metrics/icons"
import { Swiper as SwiperRoot, SwiperSlide } from "swiper/react"
import { Swiper } from "swiper/types"
import { Blocks1 } from "@/components/blocks-1"
import NextImage from "@/components/next-image"
import {
  Button,
  Favorite,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui"
import useFetch2 from "./useFetch2";

  const imgUrl = "https://strapi-marketq-c41141cea442.herokuapp.com"
  // const imgUrl = "http://localhost:1337"; 
const Hero = () => {
  const { data, error } = useFetch2('/api/page1?populate=s1.image');


  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  return (
    <div className="relative bg-[#313237]">
      <div className="absolute left-0 inset-y-0 right-0 lg:right-auto lg:w-[53%]">
      <NextImage
        loader={({ src }) => imgUrl+src}
        className="object-cover"
        src={data.s1.image[0].url}
        alt="Sending emails"
        sizes="50vw"
        fill
      />
      </div>
      <div className="absolute lg:hidden inset-0 bg-[linear-gradient(255.56deg,rgba(49,50,55,1)_19.12%,rgba(49,50,55,0)_127.26%)]" />

      <div className="relative max-w-[290.41px] md:max-w-[562.83px] lg:max-w-[1420px] lg:mx-auto pt-10 pl-10 pb-[75px] lg:pl-0 lg:pb-[126.25px] lg:pt-[92px]">
        <div className="lg:max-w-[493px] lg:ml-auto">
          <h1 className="text-[30px] leading-[36.31px] lg:text-4xl lg:leading-[43.57px] font-bold text-white">
            {data.s1.title}
          </h1>
          <p className="text-sm leading-[16.94px] lg:text-lg mt-[7px] lg:mt-[5px] lg:leading-[21.78px] text-white font-light">
          {data.s1.description}
          </p>

          <button className="focus-visible:outline-none whitespace-nowrap shrink-0 mt-[46px] lg:mt-[38px] border-2 h-10 border-white px-3.5 rounded-[5px] flex items-center justify-center text-[13px] leading-6 font-semibold text-white">
          {data.s1.button}
          </button>
        </div>
      </div>
    </div>
  )
}

const FavoriteProjectCard = ({ image, title, description, span }:any) => {
  return (
    <article className="rounded-lg shrink-0 bg-white border border-[#122A4B]/[.15] overflow-hidden shadow-[0px_2px_5px_0px_rgba(0,0,0,.04)]">
      <div className="h-[140px] border-b border-black/[.15] relative">
      <NextImage
          loader={({ src }) => src} 
          className="object-cover"
          src={image} 
          alt="Design screens"
          sizes="25vw"
          fill
        />
      </div>
      <div className="p-5">
        <h1 className="text-base leading-[19.36px] font-bold text-dark-blue-600">
          {title}
        </h1>
        <p className="text-sm mt-3 leading-[16.94px] font-light text-gray-500">
          {description}
        </p>

        <div className="flex items-center mt-[9px] gap-x-[16.33px] md:mt-[16.98px] justify-between">
          <span className="text-sm leading-[16.94px] text-dark-blue-600 font-light">
            {span}
          </span>

          <Favorite
            starClassName="size-5"
            className="size-5 shrink-0 text-[#122A4B]/[.15]"
          />
        </div>
      </div>
    </article>
  );
}

const FavoriteProjects = () => {
  const [controller, setController] = useState<Swiper>()
  const { data} = useFetch2('/api/page1?populate=s2.image');
  return (
    <div className="max-w-[1420px] mx-auto">
      <div className="flex items-end justify-between">
        <h1 className="text-2xl leading-[29.05px] lg:text-4xl lg:leading-[43.57px] font-bold text-dark-blue-600">
          Our Favorite Projects
        </h1>

        <Button className="xs:max-lg:hidden" visual="gray" variant="link">
          View More
        </Button>
      </div>

      <div className="relative mt-5 lg:mt-[42px]">
        {controller?.allowSlidePrev && (
          <button
            className="xs:max-lg:hidden focus-visible:outline-none absolute inset-y-0 my-auto -left-[71px] text-gray-300 hover:text-gray-500"
            onClick={() => controller?.slidePrev()}
          >
            <ChevronLeft className="size-[55px]" />
          </button>
        )}

        <SwiperRoot
          slidesPerView={1}
          breakpoints={{
            1200: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          onInit={setController}
          spaceBetween={20}
        >
            {data?.s2 && data.s2.map((project:any, index:any) => (
            <SwiperSlide key={index}>
              <FavoriteProjectCard
                image={imgUrl + project.image[0].url}
                title={project.title}
                description={project.description}
                span={project.span}
              />
            </SwiperSlide>
          ))}
        </SwiperRoot>

        {controller?.allowSlideNext && (
          <button
            className="xs:max-lg:hidden focus-visible:outline-none absolute inset-y-0 my-auto -right-[71px] text-gray-300 hover:text-gray-500"
            onClick={() => controller?.slideNext()}
          >
            <ChevronRight className="size-[55px]" />
          </button>
        )}
      </div>

      <div className="flex items-center mt-5 justify-center lg:hidden">
        <Button visual="gray" variant="ghost">
          View More
        </Button>
      </div>
    </div>
  )
}

const NewestAdditionCard = ({ image, title, description}:any) => {
  return (
    <article className="flex items-start gap-x-[15px] lg:gap-x-[23px]">
      <div className="size-[100px] shadow-[0px_2px_5px_0px_rgba(0,0,0,.04)] rounded-[4px] overflow-hidden shrink-0 relative">
        <NextImage
          loader={({ src }) => src} 
          className="object-cover"
          src={image || "/design-screens.png"}
          alt="Design screens"
          sizes="10vw"
          fill
        />
      </div>
      <div className="flex-auto">
        <h1 className="text-sm leading-[16.94px] lg:text-lg lg:leading-[21.78px] font-bold text-dark-blue-600">
          {title}
        </h1>
        <p className="text-sm leading-[16.94px] font-light text-dark-blue-600 mt-[7.5px] lg:mt-[11px]">
        {description}{" "}
        </p>
        <span className="text-sm block mt-[7.5px] lg:mt-[15px] leading-[16.94px] font-light text-dark-blue-600">
        fixed
        </span>
      </div>
    </article>
  )
}

const NewestAdditions = () => {
  const { data } = useFetch2('/api/page1?populate=s3.image');
  return (
    <div className="max-w-[1420px] mx-auto">
      <div className="flex items-end justify-between">
        <h1 className="text-2xl leading-[29.05px] lg:text-4xl lg:leading-[43.57px] font-bold text-dark-blue-600">
          Newest Additions
        </h1>

        <Button className="xs:max-lg:hidden" visual="gray" variant="link">
          View More
        </Button>
      </div>

      <div className="mt-[29px] grid md:grid-cols-2 gap-[25px] lg:gap-y-10 lg:gap-x-[42px]">
      {data?.s3 && data.s3.map((project:any, index:any) => (
        <NewestAdditionCard 
             image={imgUrl + project.image[0].url}
             title={project.title}
             description={project.description}/>
      ))}
      </div>

      <div className="flex items-center mt-[29px] justify-center lg:hidden">
        <Button visual="gray" variant="ghost">
          View More
        </Button>
      </div>
    </div>
  )
}

const PopularProjectCard = ({image, title, description}:any) => {

  return (
    <article className="flex items-start gap-x-[23px]">
      <div className="size-[100px] shadow-[0px_2px_5px_0px_rgba(0,0,0,.04)] rounded-[4px] overflow-hidden shrink-0 relative">
        <NextImage
          loader={({ src }) =>  src} 
          className="object-cover"
          src={image||"/design-screens.png"}
          alt="Design screens"
          sizes="10vw"
          fill
        />
      </div>
      <div className="flex-auto">
        <h1 className="text-lg leading-[21.78px] font-bold text-dark-blue-600">
          {title}
        </h1>
        <p className="text-sm leading-[16.94px] font-light text-gray-500 mt-[11px]">
          {description}{" "}
        </p>
        <span className="text-sm block mt-[15px] leading-[16.94px] font-light text-dark-blue-600">
          this is not editable
        </span>
      </div>
    </article>
  )
}

const PopularProjects = () => {
  const { data } = useFetch2('/api/page1?populate=s4.image');

  return (
    <div className="max-w-[1420px] mx-auto">
      <div className="flex items-end justify-between">
        <h1 className="text-2xl leading-[29.05px] lg:text-4xl lg:leading-[43.57px] font-bold text-dark-blue-600">
          Most Popular Projects
        </h1>

        <Button className="xs:max-lg:hidden" visual="gray" variant="link">
          View More
        </Button>
      </div>

      <Tabs className="mt-[29px]" defaultValue="view-all">
        <TabsList className="px-0 w-full justify-start">
          <TabsTrigger value="view-all">View All</TabsTrigger>
          <TabsTrigger value="top-web-projects">Top Web Projects</TabsTrigger>
          <TabsTrigger value="top-mobile-projects">
            Top Mobile Projects
          </TabsTrigger>
          <TabsTrigger value="top-cloud-projects">
            Top Cloud Projects
          </TabsTrigger>
          <TabsTrigger value="top-digital-marketing-projects">
            Top Digital Marketing Projects
          </TabsTrigger>
        </TabsList>

        <TabsContent value="view-all">
          
            { data?.s4.map((project:any,index:any)=>(
              <div className="pt-[29px] grid md:grid-cols-2 gap-[25px] lg:gap-y-10 lg:gap-x-[42px]" key={index}>
            <PopularProjectCard 
            image = {imgUrl + project.image[0].url}
            title = {project.title}
            description = {project.title}
            />
            </div>
            ))}


          
        </TabsContent>
      </Tabs>

      <div className="flex items-center mt-[29px] justify-center lg:hidden">
        <Button visual="gray" variant="ghost">
          View More
        </Button>
      </div>
    </div>
  )
}

const OnlineSalesFunnels = () => {
  const { data } = useFetch2('/api/page1?populate=s5.image');

  const [controller, setController] = useState<Swiper>()
  return (
    <div className="max-w-[1420px] mx-auto">
      <div className="flex items-end lg:justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl leading-[29.05px] lg:text-4xl lg:leading-[43.57px] font-bold text-dark-blue-600">
            Online Sales Funnels
          </h1>
          <p className="text-sm leading-[16.94px] lg:text-lg lg:leading-[21.78px] font-light text-gray-500">
            Connect Referrizer with your favorite ecommerce shopping carts
          </p>
        </div>

        <Button className="xs:max-lg:hidden" visual="gray" variant="link">
          View More
        </Button>
      </div>

      <div className="relative mt-5 lg:mt-[42px]">
        {controller?.allowSlidePrev && (
          <button
            className="xs:max-lg:hidden focus-visible:outline-none absolute inset-y-0 my-auto -left-[71px] text-gray-300 hover:text-gray-500"
            onClick={() => controller?.slidePrev()}
          >
            <ChevronLeft className="size-[55px]" />
          </button>
        )}
        <SwiperRoot
          slidesPerView={1}
          breakpoints={{
            1200: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          onInit={setController}
          spaceBetween={20}
        >
          {data?.s5 && data.s5.map((project:any, index:any) => (
            <SwiperSlide key={index}>
              <FavoriteProjectCard
                image={imgUrl + project.image[0].url || "/cpu-1.png"}
                title={project.title}
                description={project.description}
                span={project.span}
              />
            </SwiperSlide>
          ))}
        </SwiperRoot>

        {controller?.allowSlideNext && (
          <button
            className="xs:max-lg:hidden focus-visible:outline-none absolute inset-y-0 my-auto -right-[71px] text-gray-300 hover:text-gray-500"
            onClick={() => controller?.slideNext()}
          >
            <ChevronRight className="size-[55px]" />
          </button>
        )}
      </div>
      <div className="flex items-center mt-[29px] justify-center lg:hidden">
        <Button visual="gray" variant="ghost">
          View More
        </Button>
      </div>
    </div>
  )
}

const CustomerServiceSolutions = () => {
  const [controller, setController] = useState<Swiper>()
  const { data } = useFetch2('/api/page1?populate=s6.image');

  return (
    <div className="max-w-[1420px] mx-auto">
      <div className="flex items-end lg:justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl leading-[29.05px] lg:text-4xl lg:leading-[43.57px] font-bold text-dark-blue-600">
            Customer Service Solutions
          </h1>
          <p className="text-sm leading-[16.94px] lg:text-lg lg:leading-[21.78px] font-light text-gray-500">
            Improve support issues and customer satisfaction with these customer
            service projects
          </p>
        </div>

        <Button className="xs:max-lg:hidden" visual="gray" variant="link">
          View More
        </Button>
      </div>

      <div className="relative mt-5 lg:mt-[42px]">
        {controller?.allowSlidePrev && (
          <button
            className="xs:max-lg:hidden focus-visible:outline-none absolute inset-y-0 my-auto -left-[71px] text-gray-300 hover:text-gray-500"
            onClick={() => controller?.slidePrev()}
          >
            <ChevronLeft className="size-[55px]" />
          </button>
        )}

        <SwiperRoot
          slidesPerView={1}
          breakpoints={{
            1200: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          onInit={setController}
          spaceBetween={20}
        >
        {data?.s6 && data.s6.map((project:any, index:any) => (
            <SwiperSlide key={index}>
              <FavoriteProjectCard
                image={imgUrl + project.image[0].url}
                title={project.title}
                description={project.description}
                span={project.span}
              />
            </SwiperSlide>
          ))}
        </SwiperRoot>

        {controller?.allowSlideNext && (
          <button
            className="xs:max-lg:hidden focus-visible:outline-none absolute inset-y-0 my-auto -right-[71px] text-gray-300 hover:text-gray-500"
            onClick={() => controller?.slideNext()}
          >
            <ChevronRight className="size-[55px]" />
          </button>
        )}
      </div>
      <div className="flex items-center mt-[29px] justify-center lg:hidden">
        <Button visual="gray" variant="ghost">
          View More
        </Button>
      </div>
    </div>
  )
}

const MarketingAutomationCampaigns = () => {
  const [controller, setController] = useState<Swiper>()
  const { data } = useFetch2('/api/page1?populate=s7.image');

  return (
    <div className="max-w-[1420px] mx-auto">
      <div className="flex items-end lg:justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl leading-[29.05px] lg:text-4xl lg:leading-[43.57px] font-bold text-dark-blue-600">
            Marketing Automation Campaigns
          </h1>
          <p className="text-sm leading-[16.94px] lg:text-lg lg:leading-[21.78px] font-light text-gray-500">
            Automate lead nurturing, follow ups, conversions, and more with
            these marketing automation campaigns
          </p>
        </div>

        <Button className="xs:max-lg:hidden" visual="gray" variant="link">
          View More
        </Button>
      </div>

      <div className="relative mt-5 lg:mt-[42px]">
        {controller?.allowSlidePrev && (
          <button
            className="xs:max-lg:hidden focus-visible:outline-none absolute inset-y-0 my-auto -left-[71px] text-gray-300 hover:text-gray-500"
            onClick={() => controller?.slidePrev()}
          >
            <ChevronLeft className="size-[55px]" />
          </button>
        )}

        <SwiperRoot
          slidesPerView={1}
          breakpoints={{
            1200: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          onInit={setController}
          spaceBetween={20}
        >
        {data?.s7 && data.s7.map((project:any, index:any) => (
            <SwiperSlide key={index}>
              <FavoriteProjectCard
                image={imgUrl + project.image[0].url || "/cpu-1.png"}
                title={project.title}
                description={project.description}
                span={project.span}
              />
            </SwiperSlide>
          ))}
        </SwiperRoot>

        {controller?.allowSlideNext && (
          <button
            className="xs:max-lg:hidden focus-visible:outline-none absolute inset-y-0 my-auto -right-[71px] text-gray-300 hover:text-gray-500"
            onClick={() => controller?.slideNext()}
          >
            <ChevronRight className="size-[55px]" />
          </button>
        )}
      </div>
      <div className="flex items-center mt-[29px] justify-center lg:hidden">
        <Button visual="gray" variant="ghost">
          View More
        </Button>
      </div>
    </div>
  )
}

const CategoryTransparentVerticalCard = () => {
  const { data} = useFetch2('/api/page1?populate=s8.image');

  return (
    <article className="flex rounded-lg overflow-hidden relative p-5 lg:px-[50px] lg:py-[55px] bg-white shadow-[0px_2px_5px_0px_theme(colors.black/[0.04])]">
      <div className="absolute inset-0">
        <NextImage
         loader={({ src }) =>  src} 
          className="object-cover"
          src={data?.s8[0]?.image?.[0]?.url ? imgUrl + data.s8[0].image[0].url : "/working-2.jpeg"}
          alt="Working"
          sizes="50vw"
          fill
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,42,75,0.48)_0%,rgba(22,97,246,0.31)_100%),linear-gradient(0deg,rgba(18,42,75,0.71),rgba(18,42,75,0.71))]" />

      <div className="relative mt-auto flex flex-col gap-y-[31px] items-start lg:flex-row lg:items-end lg:justify-between pt-[188px] md:pt-[124px] lg:pt-[135px]">
        <h1 className="text-[22px] leading-none lg:text-[62px] lg:leading-[57.4px] font-bold text-white">
          {data?.s8[0]?.title}
        </h1>

        <button className="focus-visible:outline-none whitespace-nowrap shrink-0 border-2 h-10 border-white px-3.5 rounded-[5px] flex items-center justify-center text-[13px] leading-6 font-semibold text-white">
          {data?.s8[0]?.button}
        </button>
      </div>
    </article>
  )
}

const CategoryVerticalCard = () => {
  const { data} = useFetch2('/api/page1?populate=s8.image');
  return (
    <article className="relative overflow-hidden flex xs:max-md:flex-col lg:flex-col rounded-lg p-5 lg:pt-[55px] lg:px-[50px] lg:pb-[7.56px] bg-black shadow-[0px_2px_5px_0px_theme(colors.black/[0.04])]">
      <div className="md:max-lg:pb-[124px] flex md:flex-col md:max-lg:gap-y-[31px] lg:flex-row items-center md:items-start xs:max-md:justify-between lg:justify-between">
        <h1 className="text-[22px] leading-none lg:text-[62px] lg:leading-[57.4px] font-bold text-white">
        {data?.s8[2]?.title}
        </h1>

        <button className="focus-visible:outline-none whitespace-nowrap shrink-0 border-2 h-10 border-white px-3.5 rounded-[5px] flex items-center justify-center text-[13px] leading-6 font-semibold text-white">
        {data?.s8[2]?.button}

        </button>
      </div>

      <div className="md:-bottom-[92.44px] xs:max-md:flex xs:max-md:justify-end xs:max-md:mt-[75px] md:-right-8 md:max-lg:absolute lg:mr-[76.8px] self-end">
        <Blocks1 />
      </div>
    </article>
  )
}

const CategoryTransparentCard = ({ className,image, title, button }: { className?: string,image:any, title:any, button:any }) => {
  const { data, error } = useFetch2('/api/page1?populate=s5.image');
  const imageUrl = data?.s5[0]?.image[0]?.url || '/uploads/default-image.png'; 

  return (
    <article
      className={cn(
        "relative rounded-lg p-5 lg:p-[30px] overflow-hidden flex items-center bg-white shadow-[0px_2px_5px_0px_rgba(0,0,0,.04)] border border-[#122A4B]/[.15]",
        className
      )}
    >
      <div className="space-y-5 flex-auto">
        <h1 className="text-lg leading-[21.78px] lg:text-4xl lg:leading-[43.57px] font-bold text-dark-blue-600">
          {title}
        </h1>

        <button className="focus-visible:outline-none whitespace-nowrap shrink-0 border-2 h-10 border-primary-500 px-3.5 rounded-[5px] flex items-center justify-center text-[13px] leading-6 font-semibold text-primary-500">
        {button}
        </button>
      </div>
      <div className="relative shrink-0 xs:max-md:absolute xs:max-md:top-5 xs:max-md:right-[-115.26px]">
        <NextImage
          loader={({ src }) => src} 
          className="object-contain mx-auto"
          src={image ||"/cpu-1.png"}
          alt="CPU"
          sizes="25vw"
          width={206.15}
          height={150}
        />
      </div>
    </article>
  )
}
const Categories = () => {
  const { data } = useFetch2('/api/page1?populate=s8.image');
  return (
    <div className="max-w-[1420px] mx-auto">
      <div className="flex items-end justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl leading-[29.05px] lg:text-4xl lg:leading-[43.57px] font-bold text-dark-blue-600">
            Most Popular Projects
          </h1>
          <p className="text-lg leading-[21.78px] font-light text-gray-500">
            Find more ways to maximize your results with Marketeq‘s curated
            project teams
          </p>
        </div>

        <Button className="xs:max-lg:hidden" visual="gray" variant="link">
          View More
        </Button>
      </div>

      <div className="mt-8 lg:mt-[42px] grid md:grid-cols-2 gap-3 lg:gap-x-8">
        <div className="contents md:grid gap-y-3 lg:gap-y-8">
          <CategoryTransparentVerticalCard />
          <CategoryTransparentCard 
            image={data?.s8[1]?.image?.[1]?.url ? imgUrl + data.s8[1].image[0].url : "/working-2.jpeg"}
            button = {data?.s8[1].button}
            title ={data?.s8[1].title}
            />
            <CategoryTransparentCard 
            image={data?.s8[3]?.image?.[2]?.url ? imgUrl + data.s8[3].image[0].url : "/working-2.jpeg"}
            button = {data?.s8[3].button}
            title ={data?.s8[3].title}
            />
        </div>
        <div className="contents md:grid gap-y-3 lg:gap-y-8">
        <CategoryTransparentCard 
            image={data?.s8[4]?.image?.[0]?.url ? imgUrl + data.s8[4].image[0].url : "/working-2.jpeg"}
            button = {data?.s8[4].button}
            title ={data?.s8[4].title}
            />
            <CategoryTransparentCard 
            image={data?.s8[5]?.image?.[0]?.url ? imgUrl + data.s8[5].image[0].url : "/working-2.jpeg"}
            button = {data?.s8[5].button}
            title ={data?.s8[5].title}
            />

          <CategoryVerticalCard />
        </div>
      </div>

      <div className="flex items-center mt-[29px] justify-center lg:hidden">
        <Button visual="gray" variant="ghost">
          View More
        </Button>
      </div>
    </div>
  )
}

export default function Marketplace() {
  return (
    <div className="bg-gray-25">
      <Hero />
      <div className="py-10 px-3.5 md:px-10 lg:px-[100px] xl:px-[150px] 2xl:px-[250px] overflow-hidden space-y-10 lg:space-y-[100px] lg:py-[100px]">
        <FavoriteProjects />
        <NewestAdditions />
        <PopularProjects />
        <OnlineSalesFunnels />
        <CustomerServiceSolutions />
        <MarketingAutomationCampaigns />
        <Categories />
      </div>
    </div>
  )
}
