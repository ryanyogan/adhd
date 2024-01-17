import { Board } from "@prisma/client";
import { BoardTitleForm } from "./board-title-form";

interface Props {
  board: Board;
}

export async function BoardNavbar({ board }: Props) {
  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-6 text-white">
      <BoardTitleForm data={board} />
    </div>
  );
}
