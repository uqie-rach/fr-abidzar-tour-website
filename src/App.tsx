import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import { routes } from "@/routes/route";
import { Navbar, Footer } from "@/components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading routes...</div>}>
        <Routes>
          {routes.map(({ path, element }: {path: string, element: any }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
