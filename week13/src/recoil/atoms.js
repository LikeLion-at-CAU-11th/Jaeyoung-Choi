import { atom } from "recoil";

export const userNameAtom = atom({
  key: "userName",
  default: "ooo",
});

export const emailAtom = atom({
  key: "email",
  default: "ooo",
});

export const isSubmitedAtom = atom({
  key: "isSubmited",
  default: "",
});

export const dateAtom = atom({
  key: "date",
  default: "",
});
