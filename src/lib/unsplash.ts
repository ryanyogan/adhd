import { createApi } from "unsplash-js";

export const unslpash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!,
});
