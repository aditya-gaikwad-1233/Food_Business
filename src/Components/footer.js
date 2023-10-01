import React from "react"
import { Link } from "react-router-dom"

const footer = () => {
    return (
        <footer class="text-white py-12 bg-black">
        <div class="container mx-auto px-4 md:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            <div class="mb-8">
                <h3 class="text-2xl font-bold mb-4">About Us</h3>
                <p class="text-gray-400 leading-relaxed">
                Kitchen Kween is your go-to festival food shopping app. We provide the best festival food experiences delivered right to your doorstep.
                </p>
            </div>

            <div class="mb-8">
                <h3 class="text-2xl font-bold mb-4">Quick Links</h3>
                <ul class="text-gray-400">
                    <Link to="/">
                        <li class="mb-2">Home </li>
                    </Link>

                    <Link to="#">
                        <li class="mb-2">Shop </li>
                    </Link>

                    <Link to="#">
                        <li class="mb-2">Recipes </li>
                    </Link>

                    <Link to="/contact">
                        <li class="mb-2">Contact us </li>
                    </Link>
                
                </ul>
            </div>

            <div>
                <h3 class="text-2xl font-bold mb-4">Contact Us</h3>
                <p class="text-gray-400">123 Festival Food Street</p>
                <p class="text-gray-400">City, State 12345</p>
                <p class="text-gray-400 mt-4">Email: contact@kitchenkween.com</p>
                <p class="text-gray-400">Phone: +19123456789</p>
            </div>
            </div>
        </div>

        <div class="mt-12 text-center text-gray-400">
            <p>&copy; 2023 Kitchen Kween. All rights reserved.</p>
        </div>
        </footer>

    )
}

export default footer