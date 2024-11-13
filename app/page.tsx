'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import LoanSimulator from '@/components/LoanSimulator'
import RentRevenueSimulator from '@/components/RentRevenueSimulator'
import AffordabilitySimulator from '@/components/AffordabilitySimulator'
import { Home, TrendingUp, Calculator, Brain, Coins, Sliders, FileText, ShieldAlert, MessageSquare, Mail, Apple, Crown } from 'lucide-react'
import { LanguageSelector } from '@/components/LanguageSelector'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  const [accountType, setAccountType] = useState<string>('email')

  return (
    <div className="flex flex-col min-h-screen bg-black dark">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Loan Simulator</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-purple-500"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
          </svg>
          <span className="ml-2 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            LoanSim
          </span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#main">
            Main
          </Link>
          <Link className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#features">
            Features
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Login
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Create Account
          </Button>
          <select className="bg-gray-800 text-gray-400 text-sm rounded-md px-2 py-1 border border-gray-700">
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-black via-gray-800 to-black">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    A Loan Simulator so good
                  </span>
                </h1>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    it feels like cheating.
                  </span>
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Simulate your loan, rental income, and affordability all in one place. Make informed decisions for your property investment.
                </p>
              </div>
              <div className="space-x-4">
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
                  asChild
                >
                  <Link href="#simulate">Start Simulation</Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-black border-gray-700 text-gray-300 hover:bg-gray-900 hover:border-purple-500/50 transition-all duration-300" 
                  asChild
                >
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="simulate" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Try Our Simulators
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <LoanSimulator />
              <RentRevenueSimulator />
              <AffordabilitySimulator />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-black" style={{ zIndex: 0 }} />
          <div className="container px-4 md:px-6 mx-auto max-w-7xl relative" style={{ zIndex: 1 }}>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400 inline-block animate-shimmer">
                Advanced Features
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Discover powerful tools and capabilities designed to enhance your investment journey
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Home,
                  title: "Rent Simulation Tool",
                  description: "Explore potential rental properties based on your loan terms and regional market prices."
                },
                {
                  icon: Calculator,
                  title: "Tax Estimation",
                  description: "Calculate property taxes, rental income tax, and other regional taxes for accurate cost overview."
                },
                {
                  icon: Coins,
                  title: "Affordability Analysis",
                  description: "Evaluate your financial situation to estimate comfortable borrowing capacity."
                },
                {
                  icon: TrendingUp,
                  title: "Predictive Rent Pricing",
                  description: "AI-powered forecasts of rent price trends based on historical data and market conditions."
                },
                {
                  icon: Brain,
                  title: "Property Value Estimator",
                  description: "AI model to estimate property value changes over time for long-term ROI understanding."
                },
                {
                  icon: Sliders,
                  title: "Customizable Scenarios",
                  description: "Simulate various financial scenarios to understand their impact on loan repayment and investment potential."
                },
                {
                  icon: FileText,
                  title: "Expense Breakdown",
                  description: "Detailed breakdown of expenses beyond the loan, adjusted for regional variations."
                },
                {
                  icon: ShieldAlert,
                  title: "Risk Assessment Module",
                  description: "AI-powered analysis of financial risk based on current and predicted market conditions."
                },
                {
                  icon: MessageSquare,
                  title: "AI Guidance and Tips",
                  description: "Integrated AI chatbot offering advice on regions, tax strategies, and optimal loan options."
                }
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group relative p-8 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px] hover:shadow-blue-500/30 hover:-translate-y-1"
                >
                  <div className="relative z-10">
                    <div className="w-14 h-14 mb-6 bg-gradient-to-br from-purple-500 to-blue-400 rounded-xl p-3 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" style={{ zIndex: 5 }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 relative bg-black">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Pricing Plans
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-stretch relative">
              {[
                {
                  title: "Basic",
                  price: "$9.99",
                  description: "For individuals and small businesses",
                  features: ["Basic loan simulation", "Limited scenarios", "Email support"],
                  popular: false,
                },
                {
                  title: "Pro",
                  price: "$29.99",
                  description: "For growing businesses",
                  features: ["Advanced loan simulation", "Unlimited scenarios", "Priority support", "API access"],
                  popular: true,
                },
                {
                  title: "Enterprise",
                  price: "Custom",
                  description: "For large organizations",
                  features: ["Custom features", "Dedicated account manager", "On-premise deployment", "24/7 phone support"],
                  popular: false,
                },
              ].map((plan) => (
                <div 
                  key={plan.title} 
                  className={`relative flex flex-col justify-between p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105
                    ${plan.popular ? 
                      'bg-gradient-to-b from-gray-900 to-gray-800 scale-105 lg:scale-110 z-10' : 
                      'bg-gray-800'}`}
                >
                  {plan.popular && (
                    <>
                      <div className="absolute -top-5 left-0 right-0 flex justify-center">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full flex items-center gap-2 text-sm font-semibold">
                          <Crown className="w-4 h-4" />
                          Most Popular
                        </span>
                      </div>
                      <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-border">
                        <div className="h-full w-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg" />
                      </div>
                    </>
                  )}
                  <div className={`relative ${plan.popular ? 'p-6' : ''}`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                    <p className="text-4xl font-bold text-purple-500 mb-4">{plan.price}</p>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className={`w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 ${
                      plan.popular ? 'ring-2 ring-purple-500/50' : ''
                    }`}
                  >
                    Choose Plan
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Feature Comparison
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white">Feature</TableHead>
                  <TableHead className="text-white">Basic</TableHead>
                  <TableHead className="text-white">Pro</TableHead>
                  <TableHead className="text-white">Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { feature: "Loan Simulation", basic: "✓", pro: "✓", enterprise: "✓" },
                  { feature: "Scenarios", basic: "Limited", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Support", basic: "Email", pro: "Priority", enterprise: "24/7 Phone" },
                  { feature: "API Access", basic: "✗", pro: "✓", enterprise: "✓" },
                  { feature: "Custom Features", basic: "✗", pro: "✗", enterprise: "✓" },
                  { feature: "On-premise Deployment", basic: "✗", pro: "✗", enterprise: "✓" },
                ].map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-white">{row.feature}</TableCell>
                    <TableCell className="text-gray-300">{row.basic}</TableCell>
                    <TableCell className="text-gray-300">{row.pro}</TableCell>
                    <TableCell className="text-gray-300">{row.enterprise}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 relative bg-gradient-to-b from-black via-gray-800 to-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-black transform scale-y-150"></div>
          <div className="relative z-10">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
              <div className="max-w-2xl mx-auto text-center space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 inline-block animate-shimmer">
                  Join Our Waitlist
                </h2>
                <p className="text-gray-400 text-lg">
                  Be the first to know when we launch. Subscribe to our waitlist for exclusive updates and early access.
                </p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 group">
                  <div className="relative flex-grow">
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-purple-500/20 placeholder-gray-500 text-gray-200 pr-10 transition-all duration-300 group-hover:border-purple-500/50"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-purple-500 transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                  </div>
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-sm text-gray-500 max-w-sm mx-auto">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="border-t border-gray-800 relative bg-black">
          <div className="container px-4 py-8 md:px-6 mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 LoanSim Inc. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}