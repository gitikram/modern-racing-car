import { motion } from "framer-motion";
import f1Car from "@/assets/f1-hero-car.png";

const HeroCarShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      {/* Subtle gradient top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Ambient glow behind car */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-primary/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-8 md:px-16">
        {/* Background text */}
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[6rem] font-bold leading-none text-foreground/[0.02] md:text-[12rem]"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          LEGEND
        </div>

        {/* Car image with animation */}
        <motion.div
          initial={{ opacity: 0, x: 120, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          {/* Floating animation wrapper */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={f1Car}
              alt="Formula 1 Racing Car"
              className="mx-auto w-full max-w-5xl object-contain drop-shadow-[0_20px_60px_hsl(0_85%_50%/0.15)]"
            />
          </motion.div>

          {/* Ground shadow */}
          <div className="mx-auto mt-4 h-4 w-3/4 max-w-3xl rounded-full bg-foreground/[0.06] blur-xl" />
        </motion.div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { label: "World Championships", value: "6×" },
            { label: "Grand Prix Wins", value: "91" },
            { label: "Pole Positions", value: "65" },
            { label: "Fastest Laps", value: "77" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-bold text-foreground md:text-4xl"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCarShowcase;
