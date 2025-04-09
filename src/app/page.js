
import Link from "next/link"
export default function Home() {
  return (
    <main className="flex flex-col justify-center min-h-screen bg-white">
      {/* <nav className="mb-8 space-x-4"> 
        <Link href="/" className="text-blue-600 hover:underline"> Home</Link>
        
        <Link href="/about" className="text-blue-600 hover:underline"> About</Link>
       <Link href="/contact" className="text-blue-600 hover:underline"> Contact</Link>
      </nav> */}




<div class="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white font-sans transition-all duration-300">
  

  <header class="flex items-center justify-between px-6 py-4 shadow-md">
    <h1 class="text-2xl font-bold">Ridwaan.dev</h1>
    <nav class="space-x-4 hidden md:block">
      <a href="/" class="hover:text-blue-500">Home</a>
      <a href="/about" class="hover:text-blue-500">Projects</a>
      <a href="/contact" class="hover:text-blue-500">Contact</a>
    </nav>
    <button onclick="document.documentElement.classList.toggle('dark')" class="md:ml-4 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
      🌓
    </button>
  </header>


  <section id="home" class="flex flex-col items-center justify-center text-center py-20 px-6">
    <h2 class="text-4xl font-bold mb-2">Hi, I'm Ridwaan 👋</h2>
    <p class="text-lg mb-4">Full-Stack Developer • Firebase • React • Tailwind</p>
    <button class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 transition">Download CV</button>
  </section>

  <section id="projects" class="py-20 px-6 bg-gray-100 dark:bg-gray-800">
    <h3 class="text-3xl font-semibold mb-8 text-center">Projects</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white dark:bg-gray-700 p-4 rounded shadow hover:scale-105 transition">
        <h4 class="text-xl font-bold mb-2">Project One</h4>
        <p>A short description of your cool app.</p>
      </div>
      <div class="bg-white dark:bg-gray-700 p-4 rounded shadow hover:scale-105 transition">
        <h4 class="text-xl font-bold mb-2">Project Two</h4>
        <p>Another awesome thing you built.</p>
      </div>
      <div class="bg-white dark:bg-gray-700 p-4 rounded shadow hover:scale-105 transition">
        <h4 class="text-xl font-bold mb-2">Project Three</h4>
        <p>This one has charts and animations!</p>
      </div>
    </div>
  </section>

 
  <section id="contact" class="py-20 px-6 text-center">
    <h3 class="text-3xl font-semibold mb-6">Contact Me</h3>
    <div class="space-x-6 text-2xl">
      <a href="mailto:ridwaana88@gmail.com" class="hover:text-blue-500">📧</a>
      <a href="https://github.com" class="hover:text-gray-800 dark:hover:text-white">🐙</a>
      <a href="https://linkedin.com" class="hover:text-blue-700">🔗</a>
    </div>
  </section>

</div>

    </main>
  )
  
}