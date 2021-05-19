import LoadingScreen from '../components/Layout/LoadingScreen';

export default function Home() {
  return (
    <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
      <LoadingScreen />
    </div>
  );
}
