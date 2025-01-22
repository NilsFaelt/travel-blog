import { HomeView } from "@/features";
import { MainLayout } from "@/layout";

export default function Home() {
  return (
    <MainLayout>
      <h1>IM NOT MAIN</h1>
      <HomeView />
    </MainLayout>
  );
}
