import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/TopBar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/dashboard";
import Category from "./scenes/category/category";
import Bar from "./scenes/bar/bar";
import Form from "./scenes/form/form";
import Line from "./scenes/line/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Allorders from "./scenes/orders/Allorder";
import Allproduct from "./scenes/product/Allproduct";
import Allseller from "./scenes/seller/Allseller";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/category" element={<Category/>} />
              <Route path="/allorder" element={<Allorders/>} />
              <Route path="/allproduct" element={<Allproduct/>} />          
              <Route path="/allseller" element={<Allseller/>} />          
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;