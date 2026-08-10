export interface AnalyticsEvents {
  view_pet: {
    pet_id: number;
    pet_name: string;
  };

  click_adoption: {
    pet_id: number;
    pet_name: string;
  };

  view_sponsorship: Record<string, never>;

  click_sponsorship: {
    pet_id?: number;
    pet_name?: string;
  };

  click_whatsapp: {
    context: "adoption" | "general";
    pet_id?: number;
    pet_name?: string;
  };

  view_gallery: {
    pet_id: number;
    pet_name: string;
  };
}
