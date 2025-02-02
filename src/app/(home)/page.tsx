import { BlurIn } from "@/components/BlurIn";
import Header from "./Header";
import Main from "./Main";

export default function Home() {
  return (
    <BlurIn>
      <div className="min-h-screen bg-[#FFFFFF]">
        <div className="mx-auto max-w-screen-xl px-4 py-10 py-5 font-sans md:px-12 md:py-10 lg:px-24 lg:py-0">
          <div className="overflow:hidden min-h-screen lg:flex lg:justify-between lg:gap-4">
            <Header />
            <Main />
          </div>
        </div>
      </div>
    </BlurIn>
  );
}
