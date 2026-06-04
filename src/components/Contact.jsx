import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-32 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          max-w-5xl
          mx-auto
          rounded-[40px]
          border
          border-slate-800
          bg-slate-900/60
          backdrop-blur-sm
          p-12
          text-center
        "
      >
        <span className="text-green-400 uppercase tracking-widest text-sm">
          Contato
        </span>

        <h2 className="text-4xl md:text-6xl font-black mt-4">
          Vamos Conversar?
        </h2>

        <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-8">
          Seja para um projeto, uma oportunidade profissional,
          uma parceria ou apenas trocar ideias sobre tecnologia,
          design e inovação.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5584991014561"
            target="_blank"
            rel="noreferrer"
            className="
              px-6 py-4
              rounded-2xl
              bg-green-500
              text-black
              font-semibold
              flex items-center gap-3
              hover:scale-105
              transition-all
            "
          >
            <FaWhatsapp size={22} />
            WhatsApp
          </a>

          {/* Email */}
          <a
            href="mailto:jose.dev0802@gmail.com"
            className="
              px-6 py-4
              rounded-2xl
              border
              border-slate-700
              flex items-center gap-3
              hover:border-green-500
              transition-all
            "
          >
            <Mail size={20} />
            E-mail
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/jleandro92"
            target="_blank"
            rel="noreferrer"
            className="
              px-6 py-4
              rounded-2xl
              border
              border-slate-700
              flex items-center gap-3
              hover:border-green-500
              transition-all
            "
          >
            <FaGithub size={20} />
            GitHub
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/jotta.tsx/"
            target="_blank"
            rel="noreferrer"
            className="
              px-6 py-4
              rounded-2xl
              border
              border-slate-700
              flex items-center gap-3
              hover:border-green-500
              transition-all
            "
          >
            <FaInstagram size={20} />
            Instagram
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-500">
            Desenvolvedor Full Stack • Designer Criativo • Criador de Projetos Digitais
          </p>
        </div>
      </motion.div>
    </section>
  );
}