import { AboutView } from "@/features/About";
import { MainLayout } from "@/layout";

export default function page() {
  return (
    <MainLayout>
      <AboutView />
    </MainLayout>
  );
}
