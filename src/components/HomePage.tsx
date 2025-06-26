
import React from 'react';
import { ArrowRight, CheckCircle, Brain, Pill, ShoppingCart, Sparkles, Users, Shield, Clock, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HomePage = () => {
  const handleStartAssessment = () => {
    // 這裡之後可以導向評估頁面
    console.log('開始免費評估');
  };

  const processSteps = [
    {
      icon: CheckCircle,
      title: '填寫健康問卷',
      description: '3分鐘快速問卷，了解您的健康狀況'
    },
    {
      icon: Brain,
      title: 'AI 分析生活狀況',
      description: '智能分析您的身體與生活習慣'
    },
    {
      icon: Pill,
      title: '推薦專屬保健食品',
      description: '獲得個人化的營養補充建議'
    },
    {
      icon: ShoppingCart,
      title: '線上選購或藥局諮詢',
      description: '方便購買或至合作藥局專業諮詢'
    }
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'AI 精準分析',
      description: '運用先進AI技術，為您提供精準的健康分析'
    },
    {
      icon: Users,
      title: '與實體藥局合作',
      description: '專業藥師把關，確保推薦品質與安全'
    },
    {
      icon: Shield,
      title: '快速且隱私保護',
      description: '評估過程快速便利，完全保護您的隱私'
    }
  ];

  const testimonials = [
    {
      name: '李小姐',
      content: '問卷很簡單，推薦的保健食品真的很適合我的需求！',
      avatar: '👩'
    },
    {
      name: '陳先生',
      content: '3分鐘就完成評估，獲得了很實用的營養建議。',
      avatar: '👨'
    },
    {
      name: '王太太',
      content: 'AI分析很準確，藥師的專業建議讓我很放心。',
      avatar: '👵'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900">HealthCare</span>
            </div>
            
            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              <a href="/" className="text-blue-600 font-medium">首頁</a>
              <Button 
                onClick={handleStartAssessment}
                variant="ghost" 
                className="text-gray-700 hover:text-blue-600"
              >
                免費評估
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-blue-600">
                <ShoppingCart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                <LogIn className="w-4 h-4 mr-2" />
                登入
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24 bg-blue-600 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            為你的健康量身推薦
            <span className="block text-blue-100">保健食品</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            只需 3 分鐘，完成健康問卷，獲得專屬營養建議
          </p>
          <Button 
            onClick={handleStartAssessment}
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
            style={{animationDelay: '0.4s'}}
          >
            👉 立即免費評估
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            簡單四步驟，找到最適合的保健方案
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            為什麼選擇我們的健康評估？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            用戶真實回饋
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-xl">
                      {testimonial.avatar}
                    </div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            開始您的健康之旅
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            立即進行免費評估，讓 AI 為您推薦最適合的保健方案
          </p>
          <Button 
            onClick={handleStartAssessment}
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            👉 立即免費評估
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
