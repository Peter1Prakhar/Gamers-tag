import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageSquare, FileText, Mail, Phone, ChevronRight } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-black dark:text-white flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Support Center</h1>
            <div className="h-1 w-24 bg-red-600 mb-8"></div>
            <p className="text-zinc-600 dark:text-gray-400 max-w-3xl">
              Need help? Our support team is here to assist you with any questions or issues you may have.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-zinc-900 p-6 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

              <div className="flex flex-col items-center text-center mb-4">
                <HelpCircle className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold">Help Center</h3>
                <p className="text-zinc-600 dark:text-gray-400 mt-2">
                  Browse our knowledge base for answers to common questions.
                </p>
              </div>

              <Link href="/support/help-center">
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none w-full relative overflow-hidden">
                  <span className="relative z-10">Browse Articles</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                  <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                  <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
                </Button>
              </Link>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

              <div className="flex flex-col items-center text-center mb-4">
                <MessageSquare className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold">Live Chat</h3>
                <p className="text-zinc-600 dark:text-gray-400 mt-2">
                  Chat with our support team for immediate assistance.
                </p>
              </div>

              <Link href="/support/live-chat">
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none w-full relative overflow-hidden">
                  <span className="relative z-10">Start Chat</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                  <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                  <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
                </Button>
              </Link>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

              <div className="flex flex-col items-center text-center mb-4">
                <FileText className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold">Submit a Ticket</h3>
                <p className="text-zinc-600 dark:text-gray-400 mt-2">
                  Create a support ticket and we'll get back to you as soon as possible.
                </p>
              </div>

              <Link href="/support/ticket">
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none w-full relative overflow-hidden">
                  <span className="relative z-10">Create Ticket</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                  <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                  <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
                </Button>
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Frequently Asked Questions
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="bg-white dark:bg-zinc-900 p-6 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

              <div className="space-y-6">
                {[
                  "How do I reset my password?",
                  "How do I join a tournament?",
                  "What payment methods do you accept?",
                  "How do I report a player?",
                  "Can I transfer my account to another platform?",
                ].map((question, index) => (
                  <div key={index} className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
                    <Link href={`/support/faq/${index + 1}`} className="flex justify-between items-center group">
                      <h3 className="font-medium group-hover:text-red-600 transition-colors">{question}</h3>
                      <ChevronRight className="h-5 w-5 text-red-600" />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link href="/support/faq">
                  <Button variant="outline" className="rounded-none border-red-600 text-red-600 hover:bg-red-600/10">
                    View All FAQs
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Contact Information
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-zinc-900 p-6 relative">
                <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email Support</h3>
                    <p className="text-zinc-600 dark:text-gray-400 mb-2">For general inquiries and support requests.</p>
                    <a href="mailto:support@gamezone.com" className="text-red-600 hover:underline">
                      support@gamezone.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-6 relative">
                <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone Support</h3>
                    <p className="text-zinc-600 dark:text-gray-400 mb-2">Available Monday to Friday, 9am - 5pm EST.</p>
                    <a href="tel:+18001234567" className="text-red-600 hover:underline">
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

