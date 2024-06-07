
import ReactDOM from 'react-dom/client'
//react router dom
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'

//redux
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import UserList from './pages/UserList'
import CreateUser from './pages/CreateUser'
import HeaderHome from './Components/HeaderHome'
import Home from './pages/Home'
import UserListActionAsync from './pages/UserListActionAsync'

//react query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
//react query dev tool
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import UserListReactQuery from './pages/ReactQueryPage/UserListReactQuery'
import CreateUserReactQuery from './pages/ReactQueryPage/CreateUserReactQuery'

const queryClient = new QueryClient();
export const navigateHistory = createBrowserHistory();


ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <HistoryRouter history={navigateHistory}>
        <HeaderHome />
        <Routes>
          <Route path='' element={<Home />}></Route>
          <Route path='user-list' element={<UserList />}></Route>
          <Route path='create-user' element={<CreateUser />}></Route>
          <Route path='user-list-action-async' element={<UserListActionAsync />}></Route>
          <Route path='react-query-userlist' element={<UserListReactQuery />}></Route>
          <Route path='react-query-create-user' element={<CreateUserReactQuery />}></Route>
        </Routes>
      </HistoryRouter>

      <ReactQueryDevtools initialIsOpen={false} position='bottom'></ReactQueryDevtools>
    </Provider>
  </QueryClientProvider>

  ,
)
