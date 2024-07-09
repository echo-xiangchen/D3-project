import { 
    Header,
    Introduction,
    StackChartPart,
    LineChartPart,
    MapChartPart,
    Reference,
} from './components';
import { pageSetting } from './style';
import { useState, Suspense,lazy,useEffect  } from 'react';
import { NavLink } from "react-router-dom";
import { Space, Spin } from 'antd';

const MainPage = () =>{
    useEffect(() => {
      const handleScroll = () => {
        const position = window.scrollY;
        const triggerPosition = 200; // setting trigger at 500px
        if (position >= triggerPosition) {
          setIsShow(true);
          window.removeEventListener('scroll', handleScroll);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const WordClusterLazy = lazy(() => import('./components/WordCluster'));
    const [isShow, setIsShow] = useState(false);
    const pageStyle = "w-full rounded-xl border border-black px-2 md:px-4 lg:px-16 xl:px-36 shadow-product"
    
    return (
      <>
        <Header />
        <div className={`${pageSetting.padding} w-full flex justify-center  bg-background-color text-font-color  bg-white-light`}>
          <div className='w-full min-h-screen relative flex flex-col gap-5 items-center my-32'>
            <div className='mt-36 flex flex-col gap-16 items-center '>
              <h1 className="text-[2rem] md:text-[2.5rem] xl:text-[3rem] font-bold text-center ">
                What are the trends and geographical spread of female researchers in key Software Engineering conferences over the past decade?
              </h1>
              <div className="text-2xl md:text-4xl">Xiang Chen</div>
            </div>
            <div className='mx-0 md:mx-4 lg:mx-8 xl:mx-16 2xl:mx-24'>
              <Introduction />
            </div>
            <Space direction="vertical" size={100}>
              <div className={pageStyle}>
                <StackChartPart />
              </div>
              <div className={pageStyle}>
                <LineChartPart />
              </div>
              
              <div className={pageStyle}>
                <MapChartPart />
              </div>
              
            <div className={`${pageStyle} flex justify-center items-centers`}>
                {isShow && 
                  <Suspense 
                    fallback={<Spin size="large"/>}>
                    <WordClusterLazy />
                  </Suspense>
                  }
              </div>
            </Space>
  
            {/* <div className='w-full flex justify-center'>
              <NavLink 
                className="px-4 py-2 shadow-product rounded-md"
                to="/848-visual-project/dashborad"
              >DashBorad</NavLink>
            </div> */}

            <div className="w-full">
              <Reference />
            </div>
          </div>
        </div>
      </>
    )
  }

export default MainPage