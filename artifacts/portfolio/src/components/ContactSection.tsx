import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative pb-24" data-testid="section-contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
          Let's Build Something<span className="text-primary">.</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
          Currently open for new opportunities and interesting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          href="mailto:asadbalqani@gmail.com"
          className="group flex flex-col items-center justify-center p-12 bg-secondary/20 border border-border hover:border-primary/50 transition-colors rounded-sm"
          data-testid="contact-email"
        >
          <Mail className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <h3 className="text-lg font-medium text-white mb-2">Email</h3>
          <p className="text-muted-foreground font-mono text-sm">asadbalqani@gmail.com</p>
        </motion.a>

        <div className="space-y-6">
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href="tel:+923176854356"
            className="flex items-center gap-6 p-6 bg-secondary/10 border border-border/50 hover:border-primary/30 transition-colors rounded-sm group"
            data-testid="contact-phone"
          >
            <div className="p-3 bg-secondary/30 rounded-full group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-mono mb-1">Phone</p>
              <p className="text-white">+92 317 685 4356</p>
            </div>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="https://linkedin.com/in/theasadsahir"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 p-6 bg-secondary/10 border border-border/50 hover:border-primary/30 transition-colors rounded-sm group"
            data-testid="contact-linkedin"
          >
            <div className="p-3 bg-secondary/30 rounded-full group-hover:bg-primary/20 transition-colors">
              <Linkedin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-mono mb-1">LinkedIn</p>
              <p className="text-white">linkedin.com/in/theasadsahir</p>
            </div>
          </motion.a>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-6 p-6 bg-secondary/10 border border-border/50 rounded-sm"
          >
            <div className="p-3 bg-secondary/30 rounded-full">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-mono mb-1">Location</p>
              <p className="text-white">Faisal Town, Lahore, Pakistan</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Asad Ullah. All rights reserved.</p>
        <p className="font-mono text-xs">Engineered with precision.</p>
      </div>
    </section>
  );
}
