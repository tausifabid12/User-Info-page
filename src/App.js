import { Button } from '@material-tailwind/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import './App.css';
import UserInfoCard from './components/userInfoCard/UserInfoCard';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [size] = useState(3);

  const { data: userData } = useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
        res.json()
      ),
  });

  const pages = Math.ceil(userData?.length / size);

  const lastpageIndex = currentPage * size;
  const firstPageIndex = lastpageIndex - size;

  const pagedData = userData?.slice(firstPageIndex, lastpageIndex);

  return (
    <>
      <header className="p-4 w-ful grid place-content-center shadow-md">
        <div className="relative">
          <h2 className="text-4xl font-bold ">User Info</h2>
          <div className="w-full bg-red-500 px-4 py-2 text-white absolute -bottom-[2px] -z-30 rounded-sm"></div>
        </div>
      </header>
      <main className=" min-w-full lg:px-16 scroll-py-6 ">
        <div className="min-h-[80vh] h-auto ">
          {pagedData &&
            pagedData.map((data) => (
              <UserInfoCard key={data?.id} data={data} />
            ))}
        </div>
        <div className=" flex justify-center pb-9">
          {pages &&
            [...Array(pages).keys()].map((num) => (
              <Button
                onClick={() => setCurrentPage(num + 1)}
                className="px-2 py-1 mr-3"
                key={num}
                variant={currentPage === num + 1 ? 'filled' : 'outlined'}
                color="red"
              >
                {num + 1}
              </Button>
            ))}
        </div>
      </main>
    </>
  );
}

export default App;
