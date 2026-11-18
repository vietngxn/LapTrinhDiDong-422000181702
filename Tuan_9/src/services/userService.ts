import { api } from "../api/client";
import { User } from "../types";

// PATCH /users/:id chỉ gửi { name, phone } (PUT sẽ làm mất email, password).
// json-server trả cả `password` nên loại nó đi trước khi đưa vào store.
export async function updateProfile(id: number, data: Pick<User, "name" | "phone">): Promise<User> {
  const res = await api.patch<User & { password?: string }>(`/users/${id}`, data);
  const { password: _pw, ...user } = res.data;
  return user;
}
