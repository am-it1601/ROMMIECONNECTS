type AuthLayoutProps = {
  children: React.ReactNode;
};
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="h-[100vh] w-full m-auto flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
