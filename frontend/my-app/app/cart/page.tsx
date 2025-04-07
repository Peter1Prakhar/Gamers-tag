"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2, GamepadIcon as GameController, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Cyberpunk 2078",
      price: 59.99,
      quantity: 1,
      platform: "PlayStation 5",
      image: "/placeholder.svg?height=200&width=200&text=Cyberpunk 2078",
    },
    {
      id: 2,
      name: "Galactic Warfare",
      price: 69.99,
      quantity: 2,
      platform: "Xbox Series X",
      image: "/placeholder.svg?height=200&width=200&text=Galactic Warfare",
    },
    {
      id: 3,
      name: "Wireless Controller",
      price: 49.99,
      quantity: 1,
      platform: "PlayStation 5",
      image: "/placeholder.svg?height=200&width=200&text=Controller",
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 5.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-black dark:text-white flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Your Cart</h1>
            <div className="h-1 w-24 bg-red-600 mb-8"></div>
          </div>

          {cartItems.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-zinc-900 p-6 mb-6 relative">
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

                  <div className="hidden md:grid grid-cols-12 gap-4 mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="col-span-6">
                      <h3 className="font-medium">Product</h3>
                    </div>
                    <div className="col-span-2 text-center">
                      <h3 className="font-medium">Price</h3>
                    </div>
                    <div className="col-span-2 text-center">
                      <h3 className="font-medium">Quantity</h3>
                    </div>
                    <div className="col-span-2 text-right">
                      <h3 className="font-medium">Total</h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-4 border-b border-zinc-200 dark:border-zinc-800"
                      >
                        <div className="col-span-6 flex items-center gap-4">
                          <div className="relative h-20 w-20 flex-shrink-0">
                            <Image
                              src={ "/image5.jpeg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.platform}</p>
                            <button
                              className="text-red-600 hover:text-red-500 text-sm flex items-center gap-1 mt-1 md:hidden"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-3 w-3" /> Remove
                            </button>
                          </div>
                        </div>

                        <div className="col-span-2 text-center">
                          <span className="md:hidden font-medium mr-2">Price:</span>
                          <span className="text-red-600">${item.price.toFixed(2)}</span>
                        </div>

                        <div className="col-span-2">
                          <div className="flex items-center justify-center">
                            <button
                              className="w-8 h-8 flex items-center justify-center border border-zinc-300 dark:border-zinc-700"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                              className="w-10 h-8 text-center border-t border-b border-zinc-300 dark:border-zinc-700 bg-transparent"
                            />
                            <button
                              className="w-8 h-8 flex items-center justify-center border border-zinc-300 dark:border-zinc-700"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>

                        <div className="col-span-2 text-right flex items-center justify-between md:justify-end">
                          <span className="md:hidden font-medium mr-2">Total:</span>
                          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          <button
                            className="text-red-600 hover:text-red-500 ml-4 hidden md:block"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-between">
                    <Link href="/games">
                      <Button
                        variant="outline"
                        className="rounded-none border-zinc-300 dark:border-zinc-700 flex items-center gap-2"
                      >
                        <GameController className="h-4 w-4" />
                        <span>Continue Shopping</span>
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="rounded-none border-red-600 text-red-600 hover:bg-red-600/10"
                      onClick={() => setCartItems([])}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-zinc-900 p-6 sticky top-24 relative">
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

                  <h3 className="text-xl font-bold mb-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                    Order Summary
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-zinc-600 dark:text-gray-400">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-600 dark:text-gray-400">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-600 dark:text-gray-400">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-zinc-200 dark:border-zinc-800 pt-3 mt-3">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span className="text-red-600">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Promo Code"
                      className="w-full p-2 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800"
                    />
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-none relative overflow-hidden">
                      <span className="relative z-10">Apply</span>
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                      <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                      <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                      <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
                    </Button>

                    <Link href="/checkout">
                      <Button className="w-full bg-black hover:bg-zinc-800 text-white rounded-none flex items-center justify-center gap-2 relative overflow-hidden">
                        <span className="relative z-10">Proceed to Checkout</span>
                        <ArrowRight className="h-4 w-4 relative z-10" />
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                        <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                        <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                        <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-zinc-900 p-12 text-center relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

              <GameController className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-zinc-600 dark:text-gray-400 mb-6">
                Looks like you haven't added any games or accessories to your cart yet.
              </p>
              <Link href="/games">
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none relative overflow-hidden">
                  <span className="relative z-10">Browse Games</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                  <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                  <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

