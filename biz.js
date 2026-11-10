// 사업자 정보: 이 파일 한 곳만 고치면 모든 페이지 하단에 반영됩니다.
const BIZ = {
  name: "야화",
  ceo: "전현정",
  regNo: "192-22-02309",
  mailOrder: "신고 면제 (간이과세자)",
  address: "대구광역시 동구 안심로73길 22, 103동 1906호 (신서동)",
  email: "2632224@naver.com",
};
document.querySelectorAll("[data-biz]").forEach(el => {
  el.innerHTML =
    `<div class="biz">상호 ${BIZ.name} · 대표 ${BIZ.ceo} · 사업자등록번호 ${BIZ.regNo}<br>` +
    `통신판매업 ${BIZ.mailOrder}<br>사업장 주소 ${BIZ.address}<br>` +
    `고객문의 <a href="mailto:${BIZ.email}">${BIZ.email}</a> · 카카오톡 오픈채팅 ‘야화사주’<br>` +
    `<a href="report.html">사주풀이 신청</a> · <a href="terms.html">이용약관·환불규정</a> · <a href="privacy.html">개인정보처리방침</a></div>`;
});
