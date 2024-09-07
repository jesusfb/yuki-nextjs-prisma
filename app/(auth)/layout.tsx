const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <main className="grid min-h-dvh place-items-center">
    <div className="container max-w-screen-md rounded-lg p-6 shadow-lg md:border">{children}</div>
  </main>
)

export default AuthLayout
