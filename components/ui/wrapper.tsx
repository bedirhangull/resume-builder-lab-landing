export default function PageWrapper({
    children,
    landing = true,
  }: Readonly<{
    children: React.ReactNode;
    landing?: boolean;
  }>) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className={`${landing ? 'flex-grow container mx-auto px-4 pt-16' : ''}`}>
          {children}
        </main>
      </div>
    );
  }