"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Award, DollarSign } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  amount: number;
  change: number;
  isPositive: boolean;
}

const advertisersData: LeaderboardEntry[] = [
  { rank: 1, name: "TechFlow Solutions", amount: 2847650, change: 12.5, isPositive: true },
  { rank: 2, name: "Digital Ventures Co.", amount: 2156890, change: 8.3, isPositive: true },
  { rank: 3, name: "Prime Marketing Group", amount: 1923400, change: -3.2, isPositive: false },
  { rank: 4, name: "Growth Capital Partners", amount: 1654320, change: 15.7, isPositive: true },
  { rank: 5, name: "Momentum Brands", amount: 1432100, change: 5.9, isPositive: true },
  { rank: 6, name: "Summit Enterprises", amount: 1287650, change: -1.8, isPositive: false },
  { rank: 7, name: "Apex Digital Media", amount: 1156780, change: 9.4, isPositive: true },
  { rank: 8, name: "Velocity Marketing", amount: 987320, change: 11.2, isPositive: true },
  { rank: 9, name: "Horizon Brands", amount: 876540, change: 4.6, isPositive: true },
  { rank: 10, name: "NextGen Solutions", amount: 745890, change: -2.5, isPositive: false },
];

const affiliatesData: LeaderboardEntry[] = [
  { rank: 1, name: "MaxConvert Pro", amount: 456780, change: 18.9, isPositive: true },
  { rank: 2, name: "TrafficKing Elite", amount: 398540, change: 14.2, isPositive: true },
  { rank: 3, name: "ConversionMaster", amount: 367890, change: 22.5, isPositive: true },
  { rank: 4, name: "LeadGen Wizard", amount: 334560, change: -4.1, isPositive: false },
  { rank: 5, name: "ClickFlow Pro", amount: 298730, change: 9.8, isPositive: true },
  { rank: 6, name: "Performance Hub", amount: 276540, change: 12.3, isPositive: true },
  { rank: 7, name: "Revenue Rocket", amount: 245890, change: 7.6, isPositive: true },
  { rank: 8, name: "Scale Masters", amount: 223450, change: -2.9, isPositive: false },
  { rank: 9, name: "Growth Engine", amount: 198760, change: 16.4, isPositive: true },
  { rank: 10, name: "Profit Accelerator", amount: 176320, change: 5.7, isPositive: true },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const LeaderboardSection = () => {
  const [activeTab, setActiveTab] = useState<'advertisers' | 'affiliates'>('advertisers');
  const currentData = activeTab === 'advertisers' ? advertisersData : affiliatesData;
  const totalAmount = currentData.reduce((sum, entry) => sum + entry.amount, 0);

  return (
    <section className="bg-background py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium mb-4 sm:mb-6"
          >
            Performance Leaderboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-[var(--color-secondary-text)] max-w-2xl mx-auto"
          >
            Top performers driving results across our network
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex rounded-full bg-[var(--color-pure-white)] p-2 border border-[var(--color-border)]">
            <button
              onClick={() => setActiveTab('advertisers')}
              className={`px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium transition-all duration-300 ${
                activeTab === 'advertisers'
                  ? 'bg-[var(--color-primary)] text-white shadow-lg'
                  : 'text-[var(--color-secondary-text)] hover:text-[var(--color-primary)]'
              }`}
            >
              Advertisers
            </button>
            <button
              onClick={() => setActiveTab('affiliates')}
              className={`px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium transition-all duration-300 ${
                activeTab === 'affiliates'
                  ? 'bg-[var(--color-primary)] text-white shadow-lg'
                  : 'text-[var(--color-secondary-text)] hover:text-[var(--color-primary)]'
              }`}
            >
              Affiliates
            </button>
          </div>
        </div>

        {/* Stats Summary */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          <div className="bg-[var(--color-primary)] rounded-[20px] p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5" />
              <span className="text-sm font-medium opacity-90">Total {activeTab === 'advertisers' ? 'Spent' : 'Earned'}</span>
            </div>
            <p className="text-3xl sm:text-4xl font-bold">{formatCurrency(totalAmount)}</p>
          </div>
          
          <div className="bg-[var(--color-forest-green)] rounded-[20px] p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium opacity-90">Top Performer</span>
            </div>
            <p className="text-xl sm:text-2xl font-semibold">{currentData[0].name}</p>
          </div>
          
          <div className="bg-[var(--color-terracotta)] rounded-[20px] p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium opacity-90">Average Growth</span>
            </div>
            <p className="text-3xl sm:text-4xl font-bold">
              {(currentData.reduce((sum, entry) => sum + entry.change, 0) / currentData.length).toFixed(1)}%
            </p>
          </div>
        </motion.div>

        {/* Leaderboard Table */}
        <motion.div
          key={`table-${activeTab}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[var(--color-pure-white)] rounded-[24px] overflow-hidden border border-[var(--color-border)]"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[var(--color-secondary)] border-b border-[var(--color-border)]">
                <tr>
                  <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-[var(--color-secondary-text)]">
                    Rank
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-[var(--color-secondary-text)]">
                    Name
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-right text-sm font-semibold text-[var(--color-secondary-text)]">
                    {activeTab === 'advertisers' ? 'Total Spent' : 'Total Earned'}
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-right text-sm font-semibold text-[var(--color-secondary-text)]">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((entry, index) => (
                  <motion.tr
                    key={entry.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-b border-[var(--color-border)] last:border-b-0 hover:bg-[var(--color-secondary)] transition-colors duration-200"
                  >
                    <td className="px-4 sm:px-6 py-4">
                      <div className="flex items-center gap-2">
                        {entry.rank <= 3 && (
                          <Award
                            className={`w-5 h-5 ${
                              entry.rank === 1
                                ? 'text-yellow-500'
                                : entry.rank === 2
                                ? 'text-gray-400'
                                : 'text-amber-600'
                            }`}
                          />
                        )}
                        <span className="text-lg font-semibold text-[var(--color-secondary-text)]">
                          #{entry.rank}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className="text-base sm:text-lg font-medium text-[var(--color-foreground)]">
                        {entry.name}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-right">
                      <span className="text-base sm:text-lg font-bold text-[var(--color-foreground)]">
                        {formatCurrency(entry.amount)}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-right">
                      <div
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                          entry.isPositive
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {entry.isPositive ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        {entry.isPositive ? '+' : ''}{entry.change}%
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-[var(--color-muted-foreground)] mt-6"
        >
          Rankings updated monthly based on performance metrics
        </motion.p>
      </div>
    </section>
  );
};

export default LeaderboardSection;
