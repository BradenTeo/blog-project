<template>
  <div>
    <header>
      <Title :title="title" />
    </header>
    <div class="max-w-[680px] mx-auto px-[24px]">
      <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">Everyday</h3>

      <section>
        <div>
          <img
            class="h-[1.5rem] float-left mt-[5px] mr-[8px]"
            src="~/assets/images/posts/lifehacks/libby.png"
            alt="Libby app logo"
          />
          <h2>Libby</h2>
        </div>
        <p>
          Thousands of public libraries offer ebooks and audiobooks (for free!)
          in
          <a href="https://libbyapp.com/shelf" target="_blank">Libby</a>
          ! All you need is your library account!
        </p>
      </section>

      <section>
        <h2>&#128241; Reducing iPhone screen brightness</h2>
        This is useful for when you're in a dark room.
        <a
          href="https://www.macrumors.com/how-to/make-iphone-display-dimmer-than-low-brightness/"
          target="_blank"
        >
          Check it out here
        </a>
      </section>

      <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 border-b border-gray-200 dark:border-gray-700 pb-2 mb-6 mt-10">Tech</h3>

      <section>
        <h2>&#129302; Self-hosted LLM with Open WebUI &amp; Docker</h2>
        <p>
          You can run your own local LLM on your Mac completely for free using
          <a href="https://ollama.com" target="_blank">Ollama</a> and
          <a href="https://github.com/open-webui/open-webui" target="_blank">Open WebUI</a>.
          Ollama handles pulling and serving the model, while Open WebUI gives you a
          polished ChatGPT-like interface in your browser.
        </p>
        <p>
          I'm running <strong>Qwen3-Coder 30B</strong> (16k context window) — great for coding tasks.
          Once Ollama is installed, pull the model and spin up Open WebUI via Docker:
        </p>
        <pre class="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-md p-4 overflow-x-auto my-3 text-sm"><code>ollama pull qwen3-coder:30b
