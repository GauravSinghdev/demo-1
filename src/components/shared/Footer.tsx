"use client";
import { Plane } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

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

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-4">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Plane className="h-8 w-8 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                TripWhirl
              </span>
            </div>
            <p className="text-gray-400">
              Creating unforgettable travel experiences since 2010. Your
              adventure starts here.
            </p>
          </motion.div>

          {[
            {
              title: "Quick Links",
              links: ["About Us", "Destinations", "Packages", "Reviews"],
            },
            {
              title: "Services",
              links: [
                "Flight Booking",
                "Hotel Reservations",
                "Car Rentals",
                "Travel Insurance",
              ],
            },
            {
              title: "Support",
              links: [
                "Help Center",
                "Contact Us",
                "Terms of Service",
                "Privacy Policy",
              ],
            },
          ].map((section, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {section.title}
              </h4>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="#"
                      className="hover:text-white transition-colors hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text"
                    >
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {new Date().getFullYear()} TripWhirl. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
