import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#faf7f2', text: '#3d3226', accent: '#c7853e' },
  fonts: {
    display: '"Georgia", "Times New Roman", "KaiTi", "STKaiti", serif',
    body: '"PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", system-ui, -apple-system, sans-serif',
  },
  typeScale: { hero: 160, body: 36 },
  radius: 8,
};

const muted = '#8b7e6c';
const dim = '#bfb8ab';
const surface = '#f3efe7';
const border = 'rgba(199, 133, 62, 0.2)';

const fill = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  overflow: 'hidden',
  position: 'relative' as const,
};

const styles = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes lineGrow {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
`;

const Divider = ({ color, delay = 0.4 }: { color: string; delay?: number }) => (
  <div
    style={{
      width: 80,
      height: 2,
      background: color,
      transformOrigin: 'left',
      animation: `lineGrow 0.8s ${delay}s cubic-bezier(0.16, 1, 0.3, 1) both`,
    }}
  />
);

const PageNum = ({ n, delay = 0.1 }: { n: string; delay?: number }) => (
  <div
    style={{
      fontSize: 22,
      color: 'var(--osd-accent)',
      letterSpacing: '0.24em',
      animation: `fadeUp 0.7s ${delay}s cubic-bezier(0.16, 1, 0.3, 1) both`,
    }}
  >
    {n}
  </div>
);

// ─── Cover ────────────────────────────────────────────────────────────────────────

const Cover: Page = () => (
  <div style={{ ...fill, display: 'flex', alignItems: 'center', padding: '0 160px' }}>
    <style>{styles}</style>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, position: 'relative', zIndex: 1 }}>
      <div
        style={{
          fontSize: 22,
          color: 'var(--osd-accent)',
          letterSpacing: '0.28em',
          animation: 'fadeUp 0.7s 0.1s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        心理学探索
      </div>
      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 'var(--osd-size-hero)',
          fontWeight: 700,
          lineHeight: 1.08,
          margin: 0,
          letterSpacing: '-0.02em',
          animation: 'fadeUp 0.7s 0.25s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        听见，然后迈出下一步
      </h1>
      <Divider color="var(--osd-accent)" delay={0.45} />
      <p
        style={{
          fontSize: 34,
          color: muted,
          lineHeight: 1.5,
          margin: 0,
          fontWeight: 400,
          animation: 'fadeUp 0.7s 0.55s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        关于自我怀疑与真正自信的探索
      </p>
    </div>
    <div
      style={{
        position: 'absolute',
        right: 160,
        bottom: 80,
        fontSize: 22,
        color: dim,
        zIndex: 1,
        animation: 'fadeUp 0.7s 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}
    >
      汇报人：蔡茂贵 &nbsp;|&nbsp; 二班第一组
    </div>
    <div
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: 380,
        background: `linear-gradient(180deg, ${surface} 0%, rgba(243,239,231,0.3) 100%)`,
        zIndex: 0,
        animation: 'fadeIn 1s 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}
    />
  </div>
);

// ─── 01 一个沉默的瞬间 ────────────────────────────────────────────────────────────

const SilentMoment: Page = () => (
  <div style={{ ...fill, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px' }}>
    <style>{styles}</style>
    <PageNum n="01" />
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 64,
        fontWeight: 700,
        margin: '20px 0 48px',
        lineHeight: 1.15,
        animation: 'fadeUp 0.7s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}
    >
      一个沉默的瞬间
    </h2>
    <div style={{ maxWidth: 1100 }}>
      <p
        style={{
          fontSize: 30,
          lineHeight: 1.65,
          margin: 0,
          animation: 'fadeUp 0.7s 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        我站在这里，什么也不说。
      </p>
      <p
        style={{
          fontSize: 30,
          lineHeight: 1.65,
          margin: '8px 0 0',
          animation: 'fadeUp 0.7s 0.42s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        停顿，制造了全场最响亮的声音。
      </p>
      <p
        style={{
          fontSize: 24,
          color: muted,
          margin: '36px 0 16px',
          fontStyle: 'italic',
          animation: 'fadeUp 0.7s 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        那些声音在说——
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          paddingLeft: 40,
          borderLeft: `2px solid ${border}`,
          animation: 'fadeUp 0.7s 0.58s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        <p style={{ fontSize: 24, color: muted, fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
          "他忘词了吗？"
        </p>
        <p style={{ fontSize: 24, color: muted, fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
          "他还能完成吗？"
        </p>
        <p style={{ fontSize: 24, color: muted, fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
          "我这身打扮还行吗？"
        </p>
        <p style={{ fontSize: 24, color: muted, fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
          "他们可能根本不喜欢我。"
        </p>
      </div>
      <p
        style={{
          fontSize: 28,
          lineHeight: 1.65,
          margin: '44px 0 0',
          color: 'var(--osd-accent)',
          fontWeight: 500,
          animation: 'fadeUp 0.7s 0.75s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        这就是自我怀疑的真实场景——
        <br />
        它不需要任何证据，只需要一个不确定的时刻。
      </p>
    </div>
  </div>
);

// ─── 02 你并不陌生 ────────────────────────────────────────────────────────────────

const SceneCard = ({
  text,
  delay,
}: {
  text: string;
  delay: number;
}) => (
  <div
    style={{
      background: surface,
      padding: '36px 40px',
      borderRadius: 'var(--osd-radius)',
      animation: `fadeUp 0.7s ${delay}s cubic-bezier(0.16, 1, 0.3, 1) both`,
    }}
  >
    <p style={{ fontSize: 30, lineHeight: 1.55, margin: 0 }}>{text}</p>
  </div>
);

const NotAlone: Page = () => (
  <div style={{ ...fill, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px' }}>
    <style>{styles}</style>
    <PageNum n="02" />
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 64,
        fontWeight: 700,
        margin: '20px 0 56px',
        lineHeight: 1.15,
        animation: 'fadeUp 0.7s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}
    >
      你并不陌生
    </h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 1100 }}>
      <SceneCard
        text="课堂上想举手，又悄悄放下：万一答错被嘲笑呢？"
        delay={0.3}
      />
      <SceneCard
        text='聊天框里，对方只回了一个不带表情的"好的"。'
        delay={0.45}
      />
      <SceneCard
        text="深夜宿舍，反复回放白天那点尴尬。"
        delay={0.6}
      />
    </div>
    <p
      style={{
        fontSize: 28,
        color: muted,
        margin: '48px 0 0',
        lineHeight: 1.55,
        animation: 'fadeUp 0.7s 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}
    >
      许多人都曾听见，那个声音在耳边低语。
    </p>
  </div>
);

// ─── 03 数据背后的我们 ────────────────────────────────────────────────────────────

const BehindData: Page = () => (
  <div
    style={{
      ...fill,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 160px',
    }}
  >
    <style>{styles}</style>
    <div style={{ display: 'flex', gap: 120, alignItems: 'center', maxWidth: 1400 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexShrink: 0,
          animation: 'fadeUp 0.7s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 200,
            fontWeight: 700,
            color: 'var(--osd-accent)',
            lineHeight: 1,
          }}
        >
          14.8%
        </span>
        <span style={{ fontSize: 28, color: muted, marginTop: 16, letterSpacing: '0.08em' }}>
          青少年抑郁风险比例
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <PageNum n="03" delay={0.3} />
        <h2
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 56,
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.2,
            animation: 'fadeUp 0.7s 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
          }}
        >
          数据背后的我们
        </h2>
        <p
          style={{
            fontSize: 24,
            color: muted,
            margin: 0,
            lineHeight: 1.55,
            animation: 'fadeUp 0.7s 0.45s cubic-bezier(0.16, 1, 0.3, 1) both',
          }}
        >
          《中国国民心理健康发展报告（2021-2022）》
        </p>
        <p
          style={{
            fontSize: 30,
            lineHeight: 1.65,
            margin: 0,
            maxWidth: 640,
            animation: 'fadeUp 0.7s 0.55s cubic-bezier(0.16, 1, 0.3, 1) both',
          }}
        >
          核心症状：低自我评价、反复的自我怀疑。
        </p>
        <p
          style={{
            fontSize: 26,
            color: muted,
            lineHeight: 1.6,
            margin: 0,
            maxWidth: 640,
            animation: 'fadeUp 0.7s 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
          }}
        >
          那不只是数字。
          <br />
          那是课桌间、熄灯后的窃窃私语，
          <br />
          是我们成长中的某种思维方式。
        </p>
      </div>
    </div>
  </div>
);

// ─── 04 转折：识别即开始 ──────────────────────────────────────────────────────────

const TurningPoint: Page = () => (
  <div
    style={{
      ...fill,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 160px',
      textAlign: 'center',
    }}
  >
    <style>{styles}</style>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 48, maxWidth: 1100 }}>
      <PageNum n="04" delay={0.15} />
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 80,
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.12,
          animation: 'fadeUp 0.7s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        识别即开始
      </h2>
      <Divider color="var(--osd-accent)" delay={0.5} />
      <p
        style={{
          fontSize: 'var(--osd-size-body)',
          lineHeight: 1.6,
          margin: 0,
          animation: 'fadeUp 0.7s 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        当我们意识到自己深受影响的那一刻，就已经迈出了第一步。
      </p>
      <p
        style={{
          fontSize: 'var(--osd-size-body)',
          lineHeight: 1.6,
          margin: 0,
          color: muted,
          animation: 'fadeUp 0.7s 0.75s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        真正的自信，不是假设缺点不存在，而是直视它。
      </p>
    </div>
  </div>
);

// ─── 05 小工具：认知重构 ──────────────────────────────────────────────────────────

const CognitiveReframe: Page = () => (
  <div style={{ ...fill, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 140px' }}>
    <style>{styles}</style>
    <PageNum n="05" />
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 64,
        fontWeight: 700,
        margin: '20px 0 12px',
        lineHeight: 1.15,
        animation: 'fadeUp 0.7s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}
    >
      小工具：认知重构
    </h2>
    <p
      style={{
        fontSize: 26,
        color: muted,
        margin: '0 0 48px',
        animation: 'fadeUp 0.7s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}
    >
      听起来很深奥？其实就是——换个滤镜看事情。
    </p>

    <div style={{ display: 'flex', gap: 40 }}>
      <div
        style={{
          flex: 1,
          background: surface,
          borderRadius: 'var(--osd-radius)',
          padding: '44px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          animation: 'fadeUp 0.7s 0.45s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        <span style={{ fontSize: 24, color: muted, letterSpacing: '0.12em' }}>旧滤镜</span>
        <p style={{ fontSize: 32, lineHeight: 1.5, margin: 0, color: muted, fontStyle: 'italic' }}>
          "你个白痴，又搞砸了。"
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 36,
          color: dim,
          animation: 'fadeUp 0.7s 0.55s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        →
      </div>
      <div
        style={{
          flex: 1,
          background: surface,
          borderRadius: 'var(--osd-radius)',
          padding: '44px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          borderLeft: `3px solid var(--osd-accent)`,
          animation: 'fadeUp 0.7s 0.65s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        <span style={{ fontSize: 24, color: 'var(--osd-accent)', letterSpacing: '0.12em' }}>新滤镜</span>
        <p style={{ fontSize: 32, lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
          "噢，我犯了个错。人人都会犯错。我还在学习。So that's okay."
        </p>
      </div>
    </div>

    <p
      style={{
        fontSize: 28,
        color: muted,
        margin: '48px 0 0',
        lineHeight: 1.55,
        animation: 'fadeUp 0.7s 0.85s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}
    >
      一次次练习这样的内在对话，就一点点拼出更健康、更自信的自己。
    </p>
  </div>
);

// ─── 06 换个问题，答案就变了 ──────────────────────────────────────────────────────

const EvidenceItem = ({
  text,
  delay,
}: {
  text: string;
  delay: number;
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      animation: `fadeUp 0.7s ${delay}s cubic-bezier(0.16, 1, 0.3, 1) both`,
    }}
  >
    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--osd-accent)', flexShrink: 0 }} />
    <span style={{ fontSize: 30, lineHeight: 1.5 }}>{text}</span>
  </div>
);

const ChangeQuestion: Page = () => (
  <div style={{ ...fill, display: 'flex', alignItems: 'center', padding: '0 160px' }}>
    <style>{styles}</style>
    <div style={{ display: 'flex', gap: 100, maxWidth: 1500 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flexShrink: 0 }}>
        <PageNum n="06" />
        <h2
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 64,
            fontWeight: 700,
            margin: '20px 0 0',
            lineHeight: 1.15,
            animation: 'fadeUp 0.7s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both',
          }}
        >
          换个问题，
          <br />
          答案就变了
        </h2>
        <p
          style={{
            fontSize: 28,
            color: muted,
            lineHeight: 1.5,
            margin: '24px 0 0',
            maxWidth: 480,
            animation: 'fadeUp 0.7s 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
          }}
        >
          我问自己："听众真的有明显的现象，表明我很糟糕吗？"
        </p>
        <p
          style={{
            fontSize: 26,
            color: 'var(--osd-accent)',
            fontWeight: 500,
            margin: '32px 0 0',
            animation: 'fadeUp 0.7s 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
          }}
        >
          于是我开始回想——
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, justifyContent: 'center', flex: 1 }}>
        <EvidenceItem text="有人在点头。" delay={0.55} />
        <EvidenceItem text='组员发来微信："讲得还不错。"' delay={0.65} />
        <EvidenceItem text="我清楚地介绍了研究方法。" delay={0.75} />
        <EvidenceItem text="即使不完美，我也比上次进步了。" delay={0.85} />
      </div>
    </div>
    <p
      style={{
        position: 'absolute',
        left: 160,
        bottom: 100,
        fontSize: 28,
        color: muted,
        fontStyle: 'italic',
        lineHeight: 1.5,
        animation: 'fadeUp 0.7s 1s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}
    >
      从"万一我搞砸了怎么办"，到"有没有可能，我表现得还不错？"
    </p>
  </div>
);

// ─── 07 夺回你的麦克风 ────────────────────────────────────────────────────────────

const ReclaimMic: Page = () => (
  <div
    style={{
      ...fill,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 160px',
      textAlign: 'center',
    }}
  >
    <style>{styles}</style>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 44, maxWidth: 1100 }}>
      <PageNum n="07" delay={0.15} />
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 80,
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.12,
          animation: 'fadeUp 0.7s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        夺回你的麦克风
      </h2>
      <Divider color="var(--osd-accent)" delay={0.5} />
      <p
        style={{
          fontSize: 34,
          lineHeight: 1.6,
          margin: 0,
          animation: 'fadeUp 0.7s 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        自我怀疑只是一个建立在不确定性上的声音。
      </p>
      <p
        style={{
          fontSize: 34,
          lineHeight: 1.6,
          margin: 0,
          color: muted,
          animation: 'fadeUp 0.7s 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        遗憾的是，我们自己，常常把最大音量的麦克风递给它。
      </p>
      <p
        style={{
          fontSize: 'var(--osd-size-body)',
          lineHeight: 1.5,
          margin: '12px 0 0',
          color: 'var(--osd-accent)',
          fontWeight: 600,
          animation: 'fadeUp 0.7s 0.85s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        但换个角度想——我们可以把麦克风夺回来。
        <br />
        找回被它淹没的自信。
      </p>
    </div>
  </div>
);

// ─── 08 真正的自信 ────────────────────────────────────────────────────────────────

const TrueConfidence: Page = () => (
  <div
    style={{
      ...fill,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 160px',
      textAlign: 'center',
    }}
  >
    <style>{styles}</style>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 56, maxWidth: 1300 }}>
      <PageNum n="08" delay={0.15} />
      <p
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 64,
          fontWeight: 700,
          lineHeight: 1.4,
          margin: 0,
          animation: 'fadeUp 0.7s 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        真正的自信，从来不是彻底消灭自我怀疑，
        <br />
        而是当你听见它在耳边喋喋不休时，
        <br />
        依然能对它点点头，
        <br />
        然后坚定地迈出你的下一步。
      </p>
    </div>
  </div>
);

// ─── Ending ───────────────────────────────────────────────────────────────────────

const Ending: Page = () => (
  <div
    style={{
      ...fill,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 160px',
    }}
  >
    <style>{styles}</style>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40, textAlign: 'center' }}>
      <p
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 120,
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          animation: 'fadeUp 0.7s 0.15s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        感谢倾听
      </p>
      <Divider color="var(--osd-accent)" delay={0.4} />
      <p
        style={{
          fontSize: 32,
          color: muted,
          lineHeight: 1.5,
          margin: 0,
          animation: 'fadeUp 0.7s 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        听见，然后迈出下一步
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
          marginTop: 32,
          animation: 'fadeUp 0.7s 0.85s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        <p style={{ fontSize: 22, color: muted, margin: 0, lineHeight: 1.6 }}>
          演讲人：蔡茂贵
        </p>
        <p style={{ fontSize: 22, color: muted, margin: 0, lineHeight: 1.6 }}>
          PPT制作：陈乐琪 &nbsp; 张尔皓
        </p>
        <p style={{ fontSize: 22, color: muted, margin: 0, lineHeight: 1.6 }}>
          文案制作：郭曜伦 &nbsp; 黎锐豪
        </p>
      </div>
    </div>
  </div>
);

// ─── Export ────────────────────────────────────────────────────────────────────────

export const meta: SlideMeta = { title: '听见，然后迈出下一步' };
export default [
  Cover,
  SilentMoment,
  NotAlone,
  BehindData,
  TurningPoint,
  CognitiveReframe,
  ChangeQuestion,
  ReclaimMic,
  TrueConfidence,
  Ending,
] satisfies Page[];
