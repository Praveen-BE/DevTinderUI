import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./component/Body";
import Login from "./component/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./component/Feed";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter
          basename="/"
          future={{
            v7_relativeSplatPath: true,
            v7_startTransition: true,
          }}
        >
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<div>Profile</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
