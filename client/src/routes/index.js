// import PrivateRoute from "../components/PrivateRoute"
// import ProjectContent from "../components/Task"
// import DefaultLayout from "../layout/DefaultLayout"
// import Home from "../pages/Home"
// import Login from "../pages/Login"
// import SignUp from "../pages/SignUp"
// import TaskDetail from "../pages/Task/TaskDetail"

// export const routes = [
//   {
//     path: "login",
//     element: <Login/>
//   },
//   {
//     path: "signup",
//     element: <SignUp/>
//   },
//   {
//     element: <PrivateRoute/>,
//     children: [
//       {
//         path: "/",
//         element: <DefaultLayout/>,
//         children: [
//           {
//             index: true,
//             element: <Home/>
//           },
//           {
//             path: "task",
//             element: <ProjectContent/>,
//             children: [
//               {
//                 path: "detail:id",
//                 element: <TaskDetail/>
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// ]