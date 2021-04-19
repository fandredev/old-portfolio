export interface Card<T, RN> {
  title: T;
  description: T;
  children: RN;
  url?: T;
}
export interface Project<T> {
  image: T;
  description: T;
  text: T;
  url: T;
}
