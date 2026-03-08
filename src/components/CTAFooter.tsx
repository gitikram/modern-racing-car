import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  Company: ["About", "Careers", "Press", "Contact"],
  Services: ["Performance", "Fabrication", "Restoration", "Track Days"],
  Social: ["Instagram", "YouTube", "Twitter", "LinkedIn"],
};

const CTAFooter = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary py-24 md:py-32">
        {/* Decorative */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/10" />
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary-foreground/5" />
        <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-primary-foreground/5" />

        <div className="relative mx-auto max-w-7xl px-8 md:px-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="mb-4 text-4xl font-bold text-primary-foreground md:text-6xl"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                READY TO
                <br />
                UNLEASH THE
                <br />
                BEAST?
              </h2>
              <p className="max-w-md text-base leading-relaxed text-primary-foreground/70">
                Get in touch with our engineering team and let's build something
                extraordinary together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-4 md:items-end"
            >
              <button className="group flex items-center gap-3 rounded-full bg-primary-foreground px-10 py-5 text-sm font-bold tracking-wide text-primary uppercase transition-all hover:gap-5 hover:shadow-2xl">
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="text-sm font-medium tracking-wide text-primary-foreground/60 uppercase transition-colors hover:text-primary-foreground">
                Schedule a Call →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-8 md:px-16">
          <div className="mb-14 grid gap-10 md:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary" />
                <span
                  className="text-lg font-bold tracking-widest text-foreground uppercase"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  APEX MOTORS
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Where engineering meets obsession. Born on the track, built for
                legends.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4
                  className="mb-4 text-sm font-bold tracking-wider text-foreground uppercase"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {heading}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <p className="text-xs text-muted-foreground">
              © 2026 Apex Motors. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Terms
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Cookies
              </a>
            </div>
          </div>

          {/* Giant watermark text */}
          <div className="mt-12 overflow-hidden">
            <div
              className="-mb-6 text-center text-[8rem] font-bold leading-none tracking-tight text-border/50 md:text-[14rem]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              APEX
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
