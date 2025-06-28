import { Brain, Heart, Shield, Sparkles, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "Anxiety & Stress Management",
      description: "Learn evidence-based techniques to manage overwhelming thoughts and feelings. Through cognitive-behavioral therapy and mindfulness practices, we'll work together to reduce anxiety and develop healthy coping strategies. You'll gain practical tools to navigate life's challenges with greater confidence and peace of mind.",
      image: "https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      benefits: ["Reduce daily anxiety", "Better sleep quality", "Improved focus"]
    },
    {
      icon: Heart,
      title: "Relationship Counseling",
      description: "Strengthen your connections and improve communication patterns in your relationships. Whether you're working through conflicts, rebuilding trust, or enhancing intimacy, I provide a safe space for both individuals and couples. Together, we'll develop healthier relationship dynamics and deeper understanding.",
      image: "https://images.pexels.com/photos/1543895/pexels-photo-1543895.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      benefits: ["Better communication", "Stronger bonds", "Conflict resolution"]
    },
    {
      icon: Shield,
      title: "Trauma Recovery",
      description: "Heal from past experiences with compassionate, trauma-informed care. Using specialized approaches, we'll process difficult memories at your own pace in a secure environment. Recovery is possible, and I'm here to support you every step of the way toward reclaiming your sense of safety and empowerment.",
      image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
      color: "from-emerald-600 to-green-500",
      bgColor: "bg-emerald-50",
      benefits: ["Process trauma safely", "Rebuild confidence", "Reclaim your power"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-green-50/60 via-emerald-50/40 to-green-100/30 relative overflow-hidden">
      {/* Floating calming elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-40 h-40 bg-emerald-200/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-16 w-32 h-32 bg-green-200/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-emerald-300/10 rounded-full blur-lg animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-3 rounded-full shadow-lg">
              <Sparkles className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Specialized Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Personalized therapy approaches tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/95 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-emerald-100/50"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${service.color} p-3 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={24} />
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Sparkles className="text-white" size={16} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Benefits */}
                <div className={`${service.bgColor} rounded-2xl p-4 space-y-2`}>
                  <h4 className="font-semibold text-slate-700 text-sm mb-2">Key Benefits:</h4>
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="text-emerald-500 mr-2 flex-shrink-0" size={16} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Pricing with trust elements */}
        <div className="bg-gradient-to-br from-emerald-50/80 via-white/90 to-green-50/60 rounded-3xl p-8 shadow-2xl border border-emerald-100/50 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-4 w-8 h-8 bg-emerald-500 rounded-full"></div>
            <div className="absolute top-8 right-8 w-6 h-6 bg-green-500 rounded-full"></div>
            <div className="absolute bottom-4 left-8 w-4 h-4 bg-emerald-600 rounded-full"></div>
            <div className="absolute bottom-8 right-4 w-10 h-10 bg-green-400 rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full shadow-lg">
                  <Heart className="text-white" size={28} />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">Session Fees</h3>
              <p className="text-slate-600">Transparent, straightforward pricing</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/90 p-6 rounded-2xl shadow-lg text-center border border-emerald-100/50 hover:shadow-xl transition-all duration-300 group">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">$200</div>
                <div className="text-slate-700 font-semibold">Individual Session</div>
                <div className="text-sm text-slate-500 mt-1">50 minutes</div>
                <div className="mt-3 text-xs text-emerald-600 bg-emerald-50 rounded-full px-3 py-1 inline-block">
                  Most Popular
                </div>
              </div>
              
              <div className="bg-white/90 p-6 rounded-2xl shadow-lg text-center border border-green-100/50 hover:shadow-xl transition-all duration-300 group">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">$240</div>
                <div className="text-slate-700 font-semibold">Couples Session</div>
                <div className="text-sm text-slate-500 mt-1">50 minutes</div>
                <div className="mt-3 text-xs text-green-600 bg-green-50 rounded-full px-3 py-1 inline-block">
                  Relationship Focus
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 inline-block border border-emerald-200/50">
                <p className="text-slate-600 text-sm flex items-center">
                  <Shield className="text-emerald-500 mr-2" size={16} />
                  Superbill provided for insurance self-submission
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}