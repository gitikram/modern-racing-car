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
      {/* CTA + Footer Combined — Formance-inspired */}
      <section className="relative overflow-hidden bg-primary">
        {/* Vertical gradient stripes */}
        <div className="absolute inset-0 flex">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="flex-1"
              style={{
                background: `linear-gradient(to bottom, hsl(0 85% ${Math.max(18, 50 - i * 5)}% / ${0.15 + i * 0.05}), transparent)`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary to-primary" />

        {/* Animated car silhouette */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 0.06, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -bottom-10 -right-10 hidden w-[600px] md:block"
        >
          <img src={f1Car} alt="" className="w-full brightness-0 invert" />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-8 pt-28 md:px-16 md:pt-40">
          {/* CTA Content */}
          <div className="grid items-start gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="mb-6 text-5xl font-bold leading-[1.05] text-primary-foreground md:text-7xl"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                READY TO
                <br />
                ACCELERATE YOUR
                <br />
                LEGACY?
              </h2>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-primary-foreground/60">
                Let Apex Motors be your partner in achieving extraordinary results.
                Whether it's performance tuning, race preparation, or building your dream machine — we're here to deliver.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 rounded-full bg-primary-foreground px-10 py-5 text-sm font-bold tracking-wide text-primary uppercase shadow-[0_20px_60px_hsl(0_0%_0%/0.3)] transition-all hover:gap-5"
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                Get in Touch
              </motion.button>
            </motion.div>

            {/* Footer links — right side */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="grid grid-cols-2 gap-8 md:justify-items-end"
            >
              {Object.entries(footerLinks).map(([heading, links]) => (
                <div key={heading} className="md:text-right">
                  <h4
                    className="mb-4 text-sm font-bold tracking-wider text-primary-foreground/40 uppercase"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {heading}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-lg font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Contact info in 4th slot */}
              <div className="md:text-right">
                <h4
                  className="mb-4 text-sm font-bold tracking-wider text-primary-foreground/40 uppercase"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  Contact
                </h4>
                <ul className="space-y-3">
                  {[
                    { icon: Phone, text: "+1 (555) APEX" },
                    { icon: Mail, text: "team@apex.com" },
                    { icon: MapPin, text: "Monaco" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-2 md:justify-end">
                      <item.icon className="h-3.5 w-3.5 text-primary-foreground/40" />
                      <span className="text-lg font-medium text-primary-foreground/80">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Giant brand watermark at bottom */}
          <div className="mt-16 overflow-hidden pb-0">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative -mb-[0.15em] flex items-end"
            >
              <span
                className="text-[6rem] font-bold leading-[0.85] tracking-tight text-primary-foreground/90 md:text-[14rem] lg:text-[18rem]"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Apex
              </span>
              {/* Red dot accent */}
              <div className="mb-4 ml-2 h-6 w-6 rounded-full bg-primary-foreground md:mb-8 md:h-10 md:w-10 lg:mb-12 lg:h-14 lg:w-14" />
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-primary-foreground/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-8 py-5 md:flex-row md:px-16">
            <p className="text-xs text-primary-foreground/30">
              © 2026 Apex Motors. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-primary-foreground/30 transition-colors hover:text-primary-foreground/60"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTAFooter;
