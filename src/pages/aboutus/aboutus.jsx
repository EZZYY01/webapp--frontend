import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaDrum, FaGuitar, FaKeyboard } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function AboutUs() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Music Store</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We're passionate about bringing the joy of music to everyone through quality instruments and exceptional service.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-12">


                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <p className="text-gray-600 mb-4">
                        Founded in 2024, Music Store began as a small shop with a big dream: to make quality musical instruments accessible to all. Over the years, we've grown into a trusted name in the industry, serving musicians from beginners to professionals.
                    </p>
                    <p className="text-gray-600">
                        Our team of music enthusiasts carefully selects each product, ensuring you get the best tools to create your sound. We believe in the power of music to inspire, connect, and transform lives.
                    </p>
                </div>


            </section>

            {/* Our Values Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="p-6">
                            <CardContent className="flex flex-col items-center text-center">
                                <FaGuitar className="text-4xl text-gray-700 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                                <p className="text-gray-600">
                                    We offer only the finest instruments from trusted brands.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="p-6">
                            <CardContent className="flex flex-col items-center text-center">
                                <FaDrum className="text-4xl text-gray-700 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                                <p className="text-gray-600">
                                    Our love for music drives everything we do.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="p-6">
                            <CardContent className="flex flex-col items-center text-center">
                                <FaKeyboard className="text-4xl text-gray-700 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Service</h3>
                                <p className="text-gray-600">
                                    We're here to support your musical journey.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Make Music?</h2>
                    <p className="text-gray-600 mb-6">
                        Explore our collection and find the perfect instrument for you.
                    </p>
                    <Button
                        onClick={() => navigate('/shop/listing')}
                        className="bg-gray-900 hover:bg-gray-800 text-white"
                    >
                        Shop Now
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-auto py-8 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Music Store</h3>
                            <p className="text-gray-400 text-sm">
                                Your one-stop shop for all musical instruments and accessories.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="/shop/listing" className="text-gray-400 hover:text-white transition-colors">
                                        Shop
                                    </a>
                                </li>
                                <li>
                                    <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Categories</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="/shop/listing" className="text-gray-400 hover:text-white transition-colors">
                                        String Instruments
                                    </a>
                                </li>
                                <li>
                                    <a href="/shop/listing" className="text-gray-400 hover:text-white transition-colors">
                                        Percussion
                                    </a>
                                </li>
                                <li>
                                    <a href="/shop/listing" className="text-gray-400 hover:text-white transition-colors">
                                        Keyboards
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>Email: support@musicstore.com</li>
                                <li>Phone: (555) 123-4567</li>
                                <li>Address: 123 Music St, Sound City</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <p>© {new Date().getFullYear()} Music Store. All rights reserved.</p>
                        <div className="mt-4 md:mt-0">
                            <a href="/terms" className="hover:text-white mx-2">Terms</a>
                            <a href="/privacy" className="hover:text-white mx-2">Privacy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default AboutUs;