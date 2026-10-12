export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'Sparkles' | 'Heart' | 'Activity' | 'Apple';
  tag: string;
  benefits: string[];
  features: string[];
  targetAudience: string;
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export const CLINIC_INFO = {
  name: "La Vie Clinica Integrada",
  legalName: "La Vie Clínica Integrada Ltda.",
  slogan: "Muito mais que uma clínica, um espaço pensado para cuidar de pessoas.",
  heroHeading: "La Vie Clinica Integrada: Seu Centro de Saúde e Beleza em Santa Maria/RS",
  heroSubheading: "Bem-estar e Qualidade de Vida ao Seu Alcance",
  heroDescription:
    "Com infraestrutura moderna, acolhimento humanizado e equipe multidisciplinar, proporcionamos experiências transformadoras de cuidado, estética e saúde integral no coração de Santa Maria.",
  aboutHeading: "Sobre a La Vie",
  aboutParagraphs: [
    "A La Vie Clínica Integrada nasceu com o firme propósito de redefinir o cuidado com a saúde e o bem-estar em Santa Maria/RS. Criamos um ecossistema harmônico onde profissionais de excelência e pacientes se encontram em um ambiente sofisticado, seguro e acolhedor.",
    "Nossa filosofia compreende que a beleza e a saúde caminham de mãos dadas. Ao integrar especialidades fundamentais como Odontologia, Psicologia, Fisioterapia e Nutrição, proporcionamos uma assistência 360°, onde cada paciente é compreendido em sua individualidade, com pontualidade, discrição e respeito absoluto.",
    "Cada detalhe da nossa estrutura foi planejado para transformar consultas e procedimentos em momentos de conforto e renovação, aliando tecnologia atualizada a um acolhimento genuinamente humanizado."
  ],
  phone: "(55) 3028-1700",
  whatsapp: "(55) 99684-1700",
  whatsappRaw: "5555996841700",
  whatsappUrl:
    "https://wa.me/5555996841700?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20La%20Vie%20Cl%C3%ADnica%20Integrada.",
  instagramUrl: "https://www.instagram.com/lavieclinicc",
  instagramHandle: "@lavieclinicc",
  email: "contato@lavieclinica.com.br",
  address: {
    street: "Rua Demétrio Ribeiro, 170",
    neighborhood: "Duque de Caxias",
    city: "Santa Maria",
    state: "RS",
    zip: "97050-160",
    full: "Rua Demétrio Ribeiro, 170 - Duque de Caxias, Santa Maria/RS, CEP 97050-160"
  },
  hours: [
    { days: "Segunda a Sexta", period: "08:00 às 19:30" },
    { days: "Sábado", period: "08:30 às 13:00" },
    { days: "Domingo e Feriados", period: "Fechado (Plantão WhatsApp)" }
  ],
  images: {
    // Foto 1 (Fachada real La Vie Clínica Integrada fornecida)
    facade:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QtMMAHCIx06ViLLfgo6OQdOeq1m72-JoQeZ-EyuBDg6ijzYGtdVUlc3unacLnE2cdNlN3cu12hHnBVfV5kfZliWd0YR2N5rATXxT64kC3eknPKHLxcZHYjZG--z2OyWHLzX7m84g=w1200",
    facadeFallback:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
    // 2ª foto real da clínica fornecida
    interior1:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RbMjYkizUiiHcFiJUxSnqpaGq9Mv5mpotC3kPfsOqVS7DdqLBzT4820n80fxQslIEuky14azVnQ74keZRIjJhXj05Za-kBc2aaONdX72zbPaTTFHjMjpO1uY0mLJTI8z27Xjv1=w1200",
    interior1Fallback:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    // 3ª foto real da clínica fornecida
    interior2:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SP3JU5KO4L5FyipJub50hcWbhtuz7wTDy3eN38-HEIRYBQFV7b8HBWjAnHXDNE0iK9qCSjj5FllESR7D4G_QvcTUchF5UwHyyl8jpIUdW4CVUZceDrHNg_HMvv5XhNZvGGrM2B=w1200",
    interior2Fallback:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80"
  }
};

