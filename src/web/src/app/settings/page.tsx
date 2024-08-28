'use client';
import React, { useState } from 'react';
import { User, Book, Paintbrush, Bell } from 'lucide-react';
import Navbar from '@/components/Navbar';

const SettingsPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [fontSize, setFontSize] = useState(16);
  const [dailyGoal, setDailyGoal] = useState(30);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const Card = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
    <div className="bg-dodger-blue-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-dodger-blue-100 mb-4 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-dodger-blue-900 to-dodger-blue-950 p-8">
      <Navbar />

      <main className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold text-dodger-blue-100 mb-8 text-center">Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Account Settings */}
          <Card title="Account Settings" icon={<User className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-dodger-blue-200 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 bg-dodger-blue-700 text-dodger-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-dodger-blue-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-dodger-blue-200 mb-1">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-2 bg-dodger-blue-700 text-dodger-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-dodger-blue-500"
                />
              </div>
              <button className="w-full bg-dodger-blue-500 hover:bg-dodger-blue-400 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                Update Account
              </button>
            </div>
          </Card>

          {/* Learning Preferences */}
          <Card title="Learning Preferences" icon={<Book className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <label htmlFor="topic" className="block text-dodger-blue-200 mb-1">Preferred Topics</label>
                <select
                  id="topic"
                  className="w-full px-3 py-2 bg-dodger-blue-700 text-dodger-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-dodger-blue-500"
                >
                  <option value="science">Science</option>
                  <option value="history">History</option>
                  <option value="literature">Literature</option>
                  <option value="technology">Technology</option>
                </select>
              </div>
              <div>
                <label htmlFor="daily-goal" className="block text-dodger-blue-200 mb-1">
                  Daily Practice Goal (minutes): {dailyGoal}
                </label>
                <input
                  type="range"
                  id="daily-goal"
                  min="15"
                  max="120"
                  step="15"
                  value={dailyGoal}
                  onChange={(e) => setDailyGoal(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="difficulty" className="block text-dodger-blue-200 mb-1">Difficulty Level</label>
                <select
                  id="difficulty"
                  className="w-full px-3 py-2 bg-dodger-blue-700 text-dodger-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-dodger-blue-500"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Interface Settings */}
          <Card title="Interface Settings" icon={<Paintbrush className="w-6 h-6" />}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-dodger-blue-200">Dark Mode</span>
                <label htmlFor="dark-mode" className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="dark-mode"
                      className="sr-only"
                      checked={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                    />
                    <div className={`block w-14 h-8 rounded-full ${darkMode ? 'bg-dodger-blue-400' : 'bg-dodger-blue-600'}`}></div>
                    <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${darkMode ? 'transform translate-x-6' : ''}`}></div>
                  </div>
                </label>
              </div>
              <div>
                <label htmlFor="font-size" className="block text-dodger-blue-200 mb-1">
                  Font Size: {fontSize}px
                </label>
                <input
                  type="range"
                  id="font-size"
                  min="12"
                  max="24"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </Card>

          {/* Notification Settings */}
          <Card title="Notification Settings" icon={<Bell className="w-6 h-6" />}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-dodger-blue-200">Enable Notifications</span>
                <label htmlFor="notifications" className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="notifications"
                      className="sr-only"
                      checked={notificationsEnabled}
                      onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                    />
                    <div className={`block w-14 h-8 rounded-full ${notificationsEnabled ? 'bg-dodger-blue-400' : 'bg-dodger-blue-600'}`}></div>
                    <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${notificationsEnabled ? 'transform translate-x-6' : ''}`}></div>
                  </div>
                </label>
              </div>
              {notificationsEnabled && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-dodger-blue-200">Practice Reminders</span>
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-dodger-blue-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-dodger-blue-200">Weekly Progress Reports</span>
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-dodger-blue-500" />
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-dodger-blue-500 hover:bg-dodger-blue-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            Save All Settings
          </button>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;