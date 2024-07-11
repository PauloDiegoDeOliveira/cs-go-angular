export interface Card {
  id: string;
  name: string;
  description: string;
  weapon: {
    id: string;
    name: string;
  };
  pattern: {
    id: string;
    name: string;
  };
  min_float: number;
  max_float: number;
  rarity: {
    id: string;
    name: string;
    color: string;
  };
  stattrak: boolean;
  paint_index: string;
  image: string;
}
