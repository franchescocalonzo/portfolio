type SectionHeaderProps = {
  title: string;
};

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <h2 className="text-sm font-medium uppercase tracking-wider text-portfolio-muted">
        {title}
      </h2>
      <div className="h-[1px] flex-1 bg-portfolio-card-border" />
    </div>
  );
}
