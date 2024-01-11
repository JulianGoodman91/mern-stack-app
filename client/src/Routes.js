import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipientList  from './pages/recipientList';
import Booking  from './pages/booking';
import CreateRecipient  from './pages/createRecipient';
import DesignTemplate  from './pages/designTemplate';
import DesignUpload  from './pages/designUpload';
import LandingPage  from './pages/landingPage';
import LogOn  from './pages/logOn';
import Options from './pages/options';
import PostType  from './pages/postType';
import RecipientDataCreateMan  from './pages/recipientDataCreateMan';
import RecipientDataSelect  from './pages/recipientDataSelect';
import RecipientDataUpload  from './pages/recipientDataUpload';
import RecipientGroups  from './pages/recipientGroups';
import ReviewCampaign  from './pages/reviewCampaign';
import SignUp from './pages/signUp';



const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/landingPage" element={<LandingPage />} />
                <Route path="/logOn" element={<LogOn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/recipientList" element={<RecipientList />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/createRecipient" element={<CreateRecipient />} />
                <Route path="/options" element={<Options />} />
                <Route path="/designTemplate" element={<DesignTemplate />} />
                <Route path="/designUpload" element={<DesignUpload />} />
                <Route path="/postType" element={<PostType />} />
                <Route path="/recipientDataCreateMan" element={<RecipientDataCreateMan />} />
                <Route path="/recipientDataSelect" element={<RecipientDataSelect />} />
                <Route path="/recipientDataUpload" element={<RecipientDataUpload />} />
                <Route path="/recipientGroups" element={<RecipientGroups />} />
                <Route path="/reviewCampaign" element={<ReviewCampaign />} />
            </Routes>
      </Router>
    )
}

export default MyRoutes; 
