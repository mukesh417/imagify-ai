// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import axios from 'axios'
// import { useNavigate } from "react-router";

// export const AppContext = createContext();

// const AppContextProvider = (props)=>{
//     const [user, setUser] = useState(null);
//     const [showLogin, setShowLogin] = useState(false);

//     const [token , setToken] = useState(localStorage.getItem('token'))

//     const [credit, setCredit] = useState(false)
//     const backendUrl = import.meta.env.VITE_BACKEND_URL

//     const navigate = useNavigate()

//     const loadCreditsData = async()=>{
//         try {
//             const {data} = await axios.get(backendUrl + '/api/user/credits',{headers:{token}})

//             if(data.success){
//                 setCredit(data.credits)
//                 setUser(data.user)
//             }

//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }
   
//     const generateImage = async(prompt)=>{
//         try {
//           const {data} =   await axios.post(backendUrl + '/api/image/generate-image',{prompt}, {headers: {token}})
//           if(data.success){
//             loadCreditsData()
//             return data.resultImage
//           } else{
//             toast.error(data.message)
//           }
//         } catch (error) {
//             toast.error(data.message)
//             loadCreditsData()
//             if(data.creditBalance === 0){
//                 navigate('/buy')
//             }
//         }
//     }


//     const logout = ()=>{
//         localStorage.removeItem('token');
//         setToken('')
//         setUser(null)
//     }


//     useEffect(()=>{
//         if(token){
//             loadCreditsData()
//         }
//     },[token])

//     const value ={
//         user , setUser,showLogin,setShowLogin, backendUrl, token , setToken, credit, setCredit, loadCreditsData, logout,
//         generateImage
//     }
//     return (
//         <AppContext.Provider value={value}>
//             {props.children}
//         </AppContext.Provider>
//     )
// }
// export default AppContextProvider;
// ==========================================================================================================
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);

  // ✅ LIVE BACKEND URL FROM ENV
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  // =========================
  // LOAD USER CREDITS
  // =========================
//   const loadCreditsData = async () => {
//     try {
//       const { data } = await axios.get(
//         `${backendUrl}/api/user/credits`,
//         { headers: { token } }
//       );

//       if (data.success) {
//         setCredit(data.credits);
//         setUser(data.user);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Unable to load user data");
//     }
//   };

const loadCreditsData = async () => {
  try {
    const { data } = await axios.get(
      `${backendUrl}/api/user/credits`,
      {
        headers: {
          token: token   // ✅ backend expects this
        }
      }
    );

    if (data.success) {
      setCredit(data.credits);
      setUser(data.user);
    }
  } catch (error) {
    console.error(error);
    toast.error("Unable to load user data");
  }
};


  // =========================
  // GENERATE IMAGE
  // =========================
//   const generateImage = async (prompt) => {
//     try {
//       const { data } = await axios.post(
//         `${backendUrl}/api/image/generate-image`,
//         { prompt },
//         { headers: { token } }
//       );

//       if (data.success) {
//         await loadCreditsData();
//         return data.resultImage;
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error(error);

//       // ✅ Server responded with error
//       if (error.response) {
//         toast.error(error.response.data.message || "Server error");

//         if (error.response.data.creditBalance === 0) {
//           navigate("/buy");
//         }
//       } 
//       // ❌ Server unreachable / Network error
//       else {
//         toast.error("Server not reachable. Please try again later.");
//       }
//     }
//   };
const generateImage = async (prompt) => {
  try {
    const { data } = await axios.post(
      `${backendUrl}/api/image/generate-image`,
      { prompt },
      {
        headers: {
          token: token   // ✅ VERY IMPORTANT
        }
      }
    );

    if (data.success) {
      await loadCreditsData();
      return data.resultImage;
    } else {
      toast.error(data.message);
    }

  } catch (error) {
    console.error(error);

    if (error.response) {
      toast.error(error.response.data.message || "Unauthorized");

      if (error.response.data.message?.includes("Not Authorized")) {
        logout();
      }
    } else {
      toast.error("Server not reachable");
    }
  }
};


  // =========================
  // LOGOUT
  // =========================
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
    setCredit(false);
  };

  // =========================
  // AUTO LOAD DATA ON LOGIN
  // =========================
  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
