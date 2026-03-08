import { motion } from "framer-motion";
import f1Studio from "@/assets/f1-studio.jpg";
import f1Track from "@/assets/f1-track.jpg";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We dive deep into your driving style, goals, and the soul of your machine to craft a vision.",
  },
  {
    number: "02",
    title: "Engineering",
    description:
      "Our team designs every modification with surgical precision, balancing power and reliability.",
  },
  {
    number: "03",
    title: "Fabrication",
    description:
      "Hand-built components forged from the finest materials, assembled in our state-of-the-art facility.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "Track-tested and street-proven, your machine is returned transformed and ready to dominate.",
  },
];

const AboutSection = () => {
  return (
    <section className="relative bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        {/* Top row — two images + text */}
        <div className="mb-24 grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={f1Track}
                alt="Formula 1 car racing on track"
                className="h-[400px] w-full object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-sm font-medium tracking-[0.3em] uppercase text-primary">
                Our Story
              </span>
            </div>
            <h2
              className="mb-6 text-4xl font-bold text-foreground md:text-5xl"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              BORN FROM THE
              <br />
              <span className="text-primary">RACETRACK</span>
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              For over two decades, we've been at the intersection of motorsport
              heritage and cutting-edge engineering. Every bolt tightened, every
              curve sculpted — it all traces back to the relentless pursuit of
              speed.
            </p>
            <div className="flex gap-8">
              <div>
                <div
                  className="text-3xl font-bold text-foreground"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  24<span className="text-primary">+</span>
                </div>
                <div className="text-xs uppercase text-muted-foreground">Years of Legacy</div>
              </div>
              <div>
                <div
                  className="text-3xl font-bold text-foreground"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  500<span className="text-primary">+</span>
                </div>
                <div className="text-xs uppercase text-muted-foreground">Cars Built</div>
              </div>
              <div>
                <div
                  className="text-3xl font-bold text-foreground"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  98<span className="text-primary">%</span>
                </div>
                <div className="text-xs uppercase text-muted-foreground">Client Retention</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h3
            className="text-3xl font-bold text-foreground md:text-4xl"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            A Streamlined Process for
            <br />
            <span className="text-primary">Lasting Results</span>
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/40"
            >
              <div
                className="mb-3 text-sm font-bold text-primary"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {step.number}
              </div>
              <h4
                className="mb-2 text-lg font-bold text-foreground"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {step.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Large image below process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 overflow-hidden rounded-2xl"
        >
          <img
            src={f1Studio}
            alt="Formula 1 car in studio"
            className="h-[300px] w-full object-cover md:h-[450px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
