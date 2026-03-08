import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const services = [
  {
    title: "Performance Tuning",
    description:
      "Precision-engineered upgrades that push every component to its absolute limit, extracting maximum horsepower and torque from your machine.",
  },
  {
    title: "Aerodynamic Design",
    description:
      "Wind-tunnel tested bodywork and spoiler packages that slice through air resistance, delivering unmatched downforce at any speed.",
  },
  {
    title: "Custom Fabrication",
    description:
      "Hand-crafted carbon fiber and titanium components built to your exact specifications, blending lightweight construction with brutal strength.",
  },
  {
    title: "Track Engineering",
    description:
      "Race-day suspension geometry, brake calibration, and telemetry analysis that transforms your car into a corner-carving weapon.",
  },
  {
    title: "Heritage Restoration",
    description:
      "Meticulous revival of iconic racing machines, preserving their legendary soul while integrating modern reliability standards.",
  },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-sm font-medium tracking-[0.3em] uppercase text-primary">
              What We Do
            </span>
          </div>
          <h2
            className="text-4xl font-bold text-foreground md:text-6xl"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            OUR <span className="text-primary">EXPERTISE</span>
          </h2>
        </motion.div>

        <div className="divide-y divide-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-between py-7 transition-all duration-300 md:py-9">
                <div className="flex-1">
                  <h3
                    className={`text-2xl font-bold transition-colors duration-300 md:text-4xl ${
                      hoveredIndex === i
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <motion.p
                    initial={false}
                    animate={{
                      height: hoveredIndex === i ? "auto" : 0,
                      opacity: hoveredIndex === i ? 1 : 0,
                      marginTop: hoveredIndex === i ? 12 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="max-w-2xl overflow-hidden text-sm leading-relaxed text-muted-foreground md:text-base"
                  >
                    {service.description}
                  </motion.p>
                </div>
                <ChevronRight
                  className={`h-6 w-6 transition-all duration-300 ${
                    hoveredIndex === i
                      ? "translate-x-1 text-primary"
                      : "text-muted-foreground"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
