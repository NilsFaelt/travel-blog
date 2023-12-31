export interface TravelBlog {
  id: string;
  blogTextOne: string;
  blogTextTwo: string;
  blogTextThree: string;
  images: {
    fields: {
      file: {
        url: string;
      };
    };
  }[];
  rating: number;
  ratingBeginnerLevel: number;
  title: string;
  underTitles: string[];
}
