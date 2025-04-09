export const metadata = {
    title: "About Ridwaan – Future Microsoft Dev",
    description: "Learn more about Ridwaan Adan Ali, a rising full-stack dev aiming for Microsoft!",
  };
  
  export default function About() {
    return (
      <main className="flex items-center justify-center min-h-screen bg-blue-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-700">About Me</h1>
          <p className="mt-4 text-lg text-gray-600">
            I'm Ridwaan, a future full-stack developer at Microsoft 😎
          </p>
        </div>
      </main>
    );
  }