import { PetDetailsPage } from "@/screens/PetDetails";
import { PetOriginProps } from "@/type/PetOrigin";

interface PetDetailsRouteProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    from?: PetOriginProps;
  }>;
}

export default async function Page({
  params,
  searchParams,
}: PetDetailsRouteProps) {
  const { id } = await params;
  const { from } = await searchParams;

  return <PetDetailsPage petId={Number(id)} origin={from} />;
}
