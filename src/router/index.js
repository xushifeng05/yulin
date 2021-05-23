import { createRouter, createWebHistory } from 'vue-router'
import teacherPutTask from "../views/teacher/teacherPutTask";
import findStudent from "../views/teacher/findStudent";

import Login from "../views/Login/Login";
import Reg from "../views/Login/Reg";
import Teacher from "../views/Login/Teacher";
import TeacherOrStudent from "../views/Login/TeacherOrStudent";
import head from "../views/header/homePage";
import LockInHeader from "../views/LockIn/LockInHeader";
import LockInPage from "../components/LockInComponent/LockInPage";
import LockInSuccess from "../components/LockInComponent/LockInSuccess";
import Alert from "../components/LockInComponent/Alert";
import ActDetails from "../components/LockInComponent/ActDetails";
import Setting from "../components/setting/Setting";
import UserData from "../components/setting/UserData";
import Recording from "../components/setting/Recording";
import Certificate from "../components/setting/Certificate";

const routes = [
  {
    path: '/findStudent',
    name: findStudent,
    component: findStudent
  },
  {
    path: '/teacherPutTask',
    name: teacherPutTask,
    component: teacherPutTask,
  },
  {
    path: '/certificate',
    name: Certificate,
    component: Certificate
  },
  {
    path: '/recording',
    name: Recording,
    component: Recording
  },
  {
    path: '/userData',
    name: UserData,
    component: UserData
  },
  {
    path: '/setting',
    name: Setting,
    component: Setting
    // component: () => import('../views/text.vue')
  },
  {
    path:'/homePage',
    name: head,
    component: head
  },
  {
    path: '/LockInPage',
    name: LockInPage,
    component:LockInPage
  },
  {
    path: '/Login',
    name: Login,
    component:Login
  },
  {
    path: '/Reg',
    name: Reg,
    component:Reg
  },
  {
    path: '/Teacher',
    name: Teacher,
    component:Teacher
  },
  {
    path: '/Alert',
    name: Alert,
    component:Alert
  },
  {
    path: '/LockInSuccess',
    name: LockInSuccess,
    component:LockInSuccess
  },
  {
    path: '/ActDetails',
    name: ActDetails,
    component:ActDetails
  },
  {
    path: '/TeacherOrStudent',
    name: TeacherOrStudent,
    component:TeacherOrStudent
  },
  {
    path: '/LockInHeader',
    name: LockInHeader,
    component: LockInHeader
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

})

export default router
