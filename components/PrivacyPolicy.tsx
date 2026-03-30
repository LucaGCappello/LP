import React from 'react';
import { Language, useTranslation } from '../utils/translations';

interface PrivacyPolicyProps {
  language?: Language;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ language = 'en' }) => {
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
            {isPortuguese ? 'Política de Privacidade' : 'Privacy Policy'}
          </h1>
          <p className="text-gray-400">
            {isPortuguese ? 'Última atualização: 30 de março de 2026' : 'Last updated: March 30, 2026'}
          </p>
        </div>

        <div className="space-y-8 text-gray-300">
          {isPortuguese ? (
            <>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
                <p className="leading-relaxed">
                  A Nexta Intelligence ("nós", "nosso" ou "nos") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site e usa nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Informações que Coletamos</h2>
                <h3 className="text-xl font-semibold text-white mb-3">2.1 Informações Pessoais</h3>
                <p className="leading-relaxed mb-4">
                  Podemos coletar as seguintes informações pessoais quando você usa nosso site:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nome e sobrenome</li>
                  <li>Nome da empresa</li>
                  <li>Endereço de e-mail profissional</li>
                  <li>Número de telefone (opcional)</li>
                  <li>Informações sobre seu negócio e necessidades operacionais</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Informações Técnicas</h3>
                <p className="leading-relaxed mb-4">
                  Coletamos automaticamente certas informações técnicas, incluindo:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Endereço IP</li>
                  <li>Tipo e versão do navegador</li>
                  <li>Informações do dispositivo</li>
                  <li>Páginas visitadas e tempo gasto no site</li>
                  <li>Origem de referência</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Como Usamos Suas Informações</h2>
                <p className="leading-relaxed mb-4">
                  Usamos suas informações para:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fornecer e melhorar nossos serviços</li>
                  <li>Responder às suas consultas e solicitações</li>
                  <li>Enviar informações sobre nossos serviços e atualizações</li>
                  <li>Analisar o uso do site e melhorar a experiência do usuário</li>
                  <li>Cumprir obrigações legais</li>
                  <li>Prevenir fraudes e garantir a segurança</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Cookies e Tecnologias Semelhantes</h2>
                <p className="leading-relaxed mb-4">
                  Usamos cookies e tecnologias semelhantes para:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Melhorar a funcionalidade do site</li>
                  <li>Analisar o tráfego do site</li>
                  <li>Personalizar sua experiência</li>
                  <li>Lembrar suas preferências</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Você pode controlar o uso de cookies através das configurações do seu navegador. No entanto, desabilitar cookies pode afetar a funcionalidade do nosso site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Compartilhamento de Dados</h2>
                <p className="leading-relaxed mb-4">
                  Não vendemos suas informações pessoais. Podemos compartilhar suas informações com:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Prestadores de serviços que nos auxiliam em operações comerciais</li>
                  <li>Parceiros de análise de dados (por exemplo, Vercel Analytics)</li>
                  <li>Autoridades legais quando exigido por lei</li>
                  <li>Sucessores comerciais em caso de fusão ou aquisição</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Segurança de Dados</h2>
                <p className="leading-relaxed">
                  Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet é 100% seguro.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Seus Direitos (RGPD)</h2>
                <p className="leading-relaxed mb-4">
                  Se você estiver na União Europeia, você tem os seguintes direitos:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Direito de acesso às suas informações pessoais</li>
                  <li>Direito de retificação de informações imprecisas</li>
                  <li>Direito de apagamento ("direito ao esquecimento")</li>
                  <li>Direito de restringir o processamento</li>
                  <li>Direito à portabilidade de dados</li>
                  <li>Direito de objeção ao processamento</li>
                  <li>Direito de retirar o consentimento</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Para exercer esses direitos, entre em contato conosco em hello@nexta.pt
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Retenção de Dados</h2>
                <p className="leading-relaxed">
                  Retemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Transferências Internacionais</h2>
                <p className="leading-relaxed">
                  Suas informações podem ser transferidas e mantidas em servidores localizados fora do seu país de residência. Garantimos que tais transferências sejam realizadas de acordo com as leis de proteção de dados aplicáveis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Privacidade de Menores</h2>
                <p className="leading-relaxed">
                  Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente informações pessoais de menores.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Alterações a Esta Política</h2>
                <p className="leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações significativas publicando a nova política nesta página e atualizando a data de "Última atualização".
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Contato</h2>
                <p className="leading-relaxed mb-4">
                  Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
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
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="leading-relaxed">
                  Nexta Intelligence ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-white mb-3">2.1 Personal Information</h3>
                <p className="leading-relaxed mb-4">
                  We may collect the following personal information when you use our website:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>First and last name</li>
                  <li>Business name</li>
                  <li>Work email address</li>
                  <li>Phone number (optional)</li>
                  <li>Information about your business and operational needs</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Technical Information</h3>
                <p className="leading-relaxed mb-4">
                  We automatically collect certain technical information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referring source</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you information about our services and updates</li>
                  <li>Analyze website usage and improve user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Similar Technologies</h2>
                <p className="leading-relaxed mb-4">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Enhance website functionality</li>
                  <li>Analyze website traffic</li>
                  <li>Personalize your experience</li>
                  <li>Remember your preferences</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  You can control cookie usage through your browser settings. However, disabling cookies may affect the functionality of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing</h2>
                <p className="leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service providers who assist us in business operations</li>
                  <li>Analytics partners (e.g., Vercel Analytics)</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business successors in case of merger or acquisition</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights (GDPR)</h2>
                <p className="leading-relaxed mb-4">
                  If you are in the European Union, you have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Right to access your personal information</li>
                  <li>Right to rectification of inaccurate information</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To exercise these rights, please contact us at hello@nexta.pt
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
                <p className="leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. International Transfers</h2>
                <p className="leading-relaxed">
                  Your information may be transferred to and maintained on servers located outside of your country of residence. We ensure that such transfers comply with applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
