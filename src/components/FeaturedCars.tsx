import { motion } from "framer-motion";
import { ArrowRight, Gauge, Zap, Timer, Trophy } from "lucide-react";
import car1 from "@/assets/car-1.png";
import car2 from "@/assets/car-2.png";
import car3 from "@/assets/car-3.png";

const cars = [
  {
    name: "Inferno GT",
    tagline: "Born from Fire",
    image: car1,
    stats: { power: "710 HP", speed: "340 km/h", accel: "2.9s", wins: "47" },
    number: "01",
  },
  {
    name: "Shadow SVR",
    tagline: "Silent Predator",
    image: car2,
    stats: { power: "770 HP", speed: "355 km/h", accel: "2.7s", wins: "63" },
    number: "02",
  },
  {
    name: "Phantom RS",
    tagline: "Track Dominator",
    image: car3,
    stats: { power: "520 HP", speed: "312 km/h", accel: "3.2s", wins: "31" },
    number: "03",
  },
];

const FeaturedCars = () => {
  return (
    <section className="relative bg-background py-24 md:py-36 overflow-hidden">
      {/* Background race number watermarks */}
      <div
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 text-[30rem] font-bold leading-none text-foreground/[0.02]"
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        F1
      </div>

      {/* Subtle top border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-8 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between"
        >
          <div>
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
              RACE-BRED <span className="text-primary">MACHINES</span>
            </h2>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground md:mt-0 md:text-right">
            Every car in our fleet has been forged on the circuit and tuned for absolute dominance.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="mb-16 h-px w-full bg-border" />

        {/* Car Cards — Staggered Layout */}
        <div className="space-y-20">
          {cars.map((car, i) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group"
            >
              <div
                className={`relative grid items-center gap-8 md:grid-cols-2 ${
                  i % 2 !== 0 ? "md:direction-rtl" : ""
                }`}
              >
                {/* Image Side */}
                <div
                  className={`relative order-1 ${
                    i % 2 !== 0 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  {/* Large number background */}
                  <div
                    className="pointer-events-none absolute -left-4 -top-10 text-[10rem] font-bold leading-none text-foreground/[0.03] md:text-[14rem]"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {car.number}
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_60px_hsl(0_85%_50%/0.08)]">
                    {/* Gradient accent */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    {/* Red line accent */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <img
                      src={car.image}
                      alt={car.name}
                      className="relative h-48 w-full object-contain transition-transform duration-700 group-hover:scale-105 md:h-64"
                    />
                  </div>
                </div>

                {/* Info Side */}
                <div
                  className={`order-2 ${
                    i % 2 !== 0 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="mb-2 text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                    {car.tagline}
                  </div>
                  <h3
                    className="mb-6 text-3xl font-bold text-foreground md:text-5xl"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {car.name}
                  </h3>

                  {/* Specs Grid */}
                  <div className="mb-8 grid grid-cols-2 gap-4">
                    {[
                      { icon: Zap, label: "Power", value: car.stats.power },
                      { icon: Gauge, label: "Top Speed", value: car.stats.speed },
                      { icon: Timer, label: "0-100 km/h", value: car.stats.accel },
                      { icon: Trophy, label: "Race Wins", value: car.stats.wins },
                    ].map((spec) => (
                      <div
                        key={spec.label}
                        className="rounded-xl border border-border bg-secondary/30 p-4 transition-colors duration-300 group-hover:border-primary/20"
                      >
                        <spec.icon className="mb-2 h-4 w-4 text-primary" />
                        <div
                          className="text-xl font-bold text-foreground"
                          style={{ fontFamily: "'Oswald', sans-serif" }}
                        >
                          {spec.value}
                        </div>
                        <div className="text-[11px] tracking-wider text-muted-foreground uppercase">
                          {spec.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="group/btn inline-flex items-center gap-3 text-sm font-semibold tracking-wider text-foreground uppercase transition-colors hover:text-primary">
                    <span>Full Specifications</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                    <span className="ml-1 h-px flex-1 min-w-[60px] bg-border transition-colors group-hover/btn:bg-primary" />
                  </button>
                </div>
              </div>

              {/* Bottom separator */}
              {i < cars.length - 1 && (
                <div className="mt-20 h-px w-full bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
