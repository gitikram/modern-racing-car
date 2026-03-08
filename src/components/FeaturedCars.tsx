import { motion } from "framer-motion";
import { ArrowRight, Gauge, Zap, Timer } from "lucide-react";
import car1 from "@/assets/car-1.png";
import car2 from "@/assets/car-2.png";
import car3 from "@/assets/car-3.png";

const cars = [
  {
    name: "Inferno GT",
    tagline: "Born from Fire",
    image: car1,
    color: "from-primary/20 to-transparent",
    specs: { power: "710 HP", speed: "340 km/h", accel: "2.9s" },
  },
  {
    name: "Shadow SVR",
    tagline: "Silent Predator",
    image: car2,
    color: "from-foreground/10 to-transparent",
    specs: { power: "770 HP", speed: "355 km/h", accel: "2.7s" },
  },
  {
    name: "Phantom RS",
    tagline: "Track Dominator",
    image: car3,
    color: "from-muted-foreground/10 to-transparent",
    specs: { power: "520 HP", speed: "312 km/h", accel: "3.2s" },
  },
];

const FeaturedCars = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      {/* Subtle top border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-8 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-sm font-medium tracking-[0.3em] text-primary uppercase">
              The Fleet
            </span>
          </div>
          <h2
            className="text-4xl font-bold text-foreground md:text-6xl"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            FEATURED <span className="text-primary">MACHINES</span>
          </h2>
        </motion.div>

        {/* Car Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {cars.map((car, i) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_hsl(0_85%_50%/0.1)]">
                {/* Card gradient bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${car.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Image */}
                <div className="relative flex h-56 items-center justify-center overflow-hidden p-6 md:h-64">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Info */}
                <div className="relative border-t border-border p-6">
                  <div className="mb-1 text-xs font-medium tracking-[0.2em] text-primary uppercase">
                    {car.tagline}
                  </div>
                  <h3
                    className="mb-5 text-2xl font-bold text-foreground"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {car.name}
                  </h3>

                  {/* Specs */}
                  <div className="mb-6 grid grid-cols-3 gap-3">
                    <div className="rounded-lg bg-secondary/50 p-3 text-center">
                      <Zap className="mx-auto mb-1 h-4 w-4 text-primary" />
                      <div className="text-sm font-bold text-foreground">
                        {car.specs.power}
                      </div>
                      <div className="text-[10px] text-muted-foreground uppercase">
                        Power
                      </div>
                    </div>
                    <div className="rounded-lg bg-secondary/50 p-3 text-center">
                      <Gauge className="mx-auto mb-1 h-4 w-4 text-primary" />
                      <div className="text-sm font-bold text-foreground">
                        {car.specs.speed}
                      </div>
                      <div className="text-[10px] text-muted-foreground uppercase">
                        Top Speed
                      </div>
                    </div>
                    <div className="rounded-lg bg-secondary/50 p-3 text-center">
                      <Timer className="mx-auto mb-1 h-4 w-4 text-primary" />
                      <div className="text-sm font-bold text-foreground">
                        {car.specs.accel}
                      </div>
                      <div className="text-[10px] text-muted-foreground uppercase">
                        0-100
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="group/btn flex w-full items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground">
                    Discover
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
