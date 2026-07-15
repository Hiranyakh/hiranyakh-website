import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <Button
        size="lg"
      >
        Book Consultation
      </Button>

      <Button
        variant="secondary"
        size="lg"
      >
        Explore Programs
      </Button>

    </div>
  );
}