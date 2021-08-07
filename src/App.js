import { BrowserRouter as Router, Route, Switch, BrowserRouter} from "react-router-dom";
import AboutPages from "./components/HomePages/AboutPages";
import CoursesDetalisPages from "./components/HomePages/CoursesDetalisPages";
import CoursesPages from "./components/HomePages/CoursesPages";
import FaqPages from "./components/HomePages/FaqPages";
import GalleryPages from "./components/HomePages/GalleryPages";
import Home from "./components/HomePages/Home";
import PricingPages from "./components/HomePages/PricingPages";
import TeachersPages from "./components/HomePages/TeachersPages";
import TeacherDetalisPages from "./components/HomePages/TeacherDetalisPages";
import BecomeTeacheresPages from "./components/HomePages/BecomeTeachersPages";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={AboutPages}></Route>
          <Route path="/gallery" exact component={GalleryPages}></Route>
          <Route path="/pricing" exact component={PricingPages}></Route>
          <Route path="/faq" exact component={FaqPages}></Route>
          <Route path ='/courses' exact component={CoursesPages}></Route>
          <Route path="/coursedetalis" exact component={CoursesDetalisPages} />
          <Route path="/teachers" exact component={TeachersPages}></Route>
          <Route path="/teachersdetalis" exact component={TeacherDetalisPages}></Route>
          <Route path="/becometeacher" exact component={BecomeTeacheresPages}></Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
