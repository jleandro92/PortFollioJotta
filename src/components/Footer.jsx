import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo/Nome */}
          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              bg-linear-to-r
              from-green-400
              to-emerald-600
              bg-clip-text
              text-transparent
            "
          >
            JOTTA
          </h2>

          {/* Cargo */}
          <p className="mt-4 text-slate-400 text-lg">
            Desenvolvedor Full Stack • Designer Criativo • Criador de Projetos
          </p>

          {/* Frase */}
          <p className="mt-8 text-slate-500 max-w-xl mx-auto leading-7">
            Transformando ideias em experiências digitais através
            da tecnologia, criatividade e inovação.
          </p>

          {/* Navegação rápida */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <a
              href="#home"
              className="text-slate-400 hover:text-green-400 transition"
            >
              Início
            </a>

            <a
              href="#sobre"
              className="text-slate-400 hover:text-green-400 transition"
            >
              Sobre
            </a>

            <a
              href="#skills"
              className="text-slate-400 hover:text-green-400 transition"
            >
              Skills
            </a>

            <a
              href="#projetos"
              className="text-slate-400 hover:text-green-400 transition"
            >
              Projetos
            </a>

            <a
              href="#contato"
              className="text-slate-400 hover:text-green-400 transition"
            >
              Contato
            </a>
          </div>

          {/* Linha */}
          <div className="border-t border-slate-800 mt-12 pt-8">

            <p className="flex items-center justify-center gap-2 text-slate-500">
              Feito com
              <Heart
                size={16}
                className="text-red-500"
              />
              por Jotta
            </p>

            <p className="mt-3 text-slate-600 text-sm">
              © {new Date().getFullYear()} Jotta. Todos os direitos reservados.
            </p>

          </div>
        </motion.div>

      </div>
    </footer>
  );
}