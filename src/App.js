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
<<<<<<< HEAD
import NewsPagess from "./components/HomePages/NewsPages";
import NewsDetalisPages from "./components/HomePages/NewsDetalisPages";
import ContactPages from "./components/HomePages/ContactPages";
=======
>>>>>>> 4b76345db575fda0d64a8494b5ff2cd29a2a0a00

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
<<<<<<< HEAD
          <Route path="/news" exact component={NewsPagess}></Route>
          <Route path="/newsdetalis" exact component={NewsDetalisPages}></Route>
          <Route path="/contact" exact component={ContactPages} ></Route>
=======
>>>>>>> 4b76345db575fda0d64a8494b5ff2cd29a2a0a00
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
