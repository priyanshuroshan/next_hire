import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import axios from 'axios'
import { setUser } from '../../redux/authSlice'
import { USER_API_END_POINT } from '@/utils/constant'

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(store => store.auth);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate('/');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        
        {/* LOGO */}
        <Link to="/">
        <h1 className='text-2xl font-bold'>Next<span className='text-[#F83002]'>Hire</span></h1>
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6">
          <ul className="flex font-medium items-center gap-6 text-gray-700">
            {user && user?.role === "recruiter" ? (
              <>
                <li><Link className="hover:text-purple-600 transition" to="/admin/companies">Companies</Link></li>
                <li><Link className="hover:text-purple-600 transition" to="/admin/jobs">Jobs</Link></li>
              </>
            ) : (
              <>
                <li><Link className="hover:text-purple-600 transition" to="/">Home</Link></li>
                <li><Link className="hover:text-purple-600 transition" to="/jobs">Jobs</Link></li>
                <li><Link className="hover:text-purple-600 transition" to="/browse">Browse</Link></li>
              </>
            )}
          </ul>

          {/* ACTIONS */}
          {!user ? (
            <div className="flex gap-2">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-600 hover:bg-purple-50 transition-all duration-200"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-purple-600 hover:bg-purple-700 transition-all duration-200">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer hover:scale-105 transition">
                  <AvatarImage src={user?.profile?.profilePhoto} />
                  <AvatarFallback>{user?.fullname?.charAt(0)}</AvatarFallback>
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-72 shadow-lg border-purple-100">
                <div className="flex gap-3 items-center border-b pb-3">
                  <Avatar>
                    <AvatarImage src={user?.profile?.profilePhoto} />
                    <AvatarFallback>{user?.fullname?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{user?.fullname}</h4>
                    <p className="text-sm text-gray-500">{user?.profile?.bio}</p>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  {user?.role === "student" && (
                    <Button variant="link">
                      <Link to="/profile">View Profile</Link>
                    </Button>
                  )}

                  <Button
                    onClick={logoutHandler}
                    variant="destructive"
                    className="hover:bg-red-600 transition"
                  >
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
