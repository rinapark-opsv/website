#!/bin/bash
# OpenSurvey Hero — 원클릭 배포
# index.html(이 폴더) 를 main-hero Vercel 프로덕션에 즉시 반영합니다.
set -e
cd "$(dirname "$0")"
echo "▶ 배포 중… (main-hero)"
npx vercel --prod --yes
echo "✓ 완료 → https://main-hero-cyan.vercel.app/  (비번: opensurvey2026)"
