
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HealthGoal {
  id: string;
  label: string;
}

const healthGoals: HealthGoal[] = [
  { id: 'digestive', label: '消化道機能' },
  { id: 'mood', label: '心情' },
  { id: 'immunity', label: '晶亮不怕3C' },
  { id: 'sleep', label: '入睡狀況' },
  { id: 'focus', label: '精神體力' },
  { id: 'circulation', label: '循環系統問題' },
  { id: 'beauty', label: '養顏美容' },
  { id: 'protection', label: '保護力' },
  { id: 'bone', label: '骨骼及行動力' },
  { id: 'private', label: '私密保養' },
  { id: 'hair', label: '不怕洗頭梳頭' },
  { id: 'exercise', label: '運動保健' },
  { id: 'concentration', label: '上班讀書不當機' }
];

const HealthGoalSelector: React.FC = () => {
  const [selectedGoals, setSelectedGoals] = useState<Set<string>>(new Set());

  const toggleGoal = (goalId: string) => {
    const newSelected = new Set(selectedGoals);
    if (newSelected.has(goalId)) {
      newSelected.delete(goalId);
    } else {
      newSelected.add(goalId);
    }
    setSelectedGoals(newSelected);
  };

  const isSelected = (goalId: string) => selectedGoals.has(goalId);

  return (
    <div className="min-h-screen bg-health-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-blue-600 mb-6 tracking-wider">
            Healthy Life
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            選擇您想保健的目標方向
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Back Button */}
          <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg">上一題</span>
          </button>

          {/* Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {healthGoals.map((goal, index) => (
              <button
                key={goal.id}
                onClick={() => toggleGoal(goal.id)}
                className={`
                  relative overflow-hidden rounded-full py-4 px-6 text-center transition-all duration-300 transform hover:scale-105
                  ${isSelected(goal.id) 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-lg' 
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:shadow-md'
                  }
                `}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <span className="relative z-10 text-base font-medium">
                  {goal.label}
                </span>
                {isSelected(goal.id) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <div className="flex justify-center">
            <Button
              className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full w-16 h-16 p-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              disabled={selectedGoals.size === 0}
            >
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
            <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthGoalSelector;
