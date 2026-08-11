export interface IPet {
  pet_id: number;
  pet_name: string;
  profile_img: string;
  gender: "f" | "m";
  age: string;
  size: string;
  description: string;
  need_sponsorship: boolean;
  sponsorship_group_link: string | null;
  adopted: boolean;
}
