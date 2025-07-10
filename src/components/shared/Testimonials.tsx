"use client";
import { motion } from "motion/react";
import { Card } from "../ui/card";
import { Star } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Testimonials() {
  return (
    <section className="py-16 dark:bg-white/10 bg-black/10">
      <div className="container mx-auto px-2 lg:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What Our Travelers Say
          </h2>
          <p className="text-lg max-w-2xl mx-auto dark:text-white/70">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              name: "Sarah Johnson",
              location: "New York, USA",
              rating: 5,
              comment:
                "WanderLust made our honeymoon in Bali absolutely perfect! Every detail was taken care of, and we had the most amazing experience.",
              gradient: "from-pink-400 to-rose-500",
            },
            {
              name: "Michael Chen",
              location: "Toronto, Canada",
              rating: 4,
              comment:
                "The Japan tour package exceeded all expectations. The local guides were knowledgeable and the itinerary was perfectly balanced.",
              gradient: "from-blue-400 to-indigo-500",
            },
            {
              name: "Emma Williams",
              location: "London, UK",
              rating: 5,
              comment:
                "Fantastic service from start to finish. The team helped us plan our dream European vacation within our budget. Highly recommended!",
              gradient: "from-purple-400 to-pink-500",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="p-6 border-0 hover:shadow-xl h-full">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.1 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold mr-3`}
                  >
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
