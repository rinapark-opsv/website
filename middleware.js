// Vercel Edge Middleware — 내부 전용 비밀번호 (HTTP Basic Auth)
// 무료(Hobby) 플랜에서도 동작. 비밀번호는 서버(Edge)에서만 검사되어 방문자에게 노출되지 않습니다.
//
// 비밀번호 변경: 아래 PASSWORD 값을 바꾸거나, Vercel 프로젝트 환경변수 SITE_PASSWORD 를 설정하세요.
// 접속 시 아이디는 아무거나 입력해도 되고, 비밀번호만 일치하면 통과합니다.

export const config = {
  matcher: '/((?!_vercel/).*)', // Vercel 내부 경로 외 전부 보호
};

const PASSWORD = process.env.SITE_PASSWORD || 'opensurvey2026';

export default function middleware(req) {
  const auth = req.headers.get('authorization');
  if (auth && auth.startsWith('Basic ')) {
    try {
      const [, pass] = atob(auth.slice(6)).split(':');
      if (pass === PASSWORD) return; // 일치 → 통과
    } catch (e) {}
  }
  return new Response('내부 전용 페이지입니다 — 비밀번호가 필요합니다.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="OpenSurvey Internal"' },
  });
}
