export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type UserResponsePayload = {
  data: User[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

export type UserDetail = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export type UserDetailResponsePayload = {
  data: UserDetail;
};
