

import React from "react";
import {Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import {Route} from "react-router-dom"
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (<div>
        <div className="bg-slate-900">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
  </div>)
};

export default App;



// // App.jsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

// /*
//   If you already have pages/components (eg. ./pages/Home.jsx),
//   replace the inline Home/NotFound with imports:
//     import Home from "./pages/Home";
//     import NotFound from "./pages/NotFound";
// */

// const Home = () => {
//   return (
//     // <main style={{ padding: 20 }}>
//     //   <h1>Welcome — Home</h1>
//     //   <p>This is the root route (path "/"). Replace this with your Home component.</p>
//     // </main>

//      (<div>
//         <div className="bg-slate-900">
//           <Navbar/>
//         </div>
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/cart" element={<Cart/>} />
//         </Routes>
//   </div>)

//   );
// };

// const NotFound = () => {
//   return (
//     <main style={{ padding: 20 }}>
//       <h2>404 — Not Found</h2>
//       <p>No route matched the requested URL.</p>
//     </main>
//   );
// };

// const App = () => {
//   return (
//     <>
//       <Toaster />
//       <Routes>
//         {/* explicit root path */}
//         <Route path="/" element={<Home />} />

//         {/* or you can use index inside a parent route:
//             <Route path="/" element={<Layout />}>
//               <Route index element={<Home/>} />
//             </Route>
//         */}

//         {/* fallback for everything else */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// };

// export default App;
