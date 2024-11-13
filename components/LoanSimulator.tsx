'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table"

interface AmortizationRow {
  payment: number;
  principalPayment: string;
  interestPayment: string;
  balance: string;
}

export default function LoanSimulator() {
  const [loanAmount, setLoanAmount] = useState(100000)
  const [interestRate, setInterestRate] = useState(5)
  const [loanTerm, setLoanTerm] = useState(30)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalPayment, setTotalPayment] = useState(0)
  const [amortizationSchedule, setAmortizationSchedule] = useState<AmortizationRow[]>([])
  const [showAmortizationTable, setShowAmortizationTable] = useState(false)

  const calculateLoan = () => {
    const principal = loanAmount
    const interest = interestRate / 100 / 12
    const payments = loanTerm * 12

    const x = Math.pow(1 + interest, payments)
    const monthly = (principal * x * interest) / (x - 1)

    if (isFinite(monthly)) {
      setMonthlyPayment(Number(monthly.toFixed(2)))
      setTotalPayment(Number((monthly * payments).toFixed(2)))
      calculateAmortizationSchedule(principal, interest, payments, monthly)
    }
  }

  const calculateAmortizationSchedule = (
    principal: number,
    interestRate: number,
    totalPayments: number,
    monthlyPayment: number
  ) => {
    let balance = principal
    const schedule = []

    for (let payment = 1; payment <= 6; payment++) {
      const interestPayment = balance * interestRate
      const principalPayment = monthlyPayment - interestPayment
      balance -= principalPayment

      schedule.push({
        payment,
        principalPayment: principalPayment.toFixed(2),
        interestPayment: interestPayment.toFixed(2),
        balance: Math.max(0, balance).toFixed(2),
      })

      if (balance <= 0) break
    }

    setAmortizationSchedule(schedule)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Loan Simulator</CardTitle>
        <CardDescription>Enter your loan details to see your potential payments and the first 6 months of amortization.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="loan-amount">Loan Amount ($)</Label>
            <Input
              id="loan-amount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              placeholder="Enter loan amount"
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
            <Input
              id="loan-term"
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              placeholder="Enter loan term"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4">
        <Button onClick={calculateLoan}>Calculate</Button>
        {monthlyPayment > 0 && (
          <div className="text-left space-y-2">
            <p>
              <strong>Monthly Payment:</strong> ${monthlyPayment}
            </p>
            <p>
              <strong>Total Payment:</strong> ${totalPayment}
            </p>
            <Button onClick={() => setShowAmortizationTable(!showAmortizationTable)}>
              {showAmortizationTable ? 'Hide' : 'Show'} First 6 Months Amortization
            </Button>
          </div>
        )}
      </CardFooter>
      {showAmortizationTable && amortizationSchedule.length > 0 && (
        <CardContent>
          <Table>
            <TableCaption>Amortization schedule for the first 6 months</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Month</TableHead>
                <TableHead>Principal</TableHead>
                <TableHead>Interest</TableHead>
                <TableHead>Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {amortizationSchedule.map((row) => (
                <TableRow key={row.payment}>
                  <TableCell>{row.payment}</TableCell>
                  <TableCell>${row.principalPayment}</TableCell>
                  <TableCell>${row.interestPayment}</TableCell>
                  <TableCell>${row.balance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      )}
    </Card>
  )
}