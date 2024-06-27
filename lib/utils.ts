export const formatDate = (date: Date) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "long" });
  const day = dateObj.toLocaleString("default", { day: "2-digit" });
  const year = dateObj.toLocaleString("default", { year: "numeric" });
  return `${month} ${day}, ${year}`;
};

export async function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
  });
}
