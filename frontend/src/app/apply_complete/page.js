"use client";

import { useRouter } from "next/navigation";

export default function ApplyCompletePage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden">
      {/* ----- 상단바 ----- */}
      <div className="w-full px-14 py-5 flex justify-between items-center border-b border-gray-300">
        <button onClick={() => router.push("/")} className="text-black text-3xl font-bold cursor-pointer">슈끌림</button>
        <div className="flex gap-12">
          <button onClick={() => router.push("/site_intro")} className="text-black text-base">사이트 소개</button>
          <button onClick={() => router.push("/how_to_use")} className="text-black text-base">이용 방법</button>
          <button onClick={() => router.push("/mypage")} className="text-black text-base">마이페이지</button>
          <button onClick={() => router.push("/place_recommend")} className="text-black text-base">장소 추천</button>
        </div>
      </div>


      {/* ----- 본문 영역 ----- */}
      <div className="flex flex-col items-center justify-center w-full mt-40 gap-12 text-center px-4">
        {/* 텍스트 + 아이콘 */}
        <div className="text-black-400 text-4xl font-bold">
          소개팅 신청이 완료되었습니다!
        </div>
        <div className="flex items-center gap-6">
          <img
            className="w-24 h-24"
            src="소개팅신청완료.png"
            alt="아이콘"
          />
        </div>

        {/* 매칭 안내 박스 */}
        <div className="bg-rose-50 w-[878px] h-40 rounded-[30px] flex items-center justify-center px-10 text-center">
          <p className="text-black text-3xl font-medium font-['Roboto'] leading-[48px]">
            오늘 <span className="font-bold">오후 8시</span>에 매칭 결과가 도착할 예정입니다.
            <br />
            신청 후 <span className="font-bold">매일 1회</span> 매칭이 진행됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
