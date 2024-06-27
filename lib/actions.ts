"use server";

const convert = (value: FormDataEntryValue) => {
  const result = value.toString;
  return result;
};

export const createBlog = async (formData: FormData) => {
  console.log(formData);

  const title = formData.get("title");
  const content = formData.get("content");
  const cat = formData.get("category");

  await prisma.blog.create({
    data: {
      title: String(title),
      content: String(content),
      image: "",
      category: String(cat),
      created_at: new Date(),
      updated_at: new Date(),
    },
  });
};

export const deleteBlog = async (id: string) => {
  await prisma.blog.delete({
    where: {
      id: id,
    },
  });
};
