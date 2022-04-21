import logo from './logo.svg';
import './App.css';
import SideBAr from './components/SideBar';
import TopBar from './components/TopBar';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import StudentsList from './components/StudentsList';
import TeachersList from './components/TeachersList';
import {CreateStudent} from './components/CreateStudent';
import { CreateTeacher } from './components/CreateTeacher';
import { ViewStudent } from './components/ViewStudent';
import { EditStudent } from './components/EditStudent';
import { ViewTeacher } from './components/ViewTeacher';
import { EditTeacher } from './components/EditTeacher';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <body id="page-top">
        <div id="wrapper">
          <SideBAr />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopBar />
              <Routes>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/studentslist" element={<StudentsList />}/>
                <Route path="/createstudent" element={<CreateStudent />}/>
                <Route path="/ViewStudent/:id" element={<ViewStudent />}/>
                <Route path="/EditStudent/:id" element={<EditStudent />}/>

                <Route path="/teacherslist" element={<TeachersList />}/>
                <Route path="/createteacher" element={<CreateTeacher />}/>
                <Route path="/ViewTeacher/:id" element={<ViewTeacher />}/>
                <Route path="/EditTeacher/:id" element={<EditTeacher />}/>
             </Routes>

            </div>
          </div>

        </div>
      </body>

    </BrowserRouter>
  );
}

export default App;
