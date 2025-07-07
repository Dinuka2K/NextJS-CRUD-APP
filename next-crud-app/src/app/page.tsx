

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600">Hi, I&apos;m Dinuka</h1>
      <p className="mt-4 text-lg text-gray-700">
        Welcome to my portfolio built with Next.js 15, TypeScript, and Tailwind CSS.
      </p>
      <div className="mt-8 space-x-4">
        <a href="/projects" className="text-blue-500 underline">
          Projects
        </a>
        <a href="/contact" className="text-blue-500 underline">
          Contact
        </a>
      </div>
    </main>
  );
}
