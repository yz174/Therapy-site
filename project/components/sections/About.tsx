import { Award, Heart, Users, Clock, Brain, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-50/80 via-green-50/60 to-emerald-100/40 relative overflow-hidden">
      {/* Floating calming elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-200/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-emerald-300/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-300/15 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-3 rounded-full shadow-lg">
              <Brain className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Meet Dr. Serena Blake
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Compassionate care meets evidence-based practice
          </p>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              <Sparkles className="text-emerald-500 animate-pulse" size={20} />
              <Sparkles className="text-green-500 animate-pulse delay-300" size={16} />
              <Sparkles className="text-emerald-600 animate-pulse delay-600" size={18} />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative group">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative bg-gradient-to-br from-emerald-100 to-green-100 p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-white/90">
                <img
                  src="/image.png"
                  alt="Dr. Serena Blake - Licensed Clinical Psychologist"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Floating trust indicators */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white p-4 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <Award size={28} />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <Heart size={24} />
            </div>

            {/* Calming glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400/20 to-green-400/20 blur-xl -z-10 group-hover:blur-2xl transition-all duration-500"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
                Dr. Serena Blake, PsyD
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
            </div>

            {/* Enhanced Stats with calming animations */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-emerald-100/50 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="text-white" size={20} />
                  </div>
                  <span className="font-semibold text-slate-700 text-sm sm:text-base">Experience</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-800">8 Years</p>
                <div className="w-full bg-emerald-100 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 h-2 rounded-full w-4/5 animate-pulse"></div>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-green-100/50 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Users className="text-white" size={20} />
                  </div>
                  <span className="font-semibold text-slate-700 text-sm sm:text-base">Sessions</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-800">500+</p>
                <div className="w-full bg-green-100 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full w-full animate-pulse delay-300"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Office Hours with trust-building elements */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100/50">
              <h4 className="font-semibold text-slate-800 mb-4 flex items-center">
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-2 rounded-lg mr-3">
                  <Heart className="text-white" size={20} />
                </div>
                Office Hours
              </h4>
              <div className="space-y-3 text-slate-600">
                <div className="flex items-center justify-between p-3 bg-emerald-50/50 rounded-lg">
                  <div>
                    <strong className="text-slate-800">In-person:</strong>
                    <span className="ml-2">Tuesday & Thursday</span>
                  </div>
                  <span className="text-emerald-600 font-semibold">10 AM–6 PM</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50/50 rounded-lg">
                  <div>
                    <strong className="text-slate-800">Virtual (Zoom):</strong>
                    <span className="ml-2">Mon, Wed & Fri</span>
                  </div>
                  <span className="text-green-600 font-semibold">1 PM–5 PM</span>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Licensed PsyD
              </div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Evidence-Based
              </div>
              <div className="bg-gradient-to-r from-emerald-600 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Trauma-Informed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}