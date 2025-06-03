import React from 'react';
import {Globe, Zap, Shield, Users} from 'lucide-react';

const Web3Section = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-xl w-fit mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powered by <span className="text-indigo-600">Web3 Technology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience secure, transparent, and low-cost transactions through Starknet integration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Low Transaction Fees</h3>
              <p className="text-gray-600">Affordable access to premium features with Starknet's efficient scaling.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Transparent</h3>
              <p className="text-gray-600">Blockchain technology ensures secure and transparent payment records.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Driven</h3>
              <p className="text-gray-600">Open-source development with opportunities for collaboration and funding.</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Web3Section
