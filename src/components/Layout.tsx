
type LayoutProp = {
  children : React.ReactNode;
}


function Layout({ children } : LayoutProp ) {
  return (
    <>
      <main className="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]">
        <div className="mx-auto max-w-5xl p-4 md:p-8">
            {children}
        </div>
      </main>
    </>
  );
}

export default Layout;
