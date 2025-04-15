"use client"
import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Message sent!", form)
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-green-600 text-center">Contact Me</h1>

        {submitted ? (
          <p className="text-green-700 font-medium">Thanks for reaching out, {form.name}! ✅</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              value={form.name}
              className="w-full px-4 py-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              value={form.email}
              className="w-full px-4 py-2 border rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              value={form.message}
              className="w-full px-4 py-2 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
