import Header from "./Header";
import Main from "./Main";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <div className="mx-auto max-w-screen-xl px-4 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="overflow:hidden lg:flex lg:justify-between lg:gap-4">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}
