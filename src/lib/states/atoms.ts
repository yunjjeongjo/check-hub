import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const issueState = atom({
  key: "issueState",
  default: { owner: "facebook", repo: "react" },
  effects_UNSTABLE: [persistAtom]
});

export const issueActiveState = atom({
  key: "issueActiveState",
  default: "open"
});

export const issueSortState = atom({
  key: "issueSortState",
  default: "comments"
});
