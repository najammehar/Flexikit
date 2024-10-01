import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/commons/Sidebar";
import PreviewBox from "./components/commons/PreviewBox";
import { data } from "./components/commons/Data";
// import { buttonData } from "./components/commons/Data";
import Nqavbar from "./components/commons/Navbar";

// Lazy-loaded components for code-splitting
// const Button1 = lazy(() => import("./components/buttons/Button1"));
// const SpinnigCircles = lazy(() =>
//   import("./components/loaders/SpinningCircles")
// );

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Sidebar />
        <div className="flex-1 md:px-16 ">
          <Suspense fallback={<div>Loading...</div>}>
            <Nqavbar />
            <Routes>
              {/* Button Routes */}
              {/* {buttonData.map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={
                    <PreviewBox
                      Component={item.component}
                      importPath={item.importPath}
                      UsageCode={item.usageCode}
                      propsTable={item.propsTable}
                      secColor={item.secCol}
                    />
                  }
                />
              ))} */}
              {/* Loader Routes */}
              {data.map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={
                    <PreviewBox
                      Component={item.component}
                      importPath={item.importPath}
                      UsageCode={item.usageCode}
                      propsTable={item.propsTable}
                      secColor={item.secCol}
                    />
                  }
                />
              ))}
              {/* <Route 
                path="/loaders/spinningCircles" 
                element={
                  <PreviewBox 
                    Component={SpinnigCircles} 
                    importPath="flexikit" 
                    UsageCode="SpinningCircles"
                    propsTable={[
                      { name: 'spinDuration', defaultValue: '2s', description: 'Duration of the spinning animation' },
                      { name: 'size', defaultValue: '16px', description: 'Size of the loader' },
                      { name: 'primaryColor', defaultValue: '#ff5733', description: 'Primary color of the loader' },
                      { name: 'secondaryColor', defaultValue: '#ffc300', description: 'Secondary color of the loader' },
                    ]}
                    secColor: true
                  />
                }
              /> */}
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
