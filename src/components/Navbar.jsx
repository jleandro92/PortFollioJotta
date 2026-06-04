import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <h1 className="font-black text-xl">
          <span className="text-green-400">J</span>OTTA
        </h1>

        <div className="hidden md:flex gap-8 text-slate-300">
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#skills">Skills</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>

        <button className="md:hidden">
          <Menu />
        </button>

      </nav>
    </header>
  );
}