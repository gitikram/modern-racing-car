import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const navLinks = ["Home", "Cars", "About", "Contact"];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dm1zvc99k/video/upload/v1772968401/Whisk_ijy1ijnxcjmygzm00cz0mgotitm3qtlzujzi1in_ucwjn2.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navbar */}
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center justify-between px-8 py-6 md:px-16"
        >
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <span
              className="text-lg font-bold tracking-widest text-foreground uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              APEX MOTORS
            </span>
          </div>
          <button className="rounded-full border border-foreground/20 bg-foreground/5 px-6 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:text-primary">
            Contact Us
          </button>
        </motion.nav>

        {/* Hero Content */}
        <div className="flex flex-1 items-center px-8 md:px-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="text-sm font-medium tracking-[0.3em] text-primary uppercase">
                  Engineered for speed
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6 text-6xl font-bold leading-[0.95] tracking-tight text-foreground md:text-8xl"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              SPEED.
              <br />
              <span className="text-primary">POWER.</span>
              <br />
              PRECISION.
            </motion.h1>

            <motion.p
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-10 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Born on the track, built for the road. Experience the raw
              intensity of machines designed to dominate every curve.
            </motion.p>

            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-6"
            >
              <button className="group flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-all hover:gap-5 hover:bg-primary/90 hover:shadow-[0_0_30px_hsl(0_85%_50%/0.4)]">
                Explore
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="text-sm font-medium tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground">
                Watch Film
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-end justify-between px-8 pb-8 md:px-16">
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <div className="h-10 w-px bg-primary" />
            <span
              className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase"
              style={{ writingMode: "vertical-rl" }}
            >
              Scroll
            </span>
          </motion.div>

          {/* Floating Bottom Nav */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="rounded-full border border-foreground/10 bg-foreground/5 px-2 py-2 backdrop-blur-md"
          >
            <div className="flex items-center gap-1">
              {navLinks.map((link, i) => (
                <button
                  key={link}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                    i === 0
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="hidden items-center gap-8 md:flex"
          >
            <div className="text-right">
              <div
                className="text-2xl font-bold text-foreground"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                2.9<span className="text-primary">s</span>
              </div>
              <div className="text-xs text-muted-foreground">0-100 km/h</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-right">
              <div
                className="text-2xl font-bold text-foreground"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                340<span className="text-primary">+</span>
              </div>
              <div className="text-xs text-muted-foreground">km/h top speed</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
