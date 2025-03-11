import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Audit from "../pages/Audit/Audit";
import Taxation from "../pages/Taxation/Taxation";
import Accounting from "../pages/Accounting/Accounting";
import ProjectProfile from "../pages/Project Profile/ProjectProfile";
import FeasibilityReport from "../pages/Feasibility Report/FeasibilityReport";
import CompanyFormation from "../pages/Company Formation/CompanyFormation";
import Foreginco from "../pages/Foreign Co/Foreginco";
import RepulatorySupport from "../pages/Regulatory Support/RepulatorySupport";
import FinancialAdvisory from "../pages/Financial Advisory Services/FinancialAdvisory";
import BlogPost from "../pages/Blog Post/BlogPost";
import Career from "../pages/Career Page/Career";
import ContactUS from "../pages/Contact US/ContactUS";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/audit',
            element: <Audit></Audit>
        },
        {
            path: '/taxsation',
            element: <Taxation></Taxation>
        },
        {
            path: '/accounting',
            element: <Accounting></Accounting>
        },
        {
            path: '/projectprofile',
            element: <ProjectProfile></ProjectProfile>
        },
        {
            path: '/fasibility',
            element: <FeasibilityReport></FeasibilityReport>
        },
        {
            path: '/companyformation',
            element: <CompanyFormation></CompanyFormation>
        },
        {
            path: '/foregin',
            element: <Foreginco></Foreginco>
        },
        {
            path: '/regulatory',
            element: <RepulatorySupport></RepulatorySupport>
        },
        {
            path: '/financialadvisory',
            element: <FinancialAdvisory></FinancialAdvisory>
        },
        {
            path: '/blogpost',
            element: <BlogPost></BlogPost>
        },
        {
            path: '/career',
            element: <Career></Career>
        },
        {
            path: '/contactus',
            element: <ContactUS></ContactUS>
        },
      ]
    },
  ]);