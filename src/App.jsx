import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./component/Body";
import Login from "./component/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./component/Feed";
import Profile from "./component/Profile";
import EditProfile from "./component/EditProfile";
import ReviewRequests from "./component/ReviewRequests";
import ConnectionsPage from "./component/ConnectionsPage";

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
              <Route path="/profile" element={<Profile />} />
              <Route path="/editprofile" element={<EditProfile />} />
              <Route path="/connections" element={<ConnectionsPage />} />
              <Route path="/request" element={<ReviewRequests />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
