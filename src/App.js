import './App.css';
import React from "react";
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import { filterData, apiUrl } from './filterData';
import { useState, useEffect } from 'react';
import Spinner from './components/Spinner';
import { toast } from 'react-toastify';


function App() {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([])
  const [curCategory, setCurCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      if (response.status === 400) {
        toast.error("Error 404 ! Refresh Requirred");
      }
      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Error Occurred ! Refresh Requirred");
    }
    setLoading(false);
  }


  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className='min-h-screen flex flex-col bg-bgDark2'>
      <Navbar></Navbar>

      <Filter
        filterData={filterData}
        curCategory={curCategory}
        setCurCategory={setCurCategory}
      ></Filter>

      <div className='w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center'>

        {
          loading ? <Spinner /> :
            <Cards
              courses={courses}
              curCategory={curCategory}
            ></Cards>
        }

      </div>

    </div>
  );
}

export default App;
