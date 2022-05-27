import "./App.css";
import Welcome from "./pages/Welcome";
import Planlayout from "./pages/layout/Planlayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import { Home } from "@mui/icons-material";
import AppLayout from "./pages/layout/AppLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Planlayout>
          <Routes>
            <Route
              exact
              path={[
                "/",
                "/phone_confirmation",
                "/code_confirm",
                "/allow_notification",
              ]}
            >
              <Route exact path="/" element={<Welcome />} />
              <Route
                exact
                path="/phone_confirmation"
                element={<PhoneConfirmation />}
              />
              <Route exact path="/code_confirm" element={<CodeConfirm />} />
              <Route
                exact
                path="/allow_notification"
                element={<AllowNotification />}
              />
            </Route>
          </Routes>
        </Planlayout>
        <AppLayout>
          <Routes>
            <Route exact path={["/home"]}>
              <Route exact path="/home" element={<Home />} />
            </Route>
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
