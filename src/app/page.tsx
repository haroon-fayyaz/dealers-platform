import Dashboard from '@/app/components/Dashboard';
import Footer from '@/app/components/Footer';
import AuthWrapper from '@/app/components/AuthWrapper';

const Home = () => {
  return (
    <AuthWrapper>
      <div className="flex flex-col h-screen">
        <main className="flex flex-col flex-grow gap-8 row-start-2 items-center sm:items-start">
          <Dashboard />
        </main>
        <Footer />
      </div>
    </AuthWrapper>
  );
};

export default Home;
