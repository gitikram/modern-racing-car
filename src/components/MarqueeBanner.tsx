import { motion } from "framer-motion";

interface MarqueeBannerProps {
  text: string;
}

const MarqueeBanner = ({ text }: MarqueeBannerProps) => {
  const items = Array(8).fill(text);

  return (
    <section className="relative overflow-hidden border-y border-border bg-card py-6">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-4 flex items-center gap-4 text-4xl font-bold uppercase tracking-wider text-foreground md:text-6xl"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {item}
            <span className="inline-block h-3 w-3 rounded-full bg-primary" />
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default MarqueeBanner;
