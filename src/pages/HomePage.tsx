import { Layout } from 'antd';
import Header from '../components/header/Header';
import AppContent from '../components/content/Content';


const { Content } = Layout;

function HomePage() {
  return (
    <div className="h-screen w-screen bg-saturn bg-center	bg-cover 	">
      <div className="">
        <div className="">
          <Header />
          <div className="flex flex-row justify-between">
            <Content className="">
              <AppContent />
            </Content>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

