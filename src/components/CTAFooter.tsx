import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import f1Car from "@/assets/f1-hero-car.png";

const footerLinks = {
  Company: ["About", "Careers", "Press", "Contact"],
  Services: ["Performance", "Fabrication", "Restoration", "Track Days"],
  Social: ["Instagram", "YouTube", "Twitter", "LinkedIn"],
};

const CTAFooter = () => {
  return (
    <>
      {/* CTA Section — Enhanced */}
      <section className="relative overflow-hidden bg-primary py-28 md:py-40">
        {/* Layered gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(0_85%_60%/0.3),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(0_0%_0%/0.3),transparent_60%)]" />

        {/* Decorative circles */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-primary-foreground/10" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-primary-foreground/5" />
        <div className="absolute -bottom-16 -left-16 h-80 w-80 rounded-full border border-primary-foreground/10" />

        {/* Animated car silhouette */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 0.08, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -bottom-10 -right-10 hidden w-[600px] md:block"
        >
          <img src={f1Car} alt="" className="w-full opacity-100 brightness-0 invert" />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-8 md:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-10 bg-primary-foreground/40" />
                <span className="text-sm font-medium tracking-[0.3em] text-primary-foreground/60 uppercase">
                  Let's build together
                </span>
              </div>
              <h2
                className="mb-6 text-5xl font-bold leading-[0.95] text-primary-foreground md:text-7xl"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                READY TO
                <br />
                UNLEASH THE
                <br />
                <span className="relative">
                  BEAST
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-primary-foreground/30"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
                ?
              </h2>
              <p className="max-w-md text-base leading-relaxed text-primary-foreground/60">
                Get in touch with our engineering team and let's build something
                extraordinary together. From concept to championship.
              </p>

              {/* Contact hints */}
              <div className="mt-8 flex flex-col gap-3">
                {[
                  { icon: Phone, text: "+1 (555) APEX-001" },
                  { icon: Mail, text: "team@apexmotors.com" },
                  { icon: MapPin, text: "Monaco, Monte Carlo" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-primary-foreground/40" />
                    <span className="text-sm text-primary-foreground/50">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-5 md:items-end"
            >
              {/* Primary CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 rounded-full bg-primary-foreground px-12 py-6 text-sm font-bold tracking-wide text-primary uppercase shadow-[0_20px_60px_hsl(0_0%_0%/0.3)] transition-all hover:gap-5 hover:shadow-[0_25px_80px_hsl(0_0%_0%/0.4)]"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              {/* Secondary CTA */}
              <button className="group flex items-center gap-2 rounded-full border border-primary-foreground/20 px-10 py-5 text-sm font-semibold tracking-wide text-primary-foreground/80 uppercase transition-all hover:border-primary-foreground/40 hover:text-primary-foreground">
                Schedule a Call
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Trust badge */}
              <div className="mt-4 text-right">
                <p className="text-xs text-primary-foreground/30">
                  Trusted by 200+ racing teams worldwide
                </p>
                <div className="mt-2 flex items-center justify-end gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-1.5 w-1.5 rounded-full bg-primary-foreground/40" />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-primary-foreground/50">5.0</span>
                </div>
              </div>
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
