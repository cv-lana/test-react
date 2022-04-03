import { Routes, Route } from "react-router-dom";
import { Sorting } from './components/Sorting';
import { Users } from './pages/Users';
import { Profile } from './pages/Profile';
import { useFetch } from './hooks/useFetch';
import { useSorted } from './hooks/useSorted';
import { useProfile } from "./hooks/useProfile";
import { Context } from "./functions/context";

function App() {
  const profile = useProfile();
  const sort = useSorted();
  const res = useFetch(sort.sorted);

  return (
    <Context.Provider value={{ res, sort, profile }}>
      <div className="wrapper">
        <div className="container">
          <div className="content">
            <Sorting />
            <Routes>
              <Route path="/" element={<Users />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
