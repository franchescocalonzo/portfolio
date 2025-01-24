export default function Details({
  company,
  onClose,
}: {
  company: any;
  onClose: () => void;
}) {
  return (
    <div className="relative flex w-[90%] max-w-[400px] flex-col rounded-2xl bg-white p-10 shadow-lg">
      <p>picture as banner</p>
      <div className="mt-4">
        <h2 className="text-xl font-bold">{company.name}</h2>
        <p className="mt-3 text-sm">{company.role}</p>
        <p className="text-sm">{company.duration}</p>
        <p className="mt-2 text-sm">{company.description}</p>
        <p className="text-sm">{company.challenges}</p>
        <p className="text-sm">{company.techStack}</p>
      </div>
    </div>
  );
}
