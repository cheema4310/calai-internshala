import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const auth = useSelector((state) => state.auth.auth);
  return (
    <div className="w-full bg-darker py-4">
      <div className="w-3/4 mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="my-heading text-glassOrange">CalAI</h2>

          {!auth ? (
            <div className="flex justify-center items-center gap-2">
              <Link className="my-btn-light" to="/login">
                Sign In
              </Link>
              <Link className="my-btn-light" to="/register">
                Register
              </Link>
            </div>
          ) : (
            <Link to="/logout" className="my-btn-light">
              Sign Out
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
