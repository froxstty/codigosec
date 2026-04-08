import React, { useState, useEffect } from 'react';
import { Clock, Shield, CheckCircle, ChevronRight, Menu, Check } from 'lucide-react';
import { motion } from 'framer-motion';

import bonus1 from './assets/b1.png';
import bonus2 from './assets/b2.png';
import bonus3 from './assets/b3.png';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const checkoutLink = 'https://pay.kirvano.com/37368ac2-5678-4e40-88e7-47dcd52c8a9a';

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-sans selection:bg-[#2d6a4f] selection:text-white">
      {/* Editorial Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Menu className="w-6 h-6 text-gray-500 md:hidden" />
            <div className="font-serif font-black text-2xl tracking-tighter text-[#1b4332]">
              S@úde<span className="text-[#b08d57]">Natural</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
            <span className="hover:text-[#2d6a4f] cursor-pointer">Bem-Estar</span>
            <span className="hover:text-[#2d6a4f] cursor-pointer">Longevidade</span>
            <span className="hover:text-[#2d6a4f] cursor-pointer">Receitas</span>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Fake Publication Info */}
        <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-6 flex items-center gap-2">
          <span className="bg-[#1b4332] text-white px-2 py-1 rounded-sm">Especial</span>
          <span>Atualizado hoje</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
          O Segredo Ancestral a Sete Chaves: Como Mulheres Estão Recuperando a Vitalidade (Longe das Farmácias)
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed font-serif">
          As receitas indígenas perdidas que agora revelam o passo a passo seguro para o seu bem-estar, com ingredientes que você já tem em casa.
        </p>

        {/* Advertorial Body */}
        <article className="prose prose-lg max-w-none text-gray-800 mb-12 font-serif leading-relaxed">
          <p>
            Você já se pegou olhando para o espelho, sentindo que falta aquela faísca de energia que costumava ter? Aquela sensação de cansaço constante que parece não ir embora, não importa quantas xícaras de café você tome ou quantas horas de sono tente ter?
          </p>
          <p>
            Se a sua resposta for sim, <strong>você não está sozinha</strong>. E o mais importante: a culpa não é sua.
          </p>
          <p>
            Diariamente somos bombardeadas por soluções empacotadas. Pílulas e mais pílulas que prometem nos devolver a disposição, o alívio para dores incômodas e a paz mental, mas que entregam resultados temporários — se entregarem. A verdade nua e crua é que o nosso corpo está apenas precisando de um retorno às raízes.
          </p>
          
          <div className="bg-gradient-to-r from-[#1b4332]/10 to-transparent p-6 rounded-r-xl border-l-4 border-[#1b4332] my-8 text-xl italic font-medium">
            "A natureza possui a resposta para praticamente todos os desgastes que o ritmo moderno nos impõe. O problema é que o conhecimento de como preparar essas misturas foi abafado com o tempo."
          </div>

          <h3 className="text-2xl font-bold font-sans mt-8 mb-4 text-[#1b4332]">A Redescoberta do Código Ancestral</h3>
          <p>
            Foi justamente buscando respostas para esse esgotamento coletivo que o <strong className="text-[#b08d57]">"Código Ancestral: As Receitas Naturais que Poucos Conhecem"</strong> foi compilado. Trata-se do resgate de sabedorias de tribos que viveram em pura harmonia com os extratos da terra.
          </p>
          <p>
            Elas não precisavam de complexos vitamínicos caros. O segredo estava na <strong>combinação exata</strong> de chás, raízes e rituais simples. Tudo disponível na natureza e hoje, incrivelmente acessível no armário da sua cozinha ou na feira do seu bairro.
          </p>
        </article>

        {/* Offer & Bonuses */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border border-gray-100">
          <div className="p-8 text-center bg-[#1b4332] text-white">
            <h2 className="text-3xl font-black mb-2">Liberação Especial de Acesso</h2>
            <p className="opacity-90">Apenas para leitoras desta matéria</p>
          </div>
          
          <div className="p-6 md:p-10">
            <div className="text-center mb-10">
              <span className="line-through text-gray-400 text-xl font-medium">De R$ 87,99</span>
              <div className="flex items-center justify-center gap-2 text-5xl md:text-6xl font-black text-[#1b4332] mt-2 mb-2">
                <span className="text-2xl mt-2 text-[#b08d57]">R$</span>14,99
              </div>
              <p className="text-emerald-600 font-bold bg-emerald-50 inline-block px-4 py-1 rounded-full text-sm">
                Desconto de R$ 73,00 Aplicado
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <h3 className="font-bold text-center text-xl text-gray-800 uppercase tracking-wide border-b pb-4">O Que Você Recebe Imediatamente:</h3>
              
              {/* Bonus Items */}
              <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <img src={bonus1} alt="Manual de Receitas Naturais" className="w-32 h-auto rounded shadow-md" />
                <div>
                  <div className="bg-[#b08d57] text-[#1b4332] text-xs font-bold px-2 py-1 rounded w-max mb-2 uppercase">Entregável 1</div>
                  <h4 className="font-bold text-lg leading-tight text-gray-900 mb-2">Manual de Receitas Naturais Dos Saberes Ancestrais</h4>
                  <p className="text-gray-600 text-sm">O guia principal com as formulações sagradas para revitalizar sua energia.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <img src={bonus2} alt="Lista Secreta das Ervas Naturais" className="w-32 h-auto rounded shadow-md" />
                <div>
                  <div className="bg-[#b08d57] text-[#1b4332] text-xs font-bold px-2 py-1 rounded w-max mb-2 uppercase">Entregável 2</div>
                  <h4 className="font-bold text-lg leading-tight text-gray-900 mb-2">Lista Secreta das Ervas Naturais Mais Utilizadas</h4>
                  <p className="text-gray-600 text-sm">O dicionário direto ao ponto mostrando qual planta utilizar para cada necessidade.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <img src={bonus3} alt="Método Natural Como Aplicar" className="w-32 h-auto rounded shadow-md" />
                <div>
                  <div className="bg-[#b08d57] text-[#1b4332] text-xs font-bold px-2 py-1 rounded w-max mb-2 uppercase">Entregável 3</div>
                  <h4 className="font-bold text-lg leading-tight text-gray-900 mb-2">Método Natural: Como Aplicar no Dia a Dia</h4>
                  <p className="text-gray-600 text-sm">Rotinas e horários corretos para otimizar os efeitos fisiológicos do bem-estar.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-center justify-center gap-3 text-red-700 font-medium mb-6">
              <Clock className="w-6 h-6 animate-pulse" />
              <span>Atenção: Oferta expira em <strong className="font-mono text-xl">{formatTime(timeLeft)}</strong></span>
            </div>

            <motion.a 
              href={checkoutLink}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full text-center bg-gradient-to-br from-[#1b4332] to-[#0a2318] text-white font-black text-xl md:text-2xl py-5 rounded-2xl shadow-[0_10px_20px_rgba(27,67,50,0.3)] hover:shadow-[0_15px_30px_rgba(27,67,50,0.4)] transition-all"
            >
              SIM! QUERO MEU ACESSO COM 80% OFF
            </motion.a>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm font-medium text-gray-500">
              <Shield className="w-4 h-4 text-emerald-500" /> Compra 100% Segura. Acesso Imediato.
            </div>
          </div>
        </div>

        {/* Guarantees and Social Proof (Text for now) */}
        <div className="py-10 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-center mb-8">Por que milhares de mulheres estão aderindo?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-700 font-serif mb-4">"Achei que era bobeira, mas a diferença na minha disposição logo na primeira semana foi surreal. Finalmente encontrei a paz e energia para brincar com meus netos sem sentir dor no corpo."</p>
              <p className="font-bold text-sm text-gray-900">- Maria Helena, 58</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex text-yellow-400 mb-2">★★★★★</div>
              <p className="text-gray-700 font-serif mb-4">"O método diário é muito fácil. Não precisa de nada caro, tudo eu já tinha na geladeira ou comprei na vendinha da esquina. Minhas noites de sono são outras."</p>
              <p className="font-bold text-sm text-gray-900">- Solange V., 62</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm">
        <div className="max-w-3xl mx-auto px-4">
          <p className="mb-4">Código Ancestral © 2024. Todos os direitos reservados.</p>
          <p className="mb-8 text-xs opacity-75 max-w-2xl mx-auto">
            Este site não faz parte do website do Facebook ou do Facebook Inc. Além disso, este site não é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc. Os resultados variam de pessoa para pessoa. As informações aqui prestadas não substituem a consulta com seu médico.
          </p>
          <div className="flex justify-center gap-4 text-xs font-semibold uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
