import Loader from "@/components/Loader";
import LoadingScreen from "@/components/LoadingScreen";
import FlightNavbar from "@/components/Navbar";
export default function LoadingPage() {
    return (
        <div>
    <FlightNavbar />
    <Loader/>
    <LoadingScreen/>
      </div>
    );
  }
  