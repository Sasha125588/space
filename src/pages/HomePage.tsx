import { Layout } from 'antd';
import AppContent from '../components/content/Content';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


const { Content } = Layout;

function HomePage() {
  const {isAuth} = useAuth()

  return isAuth? (
    <>
        <div className="h-dvh w-full bg-saturn bg-center	bg-cover 	">
        <div className="">
          <div className="flex flex-row justify-between">
            <Content className="">
              <AppContent />
            </Content>
          </div>
        </div>
    </div>
    </>
  ) : (
    <Navigate to="/login"/>
  );
}

export default HomePage;

