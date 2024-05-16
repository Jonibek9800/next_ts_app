import { message } from "antd";
import { z } from "zod";

export const getFromStoreg = (itemName: string) => {
  const strItem = localStorage.getItem(itemName) || "";
  if (strItem) {
    return JSON.parse(strItem);
  }
};

export const setFromStorage = (itemName: string, item: any) => {
  localStorage.setItem(itemName, JSON.stringify(item));
};

export const validation = (formData: any) => {
  let errorMessage = {};
  const userValidate = z.object({
    username: z
      .string({
        required_error: "Поле обязательно для заполнения",
      })
      .min(3, { message: "Минимальное значени 3 символов" })
      .max(15, { message: "Максимальное значение 15 символов" }),
    password: z
      .string({ required_error: "Поле обязательно для заполнения" })
      .min(6, { message: "Минимальное значени 6 символов" })
      .max(20, { message: "Максимальное значение 20 символов" }),
    rememberMe: z.boolean({
      required_error: "Вы не приняли условия соглощения",
    }),
  });

  const parsError = userValidate.safeParse(formData);
  if (!parsError.success) {
    const newErrors = parsError.error;
    let newError = {};
    for (let err of newErrors.issues) {
      newError = {
        ...newError,
        [err.path[0]]: err.message,
      };
    }
    return newError;
  }
  return errorMessage;
};
