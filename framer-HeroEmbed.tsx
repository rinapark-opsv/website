import { addPropertyControls, ControlType } from "framer"
import { useEffect, useRef, useState } from "react"

/**
 * OpenSurvey · Dataspace AI — Hero 데모 임베드 (Framer 코드 컴포넌트)
 *
 * Framer 프로젝트 내 코드 컴포넌트 이름: HeroDemoEmbed (codeFileId s1bvTgA).
 * 이 파일은 그 소스의 canonical 사본.
 *
 * 라이브 데모를 데스크톱 폭(designWidth)으로 렌더한 뒤, Framer 프레임 크기에
 * 맞춰 비율 그대로 축소(CSS scale)합니다. 어떤 브레이크포인트에서도 스크린샷과
 * 똑같은 데스크톱 레이아웃이 유지됩니다(모바일에서 레이아웃이 깨지지 않음).
 *
 * designWidth=1920 → 데모가 1920 뷰포트로 렌더되어 목업이 설계대로 최대 1320px
 * 폭으로 가운데 정렬되고 양옆에 배경 여백이 남습니다.
 * URL 의 ?bare 플래그가 상단 CTA 네비·헤드라인 같은 페이지 크롬을 숨깁니다.
 *
 * 권장 프레임 비율 ≈ 2.18 : 1 (예: 1200 × 550)
 *
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */

const DEMO_URL = "https://dataspace-hero-embed.vercel.app/?bare"

interface Props {
    url: string
    designWidth: number
    radius: number
    interactive: boolean
}

export default function HeroDemoEmbed(props: Props) {
    const { url, designWidth, radius, interactive } = props
    const wrapRef = useRef<HTMLDivElement>(null)
    const [box, setBox] = useState({ w: 0, h: 0 })

    useEffect(() => {
        const el = wrapRef.current
        if (!el) return
        const ro = new ResizeObserver((entries) => {
            const r = entries[0].contentRect
            setBox({ w: r.width, h: r.height })
        })
        ro.observe(el)
        return () => ro.disconnect()
    }, [])

    // 프레임 폭 기준으로 축소 비율 산출 → iframe 높이를 역산해 프레임을 가득 채움
    const scale = box.w > 0 ? box.w / designWidth : 1
    const iframeH = scale > 0 ? box.h / scale : 0

    return (
        <div
            ref={wrapRef}
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                borderRadius: radius,
                background: "#F9F9F9",
            }}
        >
            {box.w > 0 && (
                <iframe
                    src={url}
                    title="OpenSurvey Dataspace AI Hero"
                    loading="lazy"
                    allow="autoplay; fullscreen; clipboard-write"
                    scrolling="no"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: designWidth,
                        height: iframeH,
                        border: "none",
                        transform: `scale(${scale})`,
                        transformOrigin: "top left",
                        pointerEvents: interactive ? "auto" : "none",
                    }}
                />
            )}
        </div>
    )
}

HeroDemoEmbed.defaultProps = {
    url: DEMO_URL,
    designWidth: 1920,
    radius: 0,
    interactive: true,
}

addPropertyControls(HeroDemoEmbed, {
    url: {
        type: ControlType.String,
        title: "URL",
        defaultValue: DEMO_URL,
        placeholder: "https://…",
    },
    designWidth: {
        type: ControlType.Number,
        title: "Design W",
        min: 768,
        max: 1920,
        step: 20,
        unit: "px",
        defaultValue: 1920,
        displayStepper: true,
    },
    radius: {
        type: ControlType.Number,
        title: "Radius",
        min: 0,
        max: 60,
        unit: "px",
        defaultValue: 0,
    },
    interactive: {
        type: ControlType.Boolean,
        title: "Interactive",
        enabledTitle: "On",
        disabledTitle: "Off",
        defaultValue: true,
    },
})
