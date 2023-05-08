function userData<T extends { name: string; avg: number }>(data: T) {
  return { ...data, approved: true };
}

const createUser1 = userData({ name: "Raiyan", avg: 60 });
