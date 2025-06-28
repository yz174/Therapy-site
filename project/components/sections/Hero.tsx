'use client';

import { ArrowRight, Calendar, Heart, Leaf } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Simplified, calming background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
        }}
      >
        {/* Gentle, soothing overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/95 via-blue-50/90 to-teal-50/95"></div>
        
        {/* Minimal floating elements for subtle movement */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-blue-200/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Clean, focused content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Simple trust indicator */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-full px-6 py-2 flex items-center space-x-2 shadow-lg">
            <Leaf className="text-emerald-600" size={18} />
            <span className="text-slate-700 font-medium">Licensed Clinical Psychologist</span>
          </div>
        </div>

        {/* Clean, readable headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
          Find Your Path to
          <span className="text-emerald-600 block mt-2">
            Inner Peace
          </span>
        </h1>
        
        {/* Clear, supportive subtitle */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-600 mb-12 font-light leading-relaxed max-w-4xl mx-auto">
          Compassionate therapy to help you overcome anxiety, heal relationships, and recover from trauma
        </h2>

        {/* Single, prominent call-to-action */}
        <div className="flex justify-center mb-12">
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <Calendar className="mr-3" size={20} />
            Book a Free Consultation
            <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </div>

        {/* Simple trust message */}
        <div className="flex items-center justify-center space-x-2 text-slate-500 mb-8">
          <Heart className="text-emerald-500" size={16} />
          <span className="text-sm">Safe, confidential space for healing</span>
        </div>

        {/* Clean, meaningful quote */}
        <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 border border-emerald-100 shadow-lg">
          <p className="text-slate-600 italic mb-2 leading-relaxed">
            "Everything that irritates us about others can lead us to an understanding of ourselves."
          </p>
          <p className="text-sm text-emerald-600 font-medium">— Carl Jung</p>
        </div>
      </div>

      {/* Minimal breathing indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
}