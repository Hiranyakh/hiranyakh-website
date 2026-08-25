import Container from "@/components/ui/Container";

interface SectionProps {
  children: React.ReactNode;
  background?: string;
}

export default function Section({
  children,
  background = "bg-white",
}: SectionProps) {
  return (
    <section className={`${background} py-24`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}