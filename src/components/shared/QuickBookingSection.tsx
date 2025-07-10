"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";

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

export default function QuickBookingSection() {
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking request submitted! We'll contact you soon.");
  };
  return (
    <section id="quick-book" className="py-16 text-balance">
      <div className="container mx-auto px-2 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-4xl mx-auto border-0 shadow-xl rounded-lg">
            <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-purple-600 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <CardTitle className="text-2xl py-1">
                  Quick Booking Request
                </CardTitle>
                <CardDescription className="text-blue-100 text-base">
                  Tell us about your dream vacation and we&apos;ll create the perfect
                  package for you
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent className="p-8">
              <motion.form
                onSubmit={handleBookingSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {[
                    { label: "Destination", placeholder: "Where to?" },
                    { label: "Check-in Date", type: "date" },
                    { label: "Check-out Date", type: "date" },
                    { label: "Guests", placeholder: "How many?" },
                  ].map((field, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="space-y-2"
                    >
                      <Label
                        htmlFor={field.label.toLowerCase().replace(" ", "-")}
                      >
                        {field.label}
                      </Label>
                      {field.type === "date" ? (
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal bg-transparent "
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.label === "Check-in Date"
                                ? checkInDate
                                  ? format(checkInDate, "PPP")
                                  : "Select date"
                                : checkOutDate
                                ? format(checkOutDate, "PPP")
                                : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={
                                field.label === "Check-in Date"
                                  ? checkInDate
                                  : checkOutDate
                              }
                              onSelect={
                                field.label === "Check-in Date"
                                  ? setCheckInDate
                                  : setCheckOutDate
                              }
                            />
                          </PopoverContent>
                        </Popover>
                      ) : (
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder={field.placeholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {field.label === "Destination" ? (
                              <>
                                <SelectItem value="bali">
                                  Bali, Indonesia
                                </SelectItem>
                                <SelectItem value="maldives">
                                  Maldives
                                </SelectItem>
                                <SelectItem value="thailand">
                                  Thailand
                                </SelectItem>
                                <SelectItem value="japan">Japan</SelectItem>
                                <SelectItem value="europe">
                                  Europe Tour
                                </SelectItem>
                                <SelectItem value="custom">
                                  Custom Destination
                                </SelectItem>
                              </>
                            ) : (
                              <>
                                <SelectItem value="1">1 Guest</SelectItem>
                                <SelectItem value="2">2 Guests</SelectItem>
                                <SelectItem value="3">3 Guests</SelectItem>
                                <SelectItem value="4">4 Guests</SelectItem>
                                <SelectItem value="5+">5+ Guests</SelectItem>
                              </>
                            )}
                          </SelectContent>
                        </Select>
                      )}
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your full name" required />
                  </motion.div>
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                      <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                      <SelectItem value="5000-10000">
                        $5,000 - $10,000
                      </SelectItem>
                      <SelectItem value="10000+">$10,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <Label htmlFor="requirements">Special Requirements</Label>
                  <Textarea
                    id="requirements"
                    placeholder="Tell us about any special requirements, preferences, or activities you'd like to include..."
                    rows={4}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                  >
                    Submit Booking Request
                  </Button>
                </motion.div>
              </motion.form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