docker run -d \
  -p 3000:8080 \
  -v open-webui:/app/backend/data \
  -e OLLAMA_BASE_URL=http://host.docker.internal:11434 \
  --name open-webui \
  ghcr.io/open-webui/open-webui:main</code></pre>
        <p>
          Open WebUI will be available at <code class="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded px-1 text-sm">http://localhost:3000</code>. No internet
          connection required — everything runs on your machine.
        </p>
      </section>

      <section>
        <h2>&#127758; Accessing your local LLM from anywhere with Tailscale</h2>
        <p>
          <a href="https://tailscale.com" target="_blank">Tailscale</a> creates a private
          VPN mesh between your devices, so you can reach your Mac's local ports (like
          Open WebUI on port 3000) from your iPhone even when you're away from home.
        </p>
        <p>
          Install Tailscale on both your Mac and iPhone, sign in with the same account,
          and they'll automatically appear on the same private network. Then just navigate
          to <code class="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded px-1 text-sm">http://&lt;your-mac-tailscale-ip&gt;:3000</code> in Safari on your
          phone — your self-hosted LLM, accessible anywhere.
        </p>
      </section>

      <section>
        <h2>&#128187; Control your Mac remotely from your iPhone</h2>
        <p>
          Enable <strong>Screen Sharing</strong> on your Mac (System Settings → General →
          Sharing → Screen Sharing), then install
          <a href="https://apps.apple.com/app/vnc-viewer-remote-desktop/id352019548" target="_blank">VNC Viewer</a>
          on your iPhone. Add a new connection using your Mac's Tailscale IP address and
          you'll have full remote desktop control — handy for kicking off long-running
          jobs or checking something without walking to your desk.
        </p>
        <p>
          Combining this with Tailscale means it works over cellular too, not just your
          home Wi-Fi.
        </p>
      </section>

      <section>
        <h2>&#127909; Stream videos from your Mac to your iPhone</h2>
        <p>
          Enable <strong>File Sharing</strong> on your Mac (System Settings → General →
          Sharing → File Sharing) to expose your files over SMB. Then in
          <a href="https://apps.apple.com/app/vlc-for-mobile/id650377962" target="_blank">VLC</a>
          on your iPhone, tap the network icon and connect to your Mac's Tailscale IP —
          <code class="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded px-1 text-sm">smb://100.x.x.x</code>.
          Browse your folders and tap any video to stream it instantly. No uploading, no syncing,
          no storage limits.
        </p>
      </section>

      <section>
        <h2>&#128279; My always-connected setup</h2>
        <p>
          Tailscale is the backbone of all of this — it gives my iPhone a direct, encrypted
          tunnel to my Mac's private IP address over any network, including cellular.
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 200" width="100%" role="img" aria-label="MacBook services connected to iPhone apps via Tailscale">
          <!-- MacBook box -->
          <rect x="4" y="4" width="162" height="192" rx="10" class="d-box"/>
          <text x="85" y="26" text-anchor="middle" class="d-title">&#128187; MacBook</text>
          <rect x="14" y="38" width="142" height="40" rx="5" class="d-card"/>
          <text x="85" y="55" text-anchor="middle" class="d-label">Open WebUI</text>
          <text x="85" y="70" text-anchor="middle" class="d-sub">Ollama + Docker · :3000</text>
          <rect x="14" y="87" width="142" height="40" rx="5" class="d-card"/>
          <text x="85" y="104" text-anchor="middle" class="d-label">Screen Sharing</text>
          <text x="85" y="119" text-anchor="middle" class="d-sub">VNC · :5900</text>
          <rect x="14" y="136" width="142" height="40" rx="5" class="d-card"/>
          <text x="85" y="153" text-anchor="middle" class="d-label">File Share</text>
          <text x="85" y="168" text-anchor="middle" class="d-sub">SMB</text>
          <!-- Connection lines -->
          <line x1="167" y1="58" x2="388" y2="58" class="d-line"/>
          <polygon points="384,54 393,58 384,62" class="d-arrow"/>
          <line x1="167" y1="107" x2="388" y2="107" class="d-line"/>
          <polygon points="384,103 393,107 384,111" class="d-arrow"/>
          <line x1="167" y1="156" x2="388" y2="156" class="d-line"/>
          <polygon points="384,152 393,156 384,160" class="d-arrow"/>
          <!-- Tailscale pill (centred on the middle connection line) -->
          <rect x="214" y="93" width="132" height="28" rx="14" class="d-pill"/>
          <text x="280" y="112" text-anchor="middle" class="d-pill-text">&#128274; Tailscale</text>
          <!-- iPhone box -->
          <rect x="394" y="4" width="162" height="192" rx="10" class="d-box"/>
          <text x="475" y="26" text-anchor="middle" class="d-title">&#128241; iPhone</text>
          <rect x="404" y="38" width="142" height="40" rx="5" class="d-card"/>
          <text x="475" y="55" text-anchor="middle" class="d-label">Open WebUI</text>
          <text x="475" y="70" text-anchor="middle" class="d-sub">Safari browser</text>
          <rect x="404" y="87" width="142" height="40" rx="5" class="d-card"/>
          <text x="475" y="104" text-anchor="middle" class="d-label">VNC Viewer</text>
          <text x="475" y="119" text-anchor="middle" class="d-sub">Remote control</text>
          <rect x="404" y="136" width="142" height="40" rx="5" class="d-card"/>
          <text x="475" y="153" text-anchor="middle" class="d-label">VLC</text>
          <text x="475" y="168" text-anchor="middle" class="d-sub">Video over SMB</text>
        </svg>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LifehacksPage',
  layout: 'default',
  data() {
    return {
      title: 'Life Hacks',
    }
  },
  head() {
    return {
      title: "Life Hacks | Braden's Journal",
      meta: [
        { hid: 'description', name: 'description', content: 'Useful tips and tricks — from free ebooks with Libby to running a self-hosted LLM with Open WebUI, Tailscale remote access, and VNC control from your iPhone.' },
        { hid: 'og:title', property: 'og:title', content: "Life Hacks | Braden's Journal" },
      ],
    }
  },
}
</script>

<style scoped>
h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
}

a {
  color: #1a73e8;
  text-decoration: none;
}

a:hover {
  color: #1254b5;
}

section {
  margin-bottom: 2rem;
}

p {
  margin-bottom: 0.75rem;
}

/* Diagram */
.d-box { fill: #f3f4f6; stroke: #d1d5db; stroke-width: 1.5; }
.d-card { fill: #ffffff; stroke: #e5e7eb; stroke-width: 1; }
.d-title { fill: #111827; font-size: 13px; font-weight: 700; font-family: system-ui, -apple-system, sans-serif; }
.d-label { fill: #374151; font-size: 11px; font-family: system-ui, -apple-system, sans-serif; }
.d-sub { fill: #9ca3af; font-size: 9.5px; font-family: ui-monospace, monospace; }
.d-line { stroke: #60a5fa; stroke-width: 1.5; stroke-dasharray: 5 3; fill: none; }
.d-arrow { fill: #60a5fa; }
.d-pill { fill: #eff6ff; stroke: #bfdbfe; stroke-width: 1.5; }
.d-pill-text { fill: #1d4ed8; font-size: 11px; font-weight: 700; font-family: system-ui, -apple-system, sans-serif; }

.dark .d-box { fill: #1f2937; stroke: #374151; }
.dark .d-card { fill: #111827; stroke: #374151; }
.dark .d-title { fill: #f9fafb; }
.dark .d-label { fill: #d1d5db; }
.dark .d-sub { fill: #6b7280; }
.dark .d-line { stroke: #3b82f6; }
.dark .d-arrow { fill: #3b82f6; }
.dark .d-pill { fill: #1e3a5f; stroke: #3b82f6; }
.dark .d-pill-text { fill: #93c5fd; }
</style>
