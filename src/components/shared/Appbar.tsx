"use client";
import { Menu, Plane, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { useRouter } from "next/navigation";

export default function Appbar() {
    const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-b dark:bg-white/10 bg-black/10"
    >
      <div className="container mx-auto px-2 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-primary" />
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TripWhirl
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Destinations", "Packages", "About", "Contact"].map(
              (item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-white/70 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              )
            )}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg" onClick={() => router.push("/#quick-book")}>
                Book Now
              </Button>
            </motion.div>
            <ModeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <ModeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? "close" : "menu"}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.1 }}
                >
                  {isMenuOpen ? (
                    <X className="size-7" />
                  ) : (
                    <Menu className="size-7" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-black"
            >
              <nav className="flex flex-col space-y-4">
                {["Destinations", "Packages", "About", "Contact"].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-600 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  )
                )}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full shadow-lg">
                    Book Now
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
