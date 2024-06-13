import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <section className="flex flex-col">
      <div className="flex-1">
        {/* SECTION 1 */}
        <div className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Personalize Your Meal Plan
                </h2>
                <p className="text-gray-600 mb-6">
                  Tell us about your dietary preferences, schedule, and health
                  goals, and we'll create a custom meal plan just for you.
                </p>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="dietary-preferences">
                      Dietary Preferences
                    </Label>
                    <Select id="dietary-preferences" multiple>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="gluten-free">Gluten-Free</option>
                      <option value="dairy-free">Dairy-Free</option>
                      <option value="keto">Keto</option>
                      <option value="paleo">Paleo</option>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="schedule">Weekly Schedule</Label>
                    <Textarea
                      id="schedule"
                      placeholder="Enter your weekly schedule"
                      className="min-h-[100px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="health-goals">Health Goals</Label>
                    <Input
                      id="health-goals"
                      placeholder="Enter your health goals"
                    />
                  </div>
                  <Button color="primary" className="w-full md:w-auto">
                    Generate Meal Plan
                  </Button>
                </form>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  width={500}
                  height={500}
                  alt="Meal Planning"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
