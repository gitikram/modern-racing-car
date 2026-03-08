import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Apex Motors completely transformed my driving experience. The precision engineering and attention to detail is something I've never seen anywhere else.",
    author: "James Whitfield",
    role: "Professional Driver",
  },
  {
    quote:
      "From the initial consultation to delivery, every step was handled with the kind of professionalism you'd expect from a world-class racing outfit.",
    author: "Elena Vasquez",
    role: "Collector & Enthusiast",
  },
];

const logos = ["Ferrari", "McLaren", "Porsche", "Aston Martin", "Lotus"];

const TestimonialSection = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-8 text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            Trusted by leading names in motorsport
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-lg font-bold tracking-wider text-muted-foreground/40 uppercase transition-colors duration-300 hover:text-foreground"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative rounded-2xl border border-border bg-card p-8 md:p-10"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/40" />
              <p className="mb-6 text-lg leading-relaxed text-foreground md:text-xl">
                "{t.quote}"
              </p>
              <div>
                <div
                  className="font-bold text-foreground"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {t.author}
                </div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
              {/* Accent corner */}
              <div className="absolute right-0 top-0 h-1 w-20 rounded-bl-full bg-primary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
