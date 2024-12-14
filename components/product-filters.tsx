'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="search">Search</Label>
        <Input
          id="search"
          placeholder="Search products..."
          className="mt-1"
        />
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="electronics" />
                <label htmlFor="electronics">Electronics</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="clothing" />
                <label htmlFor="clothing">Clothing</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="home" />
                <label htmlFor="home">Home & Living</label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="px-2">
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className="mt-2 flex justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}