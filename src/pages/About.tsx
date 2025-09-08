import React from 'react';
import { Award, Heart, Star, Users, Brain, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-5xl font-extrabold text-font-default mb-8 text-center md:text-left">Sobre Gabrielle Mazulo</h2>
          <div className="space-y-6 text-neutral-700 text-xl leading-relaxed mb-8">
            <p>
              Sou Gabrielle, mestranda em Ensino em Biociências e Saúde pela Fiocruz, pós-graduanda em neuropsicologia pelo IPOG e psicóloga formada pela Universidade Federal Rural do Rio de Janeiro (UFRRJ).
            </p>
            <p>
              Ofereço os serviços de psicoterapia individual de crianças e adolescentes, Avaliação Neuropsicológica de Crianças, Adolescentes e Adultos e Orientação Parental.
            </p>
            <p>
              Meu propósito é ajudar famílias e escolas a acolherem o desenvolvimento dos pequenos de maneira saudável.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-primary-100 p-6 rounded-2xl shadow-md flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="text-primary" size={24} />
                <span className="font-semibold text-font-default text-lg">Formação Acadêmica</span>
              </div>
              <p className="text-base text-neutral-700">Psicologia - UFRRJ</p>
              <p className="text-base text-neutral-700">Especialização em Neuropsicologia</p>
              <p className="text-base text-neutral-700">Mestranda em Ensino em Biociências e Saúde (Fiocruz)</p>
            </div>
            <div className="bg-primary-100 p-6 rounded-2xl shadow-md flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-2">
                <Award className="text-primary" size={24} />
                <span className="font-semibold text-font-default text-lg">Especializações</span>
              </div>
              <p className="text-base text-neutral-700">Formação em Terapia Cognitivo-Comportamental</p>
              <p className="text-base text-neutral-700">Formação em Análise do Comportamento Aplicada</p>
              <p className="text-base text-neutral-700">Especialização em Neuropsicologia</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <div className="bg-white rounded-3xl shadow-2xl p-4 flex flex-col items-center max-w-xs w-full">
            <iframe
              src="https://www.instagram.com/p/C75CChOPQh8/embed"
              width="350"
              height="480"
              allowTransparency={true}
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
              title="Instagram Post"
              className="rounded-xl"
              style={{ border: 'none' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
