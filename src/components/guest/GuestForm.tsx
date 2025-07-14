"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function FormPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Checkout Form</h1>
      <form className="space-y-6">
        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">*First Name</Label>
            <Input id="firstName" required />
          </div>
          <div>
            <Label htmlFor="lastName">*Last Name</Label>
            <Input id="lastName" required />
          </div>
        </div>

        {/* Email & Phone */}
        <div>
          <Label htmlFor="email">*Email Address</Label>
          <Input id="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="phone">*Phone</Label>
          <Input id="phone" type="tel" required />
        </div>

        {/* Country Select */}
        <div>
          <Label htmlFor="country">*Country</Label>
          <Select>
            <SelectTrigger id="country">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="india">India</SelectItem>
              <SelectItem value="usa">USA</SelectItem>
              <SelectItem value="uk">UK</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Address */}
        <div>
          <Label htmlFor="address1">*Address 1</Label>
          <Input id="address1" required />
        </div>
        <div>
          <Label htmlFor="address2">Address 2</Label>
          <Input id="address2" />
        </div>

        {/* City, State, Zip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="city">*City</Label>
            <Input id="city" required />
          </div>
          <div>
            <Label htmlFor="state">*State / Province</Label>
            <Input id="state" required />
          </div>
          <div>
            <Label htmlFor="zip">*Zip / Postal Code</Label>
            <Input id="zip" required />
          </div>
        </div>

        {/* Credit Card Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="cardNumber">*Credit Card #</Label>
            <Input id="cardNumber" required />
          </div>
          <div>
            <Label htmlFor="expMonth">*MM / YYYY</Label>
            <Input id="expMonth" placeholder="MM/YYYY" required />
          </div>
          <div>
            <Label htmlFor="cvv">*CVV</Label>
            <Input id="cvv" required />
          </div>
        </div>

        {/* Conditions */}
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Agree to these conditions before continuing.</Label>
        </div>

        {/* Comments */}
        <div>
          <Label htmlFor="comments">Comments</Label>
          <Textarea id="comments" placeholder="Additional notes or instructions" />
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}
