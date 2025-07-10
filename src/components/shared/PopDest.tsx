"use client";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";

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
export default function PopDest() {
  return (
    <section id="destinations" className="py-16 dark:bg-white/10 bg-black/10">
      <div className="container mx-auto px-2 lg:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Popular Destinations
          </h2>
          <p className="text-gray-600 dark:text-white/70 text-lg max-w-2xl mx-auto">
            Explore our most loved destinations, handpicked for unforgettable
            experiences
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              name: "Manali, Himachal Pradesh",
              image:
                "https://cdn.pixabay.com/photo/2021/02/19/14/38/mountain-6030438_640.jpg",
              price: "From ₹4,299",
              rating: 4.8,
              description:
                "Tropical paradise with stunning beaches and rich culture",
              gradient: "from-orange-400 to-pink-500",
            },
            {
              name: "Rishikesh, Uttarakhand",
              image:
                "https://cdn.pixabay.com/photo/2022/10/05/07/11/temple-7499927_1280.jpg",
              price: "From ₹2,999",
              rating: 4.9,
              description: "Luxury overwater villas and crystal-clear waters",
              gradient: "from-blue-400 to-cyan-500",
            },
            {
              name: "Jaisalmer, Rajasthan",
              image:
                "https://cdn.pixabay.com/photo/2016/07/07/18/10/jaisalmer-1502908_1280.jpg",
              price: "From ₹5,999",
              rating: 4.7,
              description: "Iconic white buildings and breathtaking sunsets",
              gradient: "from-blue-500 to-indigo-600",
            },
            // {
            //   name: "Tokyo, Japan",
            //   image: "/placeholder.svg?height=300&width=400",
            //   price: "From $1,699",
            //   rating: 4.8,
            //   description: "Modern metropolis with ancient traditions",
            //   gradient: "from-pink-500 to-rose-600",
            // },
            // {
            //   name: "Swiss Alps",
            //   image: "/placeholder.svg?height=300&width=400",
            //   price: "From $2,199",
            //   rating: 4.9,
            //   description: "Majestic mountains and pristine alpine lakes",
            //   gradient: "from-green-400 to-blue-500",
            // },
            // {
            //   name: "Dubai, UAE",
            //   image: "/placeholder.svg?height=300&width=400",
            //   price: "From $1,599",
            //   rating: 4.6,
            //   description: "Luxury shopping and architectural marvels",
            //   gradient: "from-yellow-400 to-orange-500",
            // },
          ].map((destination, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-xl">
                <div className="relative h-40 sm:h-60 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${destination.gradient} opacity-20`}
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      className={`absolute top-4 right-4 bg-gradient-to-r ${destination.gradient} text-white border-0 shadow-lg`}
                    >
                      {destination.price}
                    </Badge>
                  </motion.div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold dark:text-white/80">
                      {destination.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">
                        {destination.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-white/40 mb-4">
                    {destination.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className={`w-full bg-gradient-to-r ${destination.gradient} hover:opacity-90 border-0 shadow-lg`}
                    >
                      View Packages
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
