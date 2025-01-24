import Image from "next/image";

export default function Summary({ company }: { company: any }) {
  return (
    <div className="relative flex overflow-hidden rounded-[26px] border border-[#EAEAEA] bg-white pt-12 transition-colors duration-300 ease-in-out hover:cursor-pointer">
      {/* Tilted SVG Background */}
      <div className="absolute -right-5 top-0 -rotate-12 opacity-65">
        <Image
          src={company.logo}
          alt="Background Logo"
          width={220}
          height={220}
        />
      </div>

      {/* Content */}
      <div className="relative grid overflow-hidden border-b-[1px] p-4">
        {/* Gradient Background */}
        <div className="absolute inset-0 h-full bg-gradient-to-t from-white via-white/85 via-75% to-transparent"></div>

        {/* Title */}
        <a className="relative z-10 text-sm font-semibold text-gray-700">
          {company.role} · {company.name}
        </a>

        {/* Details */}
        <p className="relative z-10 mt-2 whitespace-pre-line text-sm text-gray-600">
          {company.summary}
        </p>
      </div>
    </div>
  );
}
