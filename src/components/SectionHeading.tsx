
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
}

const SectionHeading = ({
  title,
  subtitle,
  alignment = "center"
}: SectionHeadingProps) => {
  const getAlignment = () => {
    switch (alignment) {
      case "left":
        return "text-left";
      case "right":
        return "text-right";
      default:
        return "text-center";
    }
  };

  return (
    <div className={`mb-12 ${getAlignment()}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-primary mt-4 rounded ${alignment === "center" ? "mx-auto" : alignment === "right" ? "ml-auto" : ""}`} />
    </div>
  );
};

export default SectionHeading;
