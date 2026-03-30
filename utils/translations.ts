export type Language = 'en' | 'pt';

export interface Translations {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    proofText: string;
  };
  valueProps: {
    title: string;
    subtitle: string;
    props: {
      aiFirst: { title: string; description: string };
      noCode: { title: string; description: string };
      results: { title: string; description: string };
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  form: {
    trustText: {
      time: string;
      noSpam: string;
      insights: string;
    };
    step1: {
      title: string;
      stepLabel: string;
      firstName: string;
      businessName: string;
      workEmail: string;
      phone: string;
      phoneHelper: string;
      errors: {
        firstName: string;
        businessName: string;
        email: string;
      };
    };
    step2: {
      title: string;
      stepLabel: string;
      options: {
        restaurant: string;
        clinic: string;
        realEstate: string;
        hospitality: string;
        localService: string;
        other: string;
      };
    };
    step3: {
      title: string;
      stepLabel: string;
      options: {
        messages: string;
        booking: string;
        leads: string;
        admin: string;
        support: string;
        team: string;
      };
    };
    step4: {
      title: string;
      stepLabel: string;
    };
    step5: {
      title: string;
      stepLabel: string;
      options: {
        manual: string;
        whatsapp: string;
        disconnected: string;
        automation: string;
      };
    };
    buttons: {
      back: string;
      next: string;
      submit: string;
      submitting: string;
    };
    results: {
      title: string;
      generatedFor: string;
      scoreLabel: string;
      outOf: string;
      timeLostLabel: string;
      perWeek: string;
      monthlyValueLabel: string;
      potentialSavings: string;
      opportunitiesLabel: string;
      summaryStart: string;
      summaryMiddle: string;
      summaryEnd: string;
      ctaButton: string;
      backButton: string;
    };
  };
  footer: {
    tagline: string;
    contact: string;
    email: string;
    phone: string;
    rights: string;
    privacy: string;
  };
  gdpr: {
    consentText: string;
    privacyPolicy: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      title: 'Automate Your Business Operations with AI',
      subtitle: 'Stop wasting hours on repetitive tasks. We build custom AI agents that handle customer requests, bookings, and operations automatically.',
      cta: 'Get Your Free Automation Assessment',
      proofText: 'Trusted by businesses handling 1000+ weekly requests'
    },
    valueProps: {
      title: 'Why Choose Nexta AI?',
      subtitle: 'We help small businesses leverage AI automation without the complexity',
      props: {
        aiFirst: {
          title: 'AI-Powered Automation',
          description: 'Smart agents that understand context, learn from interactions, and handle complex customer requests automatically.'
        },
        noCode: {
          title: 'No Technical Setup Required',
          description: 'We handle everything from integration to deployment. Your team can focus on what matters most - your customers.'
        },
        results: {
          title: 'Results You Can Measure',
          description: 'Save 10-20 hours per week on manual tasks. Most clients see ROI within the first month of implementation.'
        }
      }
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Real results from real businesses'
    },
    form: {
      trustText: {
        time: 'Takes under 60 seconds',
        noSpam: 'No spam',
        insights: 'Personalized automation insights'
      },
      step1: {
        title: 'Tell us about you',
        stepLabel: 'Step 1 of 5',
        firstName: 'First Name',
        businessName: 'Business Name',
        workEmail: 'Work Email',
        phone: 'Mobile Phone (Optional)',
        phoneHelper: 'Optional if you\'d like us to contact you.',
        errors: {
          firstName: 'Please enter your first name',
          businessName: 'Please enter your business name',
          email: 'Please enter a valid email address'
        }
      },
      step2: {
        title: 'What type of business do you run?',
        stepLabel: 'Step 2 of 5',
        options: {
          restaurant: 'Restaurant',
          clinic: 'Clinic / Healthcare',
          realEstate: 'Real Estate',
          hospitality: 'Hospitality / Guesthouse',
          localService: 'Local Service Business',
          other: 'Other'
        }
      },
      step3: {
        title: 'What is your biggest operational bottleneck?',
        stepLabel: 'Step 3 of 5',
        options: {
          messages: 'Answering customer messages',
          booking: 'Booking & scheduling',
          leads: 'Following up leads',
          admin: 'Admin / paperwork',
          support: 'Customer support questions',
          team: 'Team coordination'
        }
      },
      step4: {
        title: 'How many customer requests do you handle per week?',
        stepLabel: 'Step 4 of 5'
      },
      step5: {
        title: 'How are you currently handling this?',
        stepLabel: 'Step 5 of 5',
        options: {
          manual: 'Fully manual',
          whatsapp: 'Manual + WhatsApp',
          disconnected: 'Several disconnected tools',
          automation: 'Some automation already'
        }
      },
      buttons: {
        back: 'Back',
        next: 'Next Step',
        submit: 'Generate My Automation Report',
        submitting: 'Analyzing automation opportunities...'
      },
      results: {
        title: 'Your Automation Opportunity Report',
        generatedFor: 'Generated for',
        scoreLabel: 'Automation Score',
        outOf: 'out of 100',
        timeLostLabel: 'Estimated Time Lost',
        perWeek: 'per week',
        monthlyValueLabel: 'Monthly Efficiency Value',
        potentialSavings: 'potential savings',
        opportunitiesLabel: 'Top 3 Automation Opportunities',
        summaryStart: 'Based on your answers, your business may be losing',
        summaryMiddle: 'per week on manual processes. Your biggest bottleneck is',
        summaryEnd: 'which represents a significant opportunity for improvement.',
        ctaButton: 'Book My Free Automation Strategy Call',
        backButton: 'Back to website'
      }
    },
    footer: {
      tagline: 'Automate Your Business with AI-Powered Solutions',
      contact: 'Contact',
      email: 'hello@nexta.pt',
      phone: '+351 933 653 334',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy'
    },
    gdpr: {
      consentText: 'By submitting this form, you agree to our collection and processing of your data as described in our Privacy Policy.',
      privacyPolicy: 'Privacy Policy'
    }
  },
  pt: {
    hero: {
      title: 'Automatize as Operações do Seu Negócio com IA',
      subtitle: 'Pare de desperdiçar horas em tarefas repetitivas. Construímos agentes de IA personalizados que lidam com pedidos de clientes, reservas e operações automaticamente.',
      cta: 'Obtenha Sua Avaliação Gratuita de Automação',
      proofText: 'Confiado por empresas que lidam com mais de 1000 pedidos semanais'
    },
    valueProps: {
      title: 'Por Que Escolher a Nexta AI?',
      subtitle: 'Ajudamos pequenas empresas a aproveitar a automação com IA sem complexidade',
      props: {
        aiFirst: {
          title: 'Automação com IA',
          description: 'Agentes inteligentes que entendem o contexto, aprendem com as interações e lidam com pedidos complexos de clientes automaticamente.'
        },
        noCode: {
          title: 'Sem Configuração Técnica Necessária',
          description: 'Cuidamos de tudo, desde a integração até a implementação. Sua equipe pode se concentrar no que mais importa - seus clientes.'
        },
        results: {
          title: 'Resultados que Você Pode Medir',
          description: 'Economize 10-20 horas por semana em tarefas manuais. A maioria dos clientes vê retorno no primeiro mês de implementação.'
        }
      }
    },
    testimonials: {
      title: 'O Que Nossos Clientes Dizem',
      subtitle: 'Resultados reais de empresas reais'
    },
    form: {
      trustText: {
        time: 'Leva menos de 60 segundos',
        noSpam: 'Sem spam',
        insights: 'Insights de automação personalizados'
      },
      step1: {
        title: 'Conte-nos sobre você',
        stepLabel: 'Passo 1 de 5',
        firstName: 'Primeiro Nome',
        businessName: 'Nome da Empresa',
        workEmail: 'Email Profissional',
        phone: 'Telefone Celular (Opcional)',
        phoneHelper: 'Opcional se quiser que entremos em contato.',
        errors: {
          firstName: 'Por favor, insira seu primeiro nome',
          businessName: 'Por favor, insira o nome da sua empresa',
          email: 'Por favor, insira um endereço de email válido'
        }
      },
      step2: {
        title: 'Que tipo de negócio você administra?',
        stepLabel: 'Passo 2 de 5',
        options: {
          restaurant: 'Restaurante',
          clinic: 'Clínica / Saúde',
          realEstate: 'Imobiliária',
          hospitality: 'Hotelaria / Pousada',
          localService: 'Negócio de Serviço Local',
          other: 'Outro'
        }
      },
      step3: {
        title: 'Qual é o seu maior gargalo operacional?',
        stepLabel: 'Passo 3 de 5',
        options: {
          messages: 'Responder mensagens de clientes',
          booking: 'Reservas e agendamentos',
          leads: 'Acompanhamento de leads',
          admin: 'Administração / burocracia',
          support: 'Perguntas de suporte ao cliente',
          team: 'Coordenação de equipe'
        }
      },
      step4: {
        title: 'Quantos pedidos de clientes você lida por semana?',
        stepLabel: 'Passo 4 de 5'
      },
      step5: {
        title: 'Como você está lidando com isso atualmente?',
        stepLabel: 'Passo 5 de 5',
        options: {
          manual: 'Totalmente manual',
          whatsapp: 'Manual + WhatsApp',
          disconnected: 'Várias ferramentas desconectadas',
          automation: 'Já tenho alguma automação'
        }
      },
      buttons: {
        back: 'Voltar',
        next: 'Próximo Passo',
        submit: 'Gerar Meu Relatório de Automação',
        submitting: 'Analisando oportunidades de automação...'
      },
      results: {
        title: 'Seu Relatório de Oportunidade de Automação',
        generatedFor: 'Gerado para',
        scoreLabel: 'Pontuação de Automação',
        outOf: 'de 100',
        timeLostLabel: 'Tempo Perdido Estimado',
        perWeek: 'por semana',
        monthlyValueLabel: 'Valor de Eficiência Mensal',
        potentialSavings: 'economia potencial',
        opportunitiesLabel: 'Top 3 Oportunidades de Automação',
        summaryStart: 'Com base nas suas respostas, seu negócio pode estar perdendo',
        summaryMiddle: 'por semana em processos manuais. Seu maior gargalo é',
        summaryEnd: 'o que representa uma oportunidade significativa de melhoria.',
        ctaButton: 'Agende Minha Chamada Estratégica Gratuita',
        backButton: 'Voltar ao site'
      }
    },
    footer: {
      tagline: 'Automatize Seu Negócio com Soluções Baseadas em IA',
      contact: 'Contato',
      email: 'hello@nexta.pt',
      phone: '+351 933 653 334',
      rights: 'Todos os direitos reservados.',
      privacy: 'Política de Privacidade'
    },
    gdpr: {
      consentText: 'Ao enviar este formulário, você concorda com a nossa recolha e processamento dos seus dados conforme descrito na nossa Política de Privacidade.',
      privacyPolicy: 'Política de Privacidade'
    }
  }
};

export const useTranslation = (language: Language = 'en') => {
  return translations[language];
};
