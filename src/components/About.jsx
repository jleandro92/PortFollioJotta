import { motion } from "framer-motion";
import { Code2, Palette, Trophy } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desenvolvedor Full Stack",
    description:
      "Construo aplicações web e mobile utilizando React, React Native, Java, Spring Boot e bancos de dados modernos.",
  },
  {
    icon: Palette,
    title: "Designer Criativo",
    description:
      "Criação de identidades visuais, wallpapers, materiais gráficos e interfaces focadas na experiência do usuário.",
  },
  {
    icon: Trophy,
    title: "Criador de Produtos",
    description:
      "Transformo ideias em soluções digitais, desenvolvendo projetos próprios voltados para necessidades reais.",
  },
];

const timeline = [
  {
    year: "2021",
    title: "Início da Graduação em TADS",
    description:
      "Primeiro contato mais aprofundado com lógica de programação, banco de dados e desenvolvimento de sistemas.",
  },
  {
    year: "2021",
    title: "Fundamentos do Desenvolvimento",
    description:
      "Aprendizado de programação, modelagem de sistemas, análise de requisitos e estruturação de projetos.",
  },
  {
    year: "2021",
    title: "Primeiros Sistemas",
    description:
      "Desenvolvimento dos primeiros projetos acadêmicos e aplicações completas para consolidar conhecimentos.",
  },
  {
    year: "2024",
    title: "React Native & Desenvolvimento Mobile",
    description:
      "Criação de aplicativos multiplataforma utilizando React Native, Expo e TypeScript.",
  },
  {
    year: "2025",
    title: "Backend com Spring Boot",
    description:
      "Desenvolvimento de APIs REST, autenticação, integração com bancos de dados e sistemas completos.",
  },
  {
    year: "2025",
    title: "Design e Projetos Criativos",
    description:
      "Produção de artes digitais, wallpapers, materiais gráficos e projetos visuais personalizados.",
  },
  {
    year: "2026",
    title: "LigaPro e Projetos Próprios",
    description:
      "Desenvolvimento de soluções voltadas para gestão esportiva e criação de produtos digitais próprios.",
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="text-green-400 uppercase tracking-widest text-sm">
          Sobre Mim
        </span>

        <h2 className="text-4xl md:text-6xl font-black mt-4">
          Muito além do código
        </h2>

        <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
           Olá! Sou Jotta, desenvolvedor Full Stack em formação e designer criativo
            apaixonado por transformar ideias em experiências digitais.

            <br /><br />

            Minha jornada começou em 2021, durante a graduação em Tecnologia em
            Análise e Desenvolvimento de Sistemas (TADS). Desde então, venho
            desenvolvendo projetos próprios para aprimorar minhas habilidades em
            desenvolvimento web, mobile e backend, sempre buscando aprender novas
            tecnologias e criar soluções que façam a diferença.

            <br /><br />

            Paralelamente à programação, atuo como designer, criando artes
            personalizadas, materiais gráficos, wallpapers e conteúdos visuais.
            Essa combinação entre tecnologia e design me permite desenvolver
            produtos que não apenas funcionam bem, mas também proporcionam uma
            experiência visual agradável e intuitiva.

            <br /><br />

            Atualmente trabalho em projetos pessoais como o LigaPro, uma plataforma
            voltada para a gestão de campeonatos esportivos amadores, além de
            continuar explorando novas ideias, tecnologias e oportunidades de
            crescimento profissional.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 mb-20">

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-black text-green-400">2021</h3>
          <p className="text-slate-400 mt-2">
            Início da Jornada
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-black text-green-400">10+</h3>
          <p className="text-slate-400 mt-2">
            Projetos Desenvolvidos
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-black text-green-400">5+</h3>
          <p className="text-slate-400 mt-2">
            Tecnologias Principais
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
          <h3 className="text-4xl font-black text-green-400">∞</h3>
          <p className="text-slate-400 mt-2">
            Vontade de Aprender
          </p>
        </div>

      </div>
      </motion.div>

      {/* O que faço */}
      <div className="grid md:grid-cols-3 gap-6 mb-24">
        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-green-500 transition-all"
            >
              <Icon
                size={42}
                className="text-green-400 mb-6"
              />

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Timeline */}
      <div>
        <div className="text-center mb-14">
          <h3 className="text-3xl font-bold">
            Minha Jornada
          </h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Linha central */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-700 -translate-x-1/2 hidden md:block" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`relative mb-12 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:w-[45%]">
                <span className="text-green-400 font-bold">
                  {item.year}
                </span>

                <h4 className="text-xl font-bold mt-2">
                  {item.title}
                </h4>

                <p className="text-slate-400 mt-3">
                  {item.description}
                </p>
              </div>

              <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-green-400 shadow-lg shadow-green-500/50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}