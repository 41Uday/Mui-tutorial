// import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import "./App.css";
// import MuiNavabar from './component/MuiNavbar';

import Home from './components/Home';
import Login from './components/Login';
// import MuiAccordion from "./component/MuiAccordion";im
// import MuiImgList from "./component/MuiImgList.js";
// import MuiCard from "./component/MuiCard";
// import MuiAutoComplete from "./component/MuiAutoComplete";
// import MuiLayout from "./component/MuiLayout";
// import MuiRating from "./component/MuiRating";
// import MuiSwitch from "./component/MuiSwitch";
// import MuiRadio from "./component/MuiRadio";
// import MuiCheckbox from "./component/MuiCheckbox";
// import MuiTypography from "./component/MuiTypography";
// import MuiButton from "./component/MuiButton";
// import MuiTextField from './component/MuiTextField';
// import MuiSelect from "./component/MuiSelect";

// const Photos = lazy(() => import("./component/Photos"));

const a = true;

function App() {
  // const navigate = useNavigate();
  return (
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MuiTextField /> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadio /> */}
      {/* {<MuiCheckbox />} */}
      {/* <MuiSwitch /> */}
      {/* <MuiRating /> */}
      {/* <MuiAutoComplete /> */}
      {/* <MuiLayout /> */}
      {/* <MuiCard /> */}
      {/* <MuiAccordion /> */}
      {/* <MuiImgList /> */}
      {/* <MuiNavabar /> */}
      <BrowserRouter>
        {a === false ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
