import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ExpCard from '../Components/Card/ExpCard';
import HomeCard from '../Components/Card/HomeCard';
import SearchForm from '../Components/Form/SearchForm';
import Spinner from '../Components/Spinner/Spinner'
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allExperience, setAllExperience] = useState([]);
  useEffect(() => {
    fetch('expdata.json')
      .then(res => res.json())
      .then(data => setAllExperience(data));
  }, [])
  return (
    <div className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20'>
      <div className='mt-4'>
        <SearchForm></SearchForm>
      </div>
      <div className='flex-1'>
        <div>
          <div className="flex justify-between px-4 mt-10">
            <p className='text-xl font-bold'>Home</p>
            <Link to='/coming-soon'><p>See All</p></Link>
          </div>
          <div className="container pb-8 pt-2 mx-auto">
            <div className="flex flex-wrap">
              {
                [...Array(3)].map((_, i) => <HomeCard
                  key={i}
                  
                ></HomeCard>)
              }
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between px-4">
            <p className='text-xl font-bold'>Experience</p>
            <Link to='/coming-soon'><p>See All</p></Link>
          </div>
          <div className="container pb-8 pt-2 mx-auto">
            <div className="flex flex-wrap">
              {
                allExperience.slice(0, 4).map((exp, i) => <ExpCard
                  key={i}
                  exp={exp}
                ></ExpCard>)
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
