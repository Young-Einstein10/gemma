import React from "react";
import { Card, CardContent } from "../ui/card";

const Section3 = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Manage Your Meal Plan</h2>
            <p className="text-gray-600 mb-6">
              Customize your meal plan, save your favorite recipes, and track
              your progress.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent>
                  <h3 className="text-lg font-bold my-4">Customize</h3>
                  <p className="text-gray-600">
                    Easily swap out meals or adjust serving sizes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-lg font-bold my-4">Favorites</h3>
                  <p className="text-gray-600">
                    Save your go-to recipes for quick access.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-lg font-bold my-4">History</h3>
                  <p className="text-gray-600">
                    Review your past meal plans and progress.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-lg font-bold my-4">Grocery List</h3>
                  <p className="text-gray-600">
                    Automatically generate a shopping list for your meals.
                  </p>
                </CardContent>
              </Card>
            </div>
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
    </section>
  );
};

export default Section3;
