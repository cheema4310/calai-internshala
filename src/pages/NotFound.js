import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-full h-[50vh] bg-lightest">
      <div className="h-full flex flex-col items-center justify-around">
        <h1 className="my-heading">404: Page Not Found</h1>
        <Link className="my-btn" to="/">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
