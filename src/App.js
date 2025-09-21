import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import TaskPage from './TaskListProject/TaskPage';
import CatFact from "./getCatFactApi/CatFact";
import PredictAgeApi from "./PredictAgeApi/PredictAgeApi";
import Excuser from "./Exuser/Excuser";
import Profile from "./AppContextProject/Profile";
import ChangeUsername from "./AppContextProject/ChangeUsername"
import UserDetails from "./AppContextProject/UserDetails"
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Catfactquery from "./ReactQuery/Catfactquery";
import Form from "./Form/Form";
import CounterApp from "./Hooks/CounterApp";
import Login from "./ReactReduxToolkit/login";
import Home from "./ReactReduxToolkit/home";
import { Provider } from "react-redux";
import store from "./ReactReduxToolkit/store";

export const AppContext = createContext();
function App() {
  const client = new QueryClient()
  const [username, setUsername] = useState("PoojaN");
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <AppContext.Provider value={{username, setUsername}}>
            <Router>
              <Routes>
                <Route path="/TaskPage" element={<TaskPage />} />
                <Route path="/CatFact" element={<CatFact />} />
                <Route path="/PredictAgeApi" element={<PredictAgeApi />} />
                <Route path="/Excuser" element={<Excuser />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/ChangeUsername" element={<ChangeUsername />} />
                <Route path="/UserDetails" element={<UserDetails />} />
                <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
                <Route path="/catfactquery" element={<Catfactquery/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/CounterApp" element={<CounterApp/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Home" element={<Home/>}/>
              </Routes>
            </Router>
          </AppContext.Provider>
        </Provider>
    </QueryClientProvider>
    </div>
  );
}

export default App;
