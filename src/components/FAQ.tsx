import React, { useState } from 'react';

const faqs = [
	{
		question: 'Como funciona o atendimento psicológico?',
		answer: 'O atendimento é realizado de forma acolhedora, respeitando o tempo e as necessidades de cada pessoa. Pode ser presencial ou online.'
	},
	{
		question: 'Quais são os benefícios da terapia?',
		answer: 'A terapia auxilia no autoconhecimento, no desenvolvimento emocional, na resolução de conflitos e na promoção do bem-estar.'
	},
	{
		question: 'Como agendar uma consulta?',
		answer: 'Você pode agendar uma consulta pelo formulário de contato, WhatsApp ou redes sociais disponíveis no site.'
	},
	{
		question: 'A terapia é indicada para crianças e adolescentes?',
		answer: 'Sim, o acompanhamento psicológico é fundamental em todas as fases da vida, inclusive para crianças e adolescentes.'
	},
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (idx: number) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<section className="max-w-2xl mx-auto my-12 p-6 bg-white rounded-xl shadow-lg">
			<h2 className="text-3xl font-bold text-center mb-8 text-primary">Perguntas Frequentes</h2>
			<div className="space-y-4">
				{faqs.map((faq, idx) => (
					<div key={idx} className="border-b pb-4">
						<button
							className="w-full text-left flex justify-between items-center py-2 focus:outline-none"
							onClick={() => handleToggle(idx)}
						>
							<span className="font-semibold text-lg text-secondary">{faq.question}</span>
							<span className={`transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>▼</span>
						</button>
						<div
							className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
						>
							<p className="mt-2 text-gray-700">{faq.answer}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
