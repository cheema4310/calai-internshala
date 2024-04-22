export default function AuthPagesLayout({ children }) {
  return (
    <div className="w-full bg-lightest my-flex h-screen">
      <div className="w-11/12 md:w-2/3 lg:w-5/12 px-10 py-12 bg-darker rounded-lg shadow-2xl">
        {children}
      </div>
    </div>
  );
}
