import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Política de Privacidade' : 'Termos de Uso';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#FAF6EE] px-6 py-5 border-b border-[#DAA520]/25 flex items-center justify-between">
          <h3 id="legal-modal-title" className="text-xl font-bold text-stone-900">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 max-h-[65vh] overflow-y-auto text-sm text-stone-700 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                A <strong>La Vie Clínica Integrada</strong> valoriza a sua privacidade e está comprometida com a proteção dos dados pessoais dos nossos pacientes e usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
              <h4 className="font-bold text-stone-900 text-base mt-2">1. Coleta de Informações</h4>
              <p>
                Coletamos dados estritamente necessários para o agendamento de consultas e atendimento clínico humanizado, como nome completo, telefone para contato via WhatsApp e informações pertinentes à anamnese de saúde.
              </p>
              <h4 className="font-bold text-stone-900 text-base mt-2">2. Sigilo Médico e Profissional</h4>
              <p>
                Todos os dados de saúde são protegidos pelo mais rigoroso sigilo médico, odontológico, psicológico, fisioterapêutico e nutricional, conforme os códigos de ética de cada conselho de classe.
              </p>
              <h4 className="font-bold text-stone-900 text-base mt-2">3. Compartilhamento</h4>
              <p>
                Nunca comercializamos dados pessoais com terceiros. O compartilhamento ocorre apenas quando expressamente autorizado pelo paciente ou exigido por lei.
              </p>
            </>
          ) : (
            <>
              <p>
                Bem-vindo ao website oficial da <strong>La Vie Clínica Integrada</strong>. Ao navegar nesta página e utilizar nossos canais de agendamento, você concorda com as disposições a seguir:
              </p>
              <h4 className="font-bold text-stone-900 text-base mt-2">1. Finalidade do Conteúdo</h4>
              <p>
                As informações divulgadas neste portal têm caráter exclusivamente informativo sobre nossa estrutura, corpo clínico e serviços em Santa Maria/RS. Não substituem uma avaliação e consulta presencial individualizada.
              </p>
              <h4 className="font-bold text-stone-900 text-base mt-2">2. Agendamentos e Pontualidade</h4>
              <p>
                Os agendamentos são confirmados pela nossa equipe via WhatsApp ou telefone. Prezamos pela pontualidade em prol do conforto de todos os pacientes.
              </p>
              <h4 className="font-bold text-stone-900 text-base mt-2">3. Propriedade Intelectual</h4>
              <p>
                Todos os logotipos, marcas, imagens e textos pertencem à La Vie Clínica Integrada, sendo vedada a reprodução sem consentimento prévio.
              </p>
            </>
          )}
        </div>

        <div className="bg-stone-50 px-6 py-4 border-t border-stone-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full text-sm font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
