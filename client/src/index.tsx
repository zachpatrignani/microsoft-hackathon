import ReactDOM from 'react-dom/client';
import './index.css';
import JobBoard from './screens/JobBoard';
import AddJob from './screens/AddJob';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import  { store }  from './redux/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobBoard />} />
        <Route path="/add-job" element={<AddJob />} />
      </Routes>
      </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
