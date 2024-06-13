import Button from "@/components/Button";
import { API_URL, IMG_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

const getStoryData = async (id) => {
  try {
    const res = await fetch(API_URL + "/stories/" + id);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

async function Page({ params }) {
  const story = await getStoryData(params.id);
  return (
    <div>
      <section className="bg-darkblue text-white py-20 relative">
        <Image
          src="/gradient-blue.svg"
          className="absolute right-0 top-0 rotate-180"
          width={301}
          height={326}
          alt=""
        />
        <Image
          src="/gray-dots.svg"
          className="absolute  left-10 -top-10 rotate-90 "
          width={100}
          height={100}
          alt=""
        />
        <Image
          src="/gray-dots.svg"
          className="absolute bottom-0 right-0"
          width={100}
          height={100}
          alt=""
        />
        <div className="container flex gap-10 lg:justify-between flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-2/3">
            <h1
              className={cn(
                sourceSerif.className,
                "font-bold text-2xl lg:block lg:text-3xl max-w-2xl mb-2 lg:mb-5"
              )}
            >
              {story.title}
            </h1>
            <div className="">{story.description}</div>
          </div>
          <Image
            src={IMG_URL + story.image}
            className="w-full lg:w-1/3 object-cover block"
            width={400}
            height={300}
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default Page;
