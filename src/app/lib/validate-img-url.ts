export const validateImageUrl = (e: any) => {
  if (!e.value) {
    return null;
  }
  if (!e.value.startsWith('http')) {
    return { invalidHttp: true };
  }

  return null;
};
