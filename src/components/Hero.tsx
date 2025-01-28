import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="animate-gradient absolute h-full w-full bg-[linear-gradient(45deg,#7c3aed_0%,#2563eb_30%,#059669_70%,#f59e0b_100%)] opacity-50 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl space-y-8">
          {/* Subheading */}
          <h3 className="animate-fade-in-up text-primary-foreground/80 text-lg font-semibold delay-150 md:text-xl">
            Transforming Digital Experiences
          </h3>

          {/* Main heading */}
          <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight delay-300 md:text-6xl lg:text-7xl">
            <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
              Innovate
            </span>{" "}
            <span className="animate-pulse">•</span>{" "}
            <span className="from-primary to-accent bg-gradient-to-l bg-clip-text text-transparent">
              Create
            </span>{" "}
            <span className="animate-pulse delay-150">•</span>{" "}
            <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
              Elevate
            </span>
          </h1>

          {/* Shadcn Button CTA */}
          <div className="animate-fade-in-up delay-500">
            <Button
              size="lg"
              className="text-lg font-semibold transition-all hover:scale-105 hover:shadow-xl"
              asChild
            >
              <a href="/contact">Start Your Journey</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
