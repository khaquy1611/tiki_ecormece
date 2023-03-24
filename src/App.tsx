import { Fragment, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes/index'
import { Skeleton } from 'antd'
import DefaultComponent from './components/Default/DefaultComponent'

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<Skeleton />}>
          <Routes>
            {routes.map((route: any) => {
              const Page = route.page
              const { id, path, isShowHeader } = route
              const Layout: any = isShowHeader ? DefaultComponent : Fragment
              return (
                <Route
                  key={id}
                  path={path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })}
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
