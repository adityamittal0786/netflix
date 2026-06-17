// Movie data for Netflix clone
export interface Movie {
  id: string;
  title: string;
  poster: string;
  rank?: number;
}

export const trendingMovies: Movie[] = [
  {
    id: "1",
    title: "Teach You a Lesson",
    poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
    rank: 1,
  },
  {
    id: "2",
    title: "Pursuit of Jade",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
    rank: 2,
  },
  {
    id: "3",
    title: "My Royal Nemesis",
    poster: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=450&fit=crop",
    rank: 3,
  },
  {
    id: "4",
    title: "The WONDERfools",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop",
    rank: 4,
  },
  {
    id: "5",
    title: "Jae-seok's B&B Rules!",
    poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
    rank: 5,
  },
  {
    id: "6",
    title: "Ashes to Crown",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
    rank: 6,
  },
  {
    id: "7",
    title: "Young Sheldon",
    poster: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=450&fit=crop",
    rank: 7,
  },
  {
    id: "8",
    title: "Bloodhounds",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop",
    rank: 8,
  },
  {
    id: "9",
    title: "S.W.A.T.",
    poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
    rank: 9,
  },
  {
    id: "10",
    title: "One Piece",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
    rank: 10,
  },
];

export const actionMovies: Movie[] = [
  {
    id: "11",
    title: "Mission Impossible",
    poster: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=450&fit=crop",
  },
  {
    id: "12",
    title: "The Matrix",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop",
  },
  {
    id: "13",
    title: "Fast & Furious",
    poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
  },
  {
    id: "14",
    title: "Inception",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
  },
  {
    id: "15",
    title: "Avatar",
    poster: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=450&fit=crop",
  },
];

export const dramaMovies: Movie[] = [
  {
    id: "16",
    title: "The Crown",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop",
  },
  {
    id: "17",
    title: "Bridgerton",
    poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
  },
  {
    id: "18",
    title: "The Diplomat",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
  },
  {
    id: "19",
    title: "Stranger Things",
    poster: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=450&fit=crop",
  },
  {
    id: "20",
    title: "The Witcher",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop",
  },
];

export const comedyMovies: Movie[] = [
  {
    id: "21",
    title: "Schitt's Creek",
    poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
  },
  {
    id: "22",
    title: "The Office",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
  },
  {
    id: "23",
    title: "Friends",
    poster: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=450&fit=crop",
  },
  {
    id: "24",
    title: "The Good Place",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop",
  },
  {
    id: "25",
    title: "Parks and Recreation",
    poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
  },
];
