"use client";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

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

export default function Contact() {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you within 24 hours.");
  };
  return (
    <section
      id="contact"
      className="py-16"
    >
      <div className="container mx-auto px-2 lg:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-white/70 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help you plan your perfect vacation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {[
                {
                  icon: <Phone className="h-5 w-5" />,
                  text: "+1 (555) 123-4567",
                  gradient: "from-green-500 to-teal-500",
                },
                {
                  icon: <Mail className="h-5 w-5" />,
                  text: "info@wanderlust.com",
                  gradient: "from-blue-500 to-purple-500",
                },
                {
                  icon: <MapPin className="h-5 w-5" />,
                  text: "123 Travel Street, Adventure City, AC 12345",
                  gradient: "from-red-500 to-pink-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`p-2 rounded-full bg-gradient-to-r ${item.gradient} text-white mr-3`}
                  >
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <motion.div
                className="flex space-x-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: <Facebook className="h-4 w-4" />,
                    gradient: "from-blue-600 to-blue-700",
                  },
                  {
                    icon: <Twitter className="h-4 w-4" />,
                    gradient: "from-sky-500 to-blue-600",
                  },
                  {
                    icon: <Instagram className="h-4 w-4" />,
                    gradient: "from-pink-500 to-purple-600",
                  },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className={`bg-gradient-to-r ${social.gradient} text-white border-0 hover:opacity-90`}
                    >
                      {social.icon}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 border-0 shadow-xl">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  We'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <motion.form
                  onSubmit={handleContactSubmit}
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.div
                    variants={fadeInUp}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Name</Label>
                      <Input
                        id="contact-name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        required

                      />
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      required
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp} className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={4}
                      required
                    />
                  </motion.div>
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </motion.form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
