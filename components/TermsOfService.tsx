import React from 'react';
import { Language } from '../utils/translations';

interface TermsOfServiceProps {
  language?: Language;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ language = 'en' }) => {
  const isPortuguese = language === 'pt';

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <a href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {isPortuguese ? 'Voltar ao Início' : 'Back to Home'}
          </a>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {isPortuguese ? 'Termos de Serviço' : 'Terms of Service'}
          </h1>
          <p className="text-gray-400">
            {isPortuguese ? 'Última atualização: 30 de março de 2026' : 'Last updated: March 30, 2026'}
          </p>
        </div>

        <div className="space-y-8 text-gray-300">
          {isPortuguese ? (
            <>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
                <p className="leading-relaxed">
                  Ao acessar e usar o site da Nexta Intelligence e seus serviços, você concorda em ficar vinculado a estes Termos de Serviço. Se você não concordar com alguma parte destes termos, não deve usar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Descrição dos Serviços</h2>
                <p className="leading-relaxed mb-4">
                  A Nexta Intelligence fornece serviços de automação empresarial baseados em IA, incluindo:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Desenvolvimento de agentes de IA personalizados</li>
                  <li>Automação de processos de negócios</li>
                  <li>Consultoria e implementação de soluções de IA</li>
                  <li>Suporte e manutenção contínua</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Uso dos Serviços</h2>
                <h3 className="text-xl font-semibold text-white mb-3">3.1 Licença de Uso</h3>
                <p className="leading-relaxed mb-4">
                  Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para usar nossos serviços de acordo com estes termos.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">3.2 Restrições</h3>
                <p className="leading-relaxed mb-4">
                  Você concorda em não:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Usar nossos serviços para qualquer propósito ilegal ou não autorizado</li>
                  <li>Tentar obter acesso não autorizado aos nossos sistemas</li>
                  <li>Fazer engenharia reversa ou descompilar nosso software</li>
                  <li>Revender ou redistribuir nossos serviços sem autorização</li>
                  <li>Interferir no funcionamento adequado dos serviços</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Contas de Usuário</h2>
                <p className="leading-relaxed mb-4">
                  Quando você cria uma conta conosco, você é responsável por:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Manter a confidencialidade das suas credenciais de acesso</li>
                  <li>Todas as atividades que ocorrem em sua conta</li>
                  <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
                  <li>Fornecer informações precisas e atualizadas</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Pagamento e Faturamento</h2>
                <h3 className="text-xl font-semibold text-white mb-3">5.1 Preços</h3>
                <p className="leading-relaxed mb-4">
                  Os preços dos nossos serviços são definidos de acordo com o plano escolhido. Reservamos o direito de modificar os preços mediante aviso prévio razoável.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">5.2 Faturamento</h3>
                <p className="leading-relaxed mb-4">
                  Os pagamentos são processados de acordo com o ciclo de faturamento acordado. O não pagamento pode resultar na suspensão ou encerramento dos serviços.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">5.3 Reembolsos</h3>
                <p className="leading-relaxed">
                  As políticas de reembolso são determinadas caso a caso. Entre em contato conosco para discutir quaisquer preocupações sobre faturamento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Propriedade Intelectual</h2>
                <h3 className="text-xl font-semibold text-white mb-3">6.1 Nossa Propriedade</h3>
                <p className="leading-relaxed mb-4">
                  Todo o conteúdo, recursos e tecnologia fornecidos através dos nossos serviços são de propriedade da Nexta Intelligence e protegidos por leis de propriedade intelectual.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">6.2 Seus Dados</h3>
                <p className="leading-relaxed">
                  Você mantém a propriedade de todos os dados que fornece aos nossos serviços. Concedemos a nós uma licença para usar esses dados apenas para fornecer e melhorar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Confidencialidade</h2>
                <p className="leading-relaxed">
                  Ambas as partes concordam em manter confidenciais todas as informações proprietárias e comercialmente sensíveis divulgadas durante o curso dos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Garantias e Isenções de Responsabilidade</h2>
                <h3 className="text-xl font-semibold text-white mb-3">8.1 Garantias Limitadas</h3>
                <p className="leading-relaxed mb-4">
                  Fornecemos nossos serviços usando padrões profissionais razoáveis da indústria. No entanto, não garantimos que os serviços sejam ininterruptos ou livres de erros.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">8.2 Isenção de Responsabilidade</h3>
                <p className="leading-relaxed">
                  OS SERVIÇOS SÃO FORNECIDOS "COMO ESTÃO" E "CONFORME DISPONÍVEIS". NÃO FAZEMOS GARANTIAS EXPRESSAS OU IMPLÍCITAS SOBRE A ADEQUAÇÃO DOS SERVIÇOS PARA UM PROPÓSITO ESPECÍFICO.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Limitação de Responsabilidade</h2>
                <p className="leading-relaxed">
                  EM NENHUM CASO A NEXTA INTELLIGENCE SERÁ RESPONSÁVEL POR DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS, INCLUINDO PERDA DE LUCROS, DADOS OU BOA VONTADE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Indenização</h2>
                <p className="leading-relaxed">
                  Você concorda em indenizar e isentar a Nexta Intelligence de quaisquer reclamações, danos, obrigações, perdas, responsabilidades, custos ou dívidas, e despesas decorrentes do seu uso dos serviços ou violação destes termos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Rescisão</h2>
                <p className="leading-relaxed mb-4">
                  Reservamos o direito de suspender ou encerrar seu acesso aos nossos serviços a qualquer momento, por qualquer motivo, incluindo violação destes termos.
                </p>
                <p className="leading-relaxed">
                  Você pode encerrar sua conta a qualquer momento, entrando em contato conosco. A rescisão não afeta obrigações de pagamento já incorridas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Modificações dos Termos</h2>
                <p className="leading-relaxed">
                  Podemos modificar estes termos a qualquer momento. Notificaremos você sobre alterações significativas. O uso contínuo dos serviços após as alterações constitui aceitação dos novos termos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">13. Lei Aplicável</h2>
                <p className="leading-relaxed">
                  Estes termos são regidos pelas leis de Portugal. Quaisquer disputas serão resolvidas nos tribunais de Portugal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">14. Disposições Gerais</h2>
                <p className="leading-relaxed mb-4">
                  Se qualquer disposição destes termos for considerada inválida, as disposições restantes permanecerão em pleno vigor. Nossa falha em fazer cumprir qualquer direito não constitui renúncia a esse direito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">15. Contato</h2>
                <p className="leading-relaxed mb-4">
                  Para dúvidas sobre estes Termos de Serviço, entre em contato:
                </p>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <p className="mb-2"><strong>Nexta Intelligence</strong></p>
                  <p className="mb-2">E-mail: hello@nexta.pt</p>
                  <p>Telefone: +351 933 653 334</p>
                </div>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using Nexta Intelligence's website and services, you agree to be bound by these Terms of Service. If you do not agree to any part of these terms, you should not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
                <p className="leading-relaxed mb-4">
                  Nexta Intelligence provides AI-powered business automation services, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Custom AI agent development</li>
                  <li>Business process automation</li>
                  <li>AI solution consulting and implementation</li>
                  <li>Ongoing support and maintenance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Use of Services</h2>
                <h3 className="text-xl font-semibold text-white mb-3">3.1 License Grant</h3>
                <p className="leading-relaxed mb-4">
                  We grant you a limited, non-exclusive, non-transferable, revocable license to use our services in accordance with these terms.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">3.2 Restrictions</h3>
                <p className="leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Reverse engineer or decompile our software</li>
                  <li>Resell or redistribute our services without authorization</li>
                  <li>Interfere with the proper functioning of the services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. User Accounts</h2>
                <p className="leading-relaxed mb-4">
                  When you create an account with us, you are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Providing accurate and up-to-date information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Payment and Billing</h2>
                <h3 className="text-xl font-semibold text-white mb-3">5.1 Pricing</h3>
                <p className="leading-relaxed mb-4">
                  Pricing for our services is set according to your chosen plan. We reserve the right to modify pricing with reasonable advance notice.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">5.2 Billing</h3>
                <p className="leading-relaxed mb-4">
                  Payments are processed according to the agreed billing cycle. Non-payment may result in suspension or termination of services.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">5.3 Refunds</h3>
                <p className="leading-relaxed">
                  Refund policies are determined on a case-by-case basis. Please contact us to discuss any billing concerns.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
                <h3 className="text-xl font-semibold text-white mb-3">6.1 Our Property</h3>
                <p className="leading-relaxed mb-4">
                  All content, features, and technology provided through our services are owned by Nexta Intelligence and protected by intellectual property laws.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">6.2 Your Data</h3>
                <p className="leading-relaxed">
                  You retain ownership of all data you provide to our services. You grant us a license to use this data solely to provide and improve our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Confidentiality</h2>
                <p className="leading-relaxed">
                  Both parties agree to keep confidential all proprietary and commercially sensitive information disclosed during the course of services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Warranties and Disclaimers</h2>
                <h3 className="text-xl font-semibold text-white mb-3">8.1 Limited Warranties</h3>
                <p className="leading-relaxed mb-4">
                  We provide our services using reasonable industry-standard professional practices. However, we do not guarantee that the services will be uninterrupted or error-free.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">8.2 Disclaimer</h3>
                <p className="leading-relaxed">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE". WE MAKE NO EXPRESS OR IMPLIED WARRANTIES REGARDING THE SUITABILITY OF THE SERVICES FOR ANY PARTICULAR PURPOSE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  IN NO EVENT SHALL NEXTA INTELLIGENCE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Indemnification</h2>
                <p className="leading-relaxed">
                  You agree to indemnify and hold harmless Nexta Intelligence from any claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from your use of the services or violation of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Termination</h2>
                <p className="leading-relaxed mb-4">
                  We reserve the right to suspend or terminate your access to our services at any time, for any reason, including violation of these terms.
                </p>
                <p className="leading-relaxed">
                  You may terminate your account at any time by contacting us. Termination does not affect payment obligations already incurred.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Modifications to Terms</h2>
                <p className="leading-relaxed">
                  We may modify these terms at any time. We will notify you of significant changes. Continued use of services after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law</h2>
                <p className="leading-relaxed">
                  These terms are governed by the laws of Portugal. Any disputes will be resolved in the courts of Portugal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">14. General Provisions</h2>
                <p className="leading-relaxed mb-4">
                  If any provision of these terms is found to be invalid, the remaining provisions will remain in full force. Our failure to enforce any right does not constitute a waiver of that right.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">15. Contact</h2>
                <p className="leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact:
                </p>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <p className="mb-2"><strong>Nexta Intelligence</strong></p>
                  <p className="mb-2">Email: hello@nexta.pt</p>
                  <p>Phone: +351 933 653 334</p>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
