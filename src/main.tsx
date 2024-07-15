import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { renderWithQiankun } from 'vite-plugin-qiankun/es/helper'
import { bootstrap as bootstrap_, isMicroApp, mount as mount_, unmount as unmount_, update as update_ } from './microApp'
import { router } from './router/index.tsx'
import { persistStore_, store } from './store/index.tsx'
import './style/index.scss'

function render() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistStore_}>

          <RouterProvider router={router}>
          </RouterProvider>
        </PersistGate>

      </Provider>

    </React.StrictMode>,
  )
}
// function loadMicroApp_() {
//   start({ prefetch: false, urlRerouteOnly: true })
//   registerMicroApps(mainConfig.micro)
//   loadMicroApp({
//     ...mainConfig.micro[0]
//   })
// }
if (!isMicroApp()) {
  render()

} else {
  renderWithQiankun({
    mount: (props) => {
      mount_(props, render)
    },
    unmount: unmount_,
    update: update_,
    bootstrap: bootstrap_,
  })
}
// export const mount = (props)=>{
//   mount_(props,render)
// }
// export const unmount = unmount_
// export const update = update_
// export const bootstrap = bootstrap_

