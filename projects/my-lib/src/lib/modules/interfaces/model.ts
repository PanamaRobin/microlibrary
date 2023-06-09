export interface Episode {
  id: number;
  name: string;
  episode: string;
}
export interface Character {
  id: number;
  type: string;
  status: string;
  location: Location;
  gender: string;
  species: string;
  name: string;
  image: string;
}
export interface Location {
  name: string;
}
