'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AffordabilitySimulator() {
  const [annualIncome, setAnnualIncome] = useState(50000)
  const [monthlyDebts, setMonthlyDebts] = useState(500)
  const [creditScore, setCreditScore] = useState('700-749')
  const [downPayment, setDownPayment] = useState(20000)
  const [interestRate, setInterestRate] = useState(3.5)
  const [loanTerm, setLoanTerm] = useState(30)
  const [affordableAmount, setAffordableAmount] = useState(0)

  const calculateAffordability = () => {
    // Simple affordability calculation
    const monthlyIncome = annualIncome / 12
    const maxMonthlyPayment = monthlyIncome * 0.28 // 28% rule
    const maxTotalPayment = monthlyIncome * 0.36 - monthlyDebts // 36% rule

    const monthlyPayment = Math.min(maxMonthlyPayment, maxTotalPayment)
    
    const r = interestRate / 100 / 12
    const n = loanTerm * 12
    const affordableAmount = (monthlyPayment / r) * (1 - Math.pow(1 + r, -n)) + downPayment

    setAffordableAmount(Math.round(affordableAmount))
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Affordability Simulator</CardTitle>
        <CardDescription>Estimate how much home you can afford</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="annual-income">Annual Income ($)</Label>
            <Input
              id="annual-income"
              type="number"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(Number(e.target.value))}
              placeholder="Enter your annual income"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="monthly-debts">Monthly Debts ($)</Label>
            <Input
              id="monthly-debts"
              type="number"
              value={monthlyDebts}
              onChange={(e) => setMonthlyDebts(Number(e.target.value))}
              placeholder="Enter your monthly debts"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="credit-score">Credit Score Range</Label>
            <Select onValueChange={(value: string) => setCreditScore(value)}>
              <SelectTrigger id="credit-score">
                <SelectValue placeholder="Select credit score range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="300-579">300-579 (Poor)</SelectItem>
                <SelectItem value="580-669">580-669 (Fair)</SelectItem>
                <SelectItem value="670-739">670-739 (Good)</SelectItem>
                <SelectItem value="740-799">740-799 (Very Good)</SelectItem>
                <SelectItem value="800-850">800-850 (Excellent)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="down-payment">Down Payment ($)</Label>
            <Input
              id="down-payment"
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              placeholder="Enter your down payment"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest-rate">Interest Rate (%)</Label>
            <Input
              id="interest-rate"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              placeholder="Enter interest rate"
              step="0.1"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="loan-term">Loan Term (years)</Label>
            <Select onValueChange={(value: string) => setLoanTerm(Number(value))}>
              <SelectTrigger id="loan-term">
                <SelectValue placeholder="Select loan term" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15 years</SelectItem>
                <SelectItem value="20">20 years</SelectItem>
                <SelectItem value="30">30 years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4">
        <Button onClick={calculateAffordability}>Calculate Affordability</Button>
        {affordableAmount > 0 && (
          <div className="text-left space-y-2 w-full">
            <p>
              <strong>Estimated Affordable Home Price:</strong> ${affordableAmount.toLocaleString()}
            </p>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}