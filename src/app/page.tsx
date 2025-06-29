import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-border pb-4 mb-8">
          <h1 className="text-3xl font-bold">Theme Toggle POC</h1>
          <ThemeToggle />
        </header>

        {/* Main content */}
        <main className="space-y-8">
          {/* Hero section */}
          <section className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Dark & Light Theme</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              This is a proof of concept for implementing dark and light theme toggle 
              in a Next.js application using React Context and Tailwind CSS.
            </p>
          </section>

          {/* Cards section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Persistent theme preference</li>
                <li>• System preference detection</li>
                <li>• Smooth transitions</li>
                <li>• TypeScript support</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Technologies</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Next.js 15 App Router</li>
                <li>• React Context API</li>
                <li>• Tailwind CSS v4</li>
                <li>• TypeScript</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Benefits</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Better user experience</li>
                <li>• Reduced eye strain</li>
                <li>• Modern design</li>
                <li>• Accessibility focused</li>
              </ul>
            </div>
          </section>

          {/* Code example */}
          <section className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Usage Example</h3>
            <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
              <code>{`import { useTheme } from '@/context/ThemeContext'

function MyComponent() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  )
}`}</code>
            </pre>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-border pt-8 mt-12 text-center text-muted-foreground">
          <p>Dark & Light Theme Toggle POC - Built with Next.js and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}