import { TravelBlogView } from "@/features";
import { MainLayout } from "@/layout";

export default function Destination({ params }: { params: { id: string } }) {
  return (
    <MainLayout>
      <TravelBlogView id={params.id} />
    </MainLayout>
  );
}
