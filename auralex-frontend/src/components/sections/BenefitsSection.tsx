import React from "react";
import { TrendingUp, CheckCircle } from "lucide-react";

const benefits = [
  "Reduces need for constant parental guidance",
  "Adapts to individual learning pace",
  "Tracks progress with detailed analytics",
  "Gamified rewards system keeps students motivated",
  "Accessible design with dyslexia-friendly fonts",
  "Secure Web3 payment integration",
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-indigo-600">AuraLex?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Built specifically for dyslexic learners, our platform combines
              cutting-edge AI with proven educational methodologies.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Student Progress
                </h3>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Reading Fluency</span>
                  <span className="text-sm font-semibold text-green-600">
                    +85%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Spelling Accuracy
                  </span>
                  <span className="text-sm font-semibold text-blue-600">
                    +72%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                    style={{ width: "72%" }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Confidence Level
                  </span>
                  <span className="text-sm font-semibold text-purple-600">
                    +93%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full"
                    style={{ width: "93%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
