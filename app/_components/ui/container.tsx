import { cn } from "@/app/_lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn("w-full max-w-[1200px] mx-auto px-4 md:px-6", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
