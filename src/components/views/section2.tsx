import React from "react";
import { Card, CardContent } from "../ui/card";

const Section2 = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="/placeholder.svg"
              width={500}
              height={500}
              alt="Meal Planning"
              className="mx-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Discover Your Perfect Meals
            </h2>
            <p className="text-gray-600 mb-6">
              Based on your preferences and goals, we&apos;ll generate a
              personalized weekly meal plan with recipes, grocery lists, and
              nutritional information.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent>
                  <h3 className="text-lg font-bold my-4">Breakfast</h3>
                  <p className="text-gray-600">
                    Avocado Toast with Poached Eggs
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-lg font-bold my-4">Lunch</h3>
                  <p className="text-gray-600">
                    Grilled Chicken Salad with Quinoa
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-lg font-bold my-4">Dinner</h3>
                  <p className="text-gray-600">
                    Baked Salmon with Roasted Vegetables
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-lg font-bold my-4">Snack</h3>
                  <p className="text-gray-600">
                    Greek Yogurt with Berries and Granola
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