export const GALLERY_PHOTOS = [
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T_nwn_JqFNZ13v024bIN0nDyGalECYEs8SlGIh_oimtW5UUwnDfRvh9Mn8bzZN3DnTp8UQKP62TKAfNcZjzbe_r_FUPR2UXSB6u6n2oMnKCVS_8UZmZBcRlt2ODQMmtheOCRXv=w1200",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S_h7rZsWVq-YymRpNatTzrn8LX2Ll7tNvTZL8MyQrSIQ1TNsKP0dlvoOs3XjuiVnO0T64ysyi4KOVIkOyXMwEe0tTGgM_BrWZr6eDu3PFnf9RYaWshG49Qk_272FihNfanLf_c=w1200",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q1hnsJGvpz-_leXLotnqSbGkMX-06xVYYNf-VVpiuE2pj6U_zAA8Jfu10d3UKhFRq1DJaYLSnIYfxqH8QpJMP1Xw87zwgZ6JSqjj71mmVFZLnbNe1TK6mqg5HvDEVFyR9db7IL=w1200",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RWEQNKu562JFxHzJ-UGl1Wcq--5UlnQ3xCCRWt60XZCz-8yJyqLHTFxMA4yw2C_JM5vJlBebMOcTadkdzKuKMnciC_lDFoiPoF4nKUm77ukNcKBtCE5spVmN0NLTHVLSxrgQGAag=w1200",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QbLKPSSm5FzxMaAxQ0qLOPJbhOpfXBK1587cE2Ni_nwMw6UHxLhJL5V5gI-LwYgbJ8S6TLd6-xXWlMX_4cnVNBjuhDJnjEiHPh47mOA2_1iNRJkGvJuDr4MgQdfJPXq6ov-TxOzA=w1200",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RjnUEuqxBVX7tVK49PDOsS0LWbz-a8B2o1ZUExlq-kdY6JSau5zr3E7gPSko3q5Cf6pKX8vIRgWu2kiY7IvLy0DjbJY3rzJsBa0vRquARfaP25FbDUIZ1LlcmyPxrvTOt-JMoS8A=w1200",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QmGFd3fuhmMxNlxSbJk-BGY3qf1xgIEFeKUixxWfv27JVb6ndDdMn4ZI7a_oAVKqoluCYD0DKF9QfYTsH5FrAgPLYPSg9wBViLblaC4ws4-PgNYAuUZxwHuZZkayPR5y6M_t0gBKC3ynyl=w1200",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QdHyJM0PPyKFz99EedW2xVHQhTuMet0WuSHJ-LaI-LrtNTx_pjFKe233Jg-_3cb78jcjYmCT1uhLJ1DKcA0yae-FB4JQ5VL8sRCw3EEWS0EboKmB6QlQTI90ufcL0UWg9eDtmMWofqJB0=w1200",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TrmYtsolpVzVVS9hYYWB6WsKtMn8G5kH9meFwPqlv07XlyTuRheBV1kysL8uRo9NG_QpXMrtaS1sZUaZ4wBO_YzsB4Pxr-_XHJ_zCXdMFLK3W9BvJFqW6TdgBEwp2Bvmma2Xre=w1200"
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "odontologia",
    title: "Odontologia Integrada",
    tag: "Saúde Bucal & Estética",
    shortDesc:
      "Harmonização orofacial, clareamento dental a laser, alinhadores invisíveis e estética do sorriso com precisão digital e atendimento acolhedor.",
    fullDesc:
      "Nosso setor de Odontologia une tecnologia digital de ponta ao toque artístico e humanizado. Realizamos procedimentos que vão desde profilaxia preventiva e restaurações estéticas até lentes de contato em porcelana, clareamento avançado e harmonização orofacial respeitando a harmonia de seus traços.",
    iconName: "Sparkles",
    benefits: [
      "Check-up digital e diagnóstico de alta precisão",
      "Clareamento a laser de alta eficiência e menor sensibilidade",
      "Harmonização orofacial delicada e proporcional",
      "Ambiente relaxante com controle de ansiedade odontológica"
    ],
    features: [
      "Clareamento a laser e caseiro supervisionado",
      "Lentes de contato e facetas em resina/cerâmica",
      "Harmonização orofacial (toxina botulínica e preenchimentos)",
      "Tratamento preventivo e periodontia estética"
    ],
    targetAudience:
      "Jovens e adultos que desejam elevar a autoestima e manter a saúde bucal impecável."
  },
  {
    id: "psicologia",
    title: "Psicologia Clínica & Neuropsicologia",
    tag: "Saúde Mental & Equilíbrio",
    shortDesc:
      "Cuidado humanizado com a saúde mental. Psicoterapia para jovens e adultos, gestão da ansiedade, inteligência emocional e autoconhecimento.",
    fullDesc:
      "Um espaço seguro, confidencial e acolhedor para desatar nós e potencializar suas forças. Nossos profissionais utilizam abordagens científicas contemporâneas (como a Terapia Cognitivo-Comportamental) para tratar ansiedade, estresse profissional e desafios de transição de vida.",
    iconName: "Heart",
    benefits: [
      "Ambiente privativo com isolamento acústico rigoroso",
      "Abordagens baseadas em evidências científicas comprovadas",
      "Foco na autonomia emocional e redução de sintomas",
      "Horários flexíveis para conciliar com rotina de estudos e trabalho"
    ],
    features: [
      "Psicoterapia individual para jovens e adultos",
      "Manejo de ansiedade, estresse e burnout",
      "Orientação profissional e transição de carreira",
      "Avaliação neuropsicológica e regulação emocional"
    ],
    targetAudience:
      "Pessoas que buscam viver com mais serenidade, clareza mental e resiliência."
  },
  {
    id: "fisioterapia",
    title: "Fisioterapia & Reabilitação Funcional",
    tag: "Movimento & Prevenção",
    shortDesc:
      "Alívio de dores posturais, reabilitação ortopédica, pilates clínico e prevenção de lesões para um corpo saudável e ativo.",
    fullDesc:
      "Avaliamos sua biomecânica de forma global para eliminar a causa real das dores, e não apenas mascarar os sintomas. Perfeito para quem passa muitas horas sentado, praticantes de atividades físicas ou em recuperação pós-cirúrgica.",
    iconName: "Activity",
    benefits: [
      "Avaliação postural minuciosa e individualizada",
      "Técnicas de terapia manual e liberação miofascial",
      "Recuperação acelerada sem dependência contínua de analgésicos",
      "Exercícios terapêuticos personalizados para seu dia a dia"
    ],
    features: [
      "Fisioterapia traumato-ortopédica",
      "RPG (Reeducação Postural Global)",
      "Pilates clínico e fortalecimento estabilizador",
      "Prevenção e reabilitação de lesões esportivas"
    ],
    targetAudience:
      "Profissionais que sofrem com tensão no trabalho e praticantes de esportes."
  },
  {
    id: "nutricao",
    title: "Nutrição Clínica & Esportiva",
    tag: "Metabolismo & Longevidade",
    shortDesc:
      "Planos alimentares prazerosos e individualizados, bioimpedância tetrapolar e estratégias nutricionais para performance, emagrecimento e vitalidade.",
    fullDesc:
      "Acreditamos que a nutrição ideal é aquela que você consegue manter com prazer e consistência. Analisamos seus exames laboratoriais, rotina e preferências para desenhar uma estratégia eficiente, sem restrições extremas.",
    iconName: "Apple",
    benefits: [
      "Exame de bioimpedância de precisão em cada consulta",
      "Cardápios adaptados à rotina universitária ou corporativa",
      "Acompanhamento contínuo e suporte entre as consultas",
      "Melhora perceptível na energia, disposição e qualidade do sono"
    ],
    features: [
      "Avaliação nutricional e metabólica completa",
      "Nutrição esportiva e otimização de composição corporal",
      "Reeducação alimentar e emagrecimento consciente",
      "Modulação intestinal e melhora da disposição diária"
    ],
    targetAudience:
      "Quem deseja conquistar equilíbrio corporal, disposição contínua e longevidade."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    author: "Isabela Martins",
    rating: 5,
    content:
      "O atendimento na La Vie é surpreendente! Fiz meu tratamento dental a laser e iniciei meu plano alimentar com a nutrição. O ambiente com toques dourados e acolhedor tira toda a tensão habitual de consultórios. Nota 10!",
    date: "Há 2 semanas"
  },
  {
    id: "t2",
    author: "Matheus Becker",
    rating: 5,
    content:
      "Trabalho sentado o dia todo e cheguei travado por causa de dor lombar. Fui muito bem avaliado e após poucas sessões recuperei a postura e estou sem dor alguma. A clínica é linda e muito bem localizada em Santa Maria.",
    date: "Há 1 mês"
  },
  {
    id: "t3",
    author: "Camila Fernandes",
    rating: 5,
    content:
      "Encontrar um ambiente calmo, com isolamento acústico perfeito e um atendimento tão humano fez toda a diferença para mim. A La Vie passa uma sensação imediata de acolhimento desde a recepção.",
    date: "Há 3 semanas"
  },
  {
    id: "t4",
    author: "Juliana Mendes",
    rating: 5,
    content:
      "Realizei meu procedimento estético e fiquei maravilhada com a delicadeza e a naturalidade do resultado. Você se sente em um verdadeiro spa médico. Super recomendo a todos em Santa Maria!",
    date: "Há 2 meses"
  }
];

export const HIGHLIGHTS = [
  {
    title: "Atendimento Humanizado",
    description: "Cada consulta é planejada com tempo dedicado, escuta atenta e sem pressa."
  },
  {
    title: "Estrutura Integrada",
    description: "Conecte cuidados odontológicos, físicos, emocionais e nutricionais em um só endereço."
  },
  {
    title: "Ambiente Acolhedor",
    description: "Climatização ideal, café selecionado e atmosfera relaxante que promove serenidade."
  },
  {
    title: "Localização Nobre",
    description: "No bairro Duque de Caxias em Santa Maria/RS, com fácil acesso e estacionamento."
  }
];
