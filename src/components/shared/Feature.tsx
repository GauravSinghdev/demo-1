"use client";
import {
  Award,
  Car,
  Clock,
  Hotel,
  MapPin,
  Plane,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { Card } from "../ui/card";

// Animation variants
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

export default function Feature() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-2 lg:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose TripWhirl?
          </h2>
          <p className="text-gray-600 dark:text-white/70 text-lg max-w-2xl mx-auto">
            We make your travel dreams come true with our comprehensive services
            and expert guidance
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              icon: <Plane className="h-8 w-8" />,
              title: "Flight Booking",
              description:
                "Best deals on flights worldwide with flexible booking options",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: <Hotel className="h-8 w-8" />,
              title: "Hotel Reservations",
              description:
                "Handpicked accommodations from budget to luxury stays",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: <Car className="h-8 w-8" />,
              title: "Transportation",
              description:
                "Airport transfers, car rentals, and local transportation",
              gradient: "from-green-500 to-teal-500",
            },
            {
              icon: <Shield className="h-8 w-8" />,
              title: "Travel Insurance",
              description:
                "Comprehensive coverage for peace of mind during your trip",
              gradient: "from-orange-500 to-red-500",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              title: "24/7 Support",
              description:
                "Round-the-clock assistance wherever you are in the world",
              gradient: "from-indigo-500 to-purple-500",
            },
            {
              icon: <Award className="h-8 w-8" />,
              title: "Expert Guides",
              description:
                "Local experts to show you hidden gems and authentic experiences",
              gradient: "from-yellow-500 to-orange-500",
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Group Packages",
              description:
                "Special rates and customized itineraries for group travel",
              gradient: "from-pink-500 to-rose-500",
            },
            {
              icon: <MapPin className="h-8 w-8" />,
              title: "Custom Itineraries",
              description:
                "Personalized travel plans tailored to your preferences",
              gradient: "from-cyan-500 to-blue-500",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white/20 backdrop-blur-sm h-full">
                <motion.div
                  className={`flex justify-center mb-4 p-3 rounded-full bg-gradient-to-r ${feature.gradient} text-white w-fit mx-auto`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-white/70">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
