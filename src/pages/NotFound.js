import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-lightest">
      <div className="h-full flex flex-col items-center justify-center gap-20">
        <h1 className="my-heading text-red-600">404: Page Not Found</h1>
        <Link className="my-btn" to="/">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
