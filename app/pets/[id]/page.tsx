import { PetDetailsPage } from "@/screens/PetDetails";

interface PetDetailsRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PetDetailsRouteProps) {
  const { id } = await params;

  return <PetDetailsPage petId={Number(id)} />;
}
