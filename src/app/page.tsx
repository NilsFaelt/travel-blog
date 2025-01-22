import { HomeView } from "@/features";
import { MainLayout } from "@/layout";

export default function Home() {
  return (
    <MainLayout>
      <h1>IM MAIN BRANCH</h1>
      <HomeView />
    </MainLayout>
  );
}
