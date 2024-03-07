import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/LoginPage/index.jsx';
import Dashboard from './Pages/Dashboard/index';
import Advertising from './Pages/Advertising/index';
import Notification from './Pages/Notifications/index';
import Listing from './Pages/Listings/index';
import News from './Pages/News';
import Statistics from './Pages/Statistics/index';
import UserRepport from './Pages/User Repport/index';
import Plans from './Pages/Plans/index';
import Hanking from './Pages/Hanking/index.jsx';
import Pins from './Pages/Pins/index';
import CreateNewPins from './Pages/Pins/pages/CreatePins.jsx';
import EditPins from './Pages/Pins/pages/CreatePins.jsx';
import Support from './Pages/Support/index';
import System from './Pages/System/index';
import Archive from './Pages/Archive/index';
import PrivacyPolicy from './Pages/Privacy Policy/index';
import AddBanner from './Pages/Add Banner';
import CreateBanner from './Pages/Advertising/CreateBanner.jsx';
import NewBanner from './Pages/Advertising/CreateBanner.jsx';
import EditBanner from './Pages/Advertising/CreateBanner.jsx';

import AdvertisingPage from './Pages/Advertising/Advertising.jsx';
import CreateSpotlight from './Pages/Advertising/createSpotlight.jsx';
import Editspotlight from './Pages/Advertising/createSpotlight.jsx';
import NewSpotLight from './Pages/Advertising/createSpotlight.jsx';
import CreateTextAdd from './Pages/Advertising/CreateTextAdd.jsx';
import EdittextAdd from './Pages/Advertising/CreateTextAdd.jsx';
import NewAdd from './Pages/Advertising/CreateTextAdd.jsx';
import CreateNewMessage from './Pages/Notifications/index.jsx';
import Advices from './Pages/Notifications/page/CreateNewMessage.jsx';
import Actionsbutton from './Pages/Listings/page/ActionsButton.jsx';
import NewListing from './Pages/Listings/page/CreateListing.jsx';
import EditListing from './Pages/Listings/page/CreateListing.jsx';
import CreateListing from './Pages/Listings/page/CreateListing.jsx';
import CreateListingPreview from './Pages/Listings/page/CreateListingPreview.jsx';
import AddNewPost from './Pages/News/page/AddNewPost.jsx';
import NewPost from './Pages/News/page/AddNewPost.jsx';
import CreateNewUser from './Pages/System/pages/CreateUser.jsx';
import EditUser from './Pages/System/pages/CreateUser.jsx';
import EditIllustrations from './Pages/System/pages/CreateUser.jsx';
import CreatenewPlan from './Pages/Plans/pages/createnewPlan.jsx';
import CreatePlansUser from './Pages/Plans/pages/Createnewuser.jsx';
import UpdateTextAdd from './Pages/UpdatePage/UpdateTextAd/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Advertising' element={<Advertising />} />
        <Route path='/Notification' element={<Notification />} />
        <Route path='/Listing' element={<Listing />} />
        <Route path='/News' element={<News />} />
        <Route path='/Statistics' element={<Statistics />} />
        <Route path='/UserRepport' element={<UserRepport />} />
        <Route path='/Plans' element={<Plans />} />
        <Route path='/Hanking' element={<Hanking />} />
        <Route path='/Pins' element={<Pins />} />
        <Route path='/CreateNewPins' element={<CreateNewPins />} />
        <Route path='/EditPins' element={<EditPins />} />
        <Route path='/System' element={<System />} />
        <Route path='/Archive' element={<Archive />} />
        <Route path='/Support' element={<Support />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/AddBanner' element={<AddBanner />} />
        <Route path='/CreateBanner' element={<CreateBanner />} />
        <Route path='/NewBanner' element={<NewBanner />} />
        <Route path='/AdvertisingPage' element={<AdvertisingPage />} />
        <Route path='/EditBanner' element={<EditBanner />} />
        <Route path='/CreateSpotlight' element={<CreateSpotlight />} />
        <Route path='/Editspotlight' element={<Editspotlight />} />
        <Route path='/NewSpotLight' element={<NewSpotLight />} />
        <Route path='/CreateTextAdd' element={<CreateTextAdd />} />
     
        {/* <Route path='/UpdateTextAdd' element={<UpdateTextAdd />} /> */}
        
        <Route path='/EdittextAdd' element={<EdittextAdd />} />
        <Route path='/NewAdd' element={<NewAdd />} />
        <Route path='/CreateNewMessage' element={<CreateNewMessage />} />
        <Route path='/Advices' element={<Advices />} />
        <Route path='/Actionsbutton' element={<Actionsbutton />} />
        <Route path='/CreateListing' element={<CreateListing />} />
        <Route path='/NewListing' element={<NewListing />} />
        <Route path='/EditListing' element={<EditListing />} />
        <Route
          path='/CreateListingPreview'
          element={<CreateListingPreview />}
        />
        <Route path='/AddNewPost' element={<AddNewPost />} />
        <Route path='/NewPost' element={<NewPost />} />
        <Route path='/CreateNewUser' element={<CreateNewUser />} />
        <Route path='/EditUser' element={<EditUser />} />
        <Route path='/EditIllustrations' element={<EditIllustrations />} />
        <Route path='/CreatenewPlan' element={<CreatenewPlan />} />
        <Route path='/CreatePlansUser' element={<CreatePlansUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
