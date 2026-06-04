import { motion } from "framer-motion";

const designs = [
  {
    title: "Design de Camiseta",
    image: "/designs/wallpaper.png",
  },
  {
    title: "Topo de Bolo",
    image: "/designs/topobolo.png",
  },
  {
    title: "Arte Esportiva",
    image: "/designs/esportiva.png",
  },
  {
    title: "Social Media",
    image: "/designs/social.png",
  },
  {
    title: "Design Personalizado",
    image: "/designs/design1.png",
  },
  {
    title: "Projeto Criativo",
    image: "/designs/design2.png",
  },
];

export default function DesignGallery() {
  return (
    <section
      id="design"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="text-green-400 uppercase tracking-widest text-sm">
          Design
        </span>

        <h2 className="text-4xl md:text-6xl font-black mt-4">
          Criatividade Além do Código
        </h2>

        <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
          Além do desenvolvimento, também atuo na criação de artes,
          materiais gráficos e projetos visuais personalizados.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {designs.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-slate-900
            "
          >
            <div className="aspect-4/5 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />
            </div>

            <div
              className="
                absolute
                inset-0
                bg-linear-to-t
                from-black
                via-black/20
                to-transparent
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-6
              "
            >
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}