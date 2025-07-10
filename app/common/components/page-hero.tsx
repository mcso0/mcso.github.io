interface PageHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function PageHero({ title, subtitle, className }: PageHeroProps) {
  return (
    <div>
      <div className={`flex flex-col py-20 justify-center items-center rounded-md bg-gradient-to-t from-background to-primary/10 gap-4 
      ${className}`}>
        <h1 className="text-5xl font-bold">
          {title}
        </h1>
        <p className="text-xl font-light text-muted-foreground">
          {subtitle}
        </p>
      </div>
      
    </div>
  );
} 