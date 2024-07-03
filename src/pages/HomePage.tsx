import { Layout } from 'antd';
import AppContent from '../components/content/Content';


const { Content } = Layout;

function HomePage() {
  return (
    <div className="h-screen w-full bg-saturn bg-center	bg-cover 	">
        <div className="">
          <div className="flex flex-row justify-between">
            <Content className="">
              <AppContent />
            </Content>
          </div>
        </div>
    </div>
  );
}

export default HomePage;

