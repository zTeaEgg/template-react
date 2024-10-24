import { bootstrap as bootstrap_, isMicroApp, mount as mount_, startMainApp, unmount as unmount_, update as update_ } from '@/microApp'
import { router } from '@/router/index.tsx'
import { persistStore_, store } from '@/store/index.tsx'
import '@/style/index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { renderWithQiankun } from 'vite-plugin-qiankun/es/helper'
import { getAppConfig } from './utils/useConfig'

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
const { mainApp, microApp } = getAppConfig()
if (mainApp) {
  startMainApp()

}
if (microApp) {
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
} else {
  render()

}


// export const mount = (props)=>{
//   mount_(props,render)
// }
// export const unmount = unmount_
// export const update = update_
// export const bootstrap = bootstrap_

