import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
      <AppProvider>
          <div className='container'>
              <div className='row mt-3'>
                  <h1 className='mt-3'>Shopping App</h1>

                  <div className='col-sm'>
                      <CartValue/>
                  </div>
                  <div className='col-sm'>
                      <Location/>
                  </div>
                  <h2>Shopping Cart</h2>

                  <div>
                      <ExpenseList/>
                  </div>
                  <h2>Add Items</h2>

                  <div>
                      <ItemSelected/>
                  </div>
              </div>
          </div>
      </AppProvider>
  );
}

export default App;
