'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RentRevenueSimulator() {
  const [monthlyRent, setMonthlyRent] = useState(1000)
  const [occupancyRate, setOccupancyRate] = useState(95)
  const [propertyTax, setPropertyTax] = useState(2000)
  const [maintenanceCost, setMaintenanceCost] = useState(1200)
  const [insuranceCost, setInsuranceCost] = useState(800)
  const [propertyManagement, setPropertyManagement] = useState(10)
  const [annualRevenue, setAnnualRevenue] = useState(0)
  const [annualExpenses, setAnnualExpenses] = useState(0)
  const [netIncome, setNetIncome] = useState(0)

  const calculateRevenue = () => {
    const grossAnnualRent = monthlyRent * 12 * (occupancyRate / 100)
    const annualExpenses = propertyTax + maintenanceCost + insuranceCost + (grossAnnualRent * propertyManagement / 100)
    const netAnnualIncome = grossAnnualRent - annualExpenses

    setAnnualRevenue(grossAnnualRent)
    setAnnualExpenses(annualExpenses)
    setNetIncome(netAnnualIncome)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Rent Revenue Simulator</CardTitle>
        <CardDescription>Estimate your potential rental income and expenses</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="monthly-rent">Monthly Rent ($)</Label>
            <Input
              id="monthly-rent"
              type="number"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(Number(e.target.value))}
              placeholder="Enter monthly rent"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="occupancy-rate">Occupancy Rate (%)</Label>
            <Input
              id="occupancy-rate"
              type="number"
              value={occupancyRate}
              onChange={(e) => setOccupancyRate(Number(e.target.value))}
              placeholder="Enter occupancy rate"
              min="0"
              max="100"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="property-tax">Annual Property Tax ($)</Label>
            <Input
              id="property-tax"
              type="number"
              value={propertyTax}
              onChange={(e) => setPropertyTax(Number(e.target.value))}
              placeholder="Enter annual property tax"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="maintenance-cost">Annual Maintenance Cost ($)</Label>
            <Input
              id="maintenance-cost"
              type="number"
              value={maintenanceCost}
              onChange={(e) => setMaintenanceCost(Number(e.target.value))}
              placeholder="Enter annual maintenance cost"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="insurance-cost">Annual Insurance Cost ($)</Label>
            <Input
              id="insurance-cost"
              type="number"
              value={insuranceCost}
              onChange={(e) => setInsuranceCost(Number(e.target.value))}
              placeholder="Enter annual insurance cost"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="property-management">Property Management Fee (%)</Label>
            <Select onValueChange={(value: string) => setPropertyManagement(Number(value))}>
              <SelectTrigger id="property-management">
                <SelectValue placeholder="Select fee percentage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0%</SelectItem>
                <SelectItem value="5">5%</SelectItem>
                <SelectItem value="10">10%</SelectItem>
                <SelectItem value="15">15%</SelectItem>
                <SelectItem value="20">20%</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4">
        <Button onClick={calculateRevenue}>Calculate Revenue</Button>
        {annualRevenue > 0 && (
          <div className="text-left space-y-2 w-full">
            <p>
              <strong>Annual Gross Revenue:</strong> ${annualRevenue.toFixed(2)}
            </p>
            <p>
              <strong>Annual Expenses:</strong> ${annualExpenses.toFixed(2)}
            </p>
            <p>
              <strong>Net Annual Income:</strong> ${netIncome.toFixed(2)}
            </p>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}