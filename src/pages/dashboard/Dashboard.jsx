import * as React from "react";
import NavBar from "../../components/navbar/NavBar";
import "./Dashboard.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";


function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }
  if (!user) {
    navigate("/signup");
  }
  if (user){
    return (
      <>
        <NavBar />
        <div className="user">
          <ul className="user-dashboard">
            <li>{user.displayName}</li>
            <li> {user.email}</li>
          </ul>
        </div>
        <div className="dashboard">
         
        <iframe title="Dashboard_Tunisair"  
        src="https://app.powerbi.com/view?r=eyJrIjoiMGIyOTYxNTMtN2ViZC00Y2FhLWI4MmYtMzhjYzRlOTNkNGIxIiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9&navContentPaneEnabled=false"
        frameBorder="0"
        allowFullScreen={true}
        filterpaneenabled="false"
        
          ></iframe>
        

        </div>
      </>
    );
  }
    
}
export default Dashboard;
