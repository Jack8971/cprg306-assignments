// import { AuthContextProvider } from "./_utils/auth-context";
 
// export default function Layout({ children }) {
//   return <AuthContextProvider>{children}</AuthContextProvider>;
// }

import { AuthContextProvider } from "./_utils/auth-context";

export default function Layout({ children }) {
  return (
    <AuthContextProvider>
      <div className="min-h-screen w-full bg-black text-white">
        {children}
      </div>
    </AuthContextProvider>
  );
}
