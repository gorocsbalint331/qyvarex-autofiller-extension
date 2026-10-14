/**
 * Plasmo's reload socket binds to IPv6 localhost only. Chrome's service
 * worker connects to IPv4 localhost and reports ERR_CONNECTION_REFUSED.
 * Forward 127.0.0.1:1815 to [::1]:1815.
 */
import { spawn } from "node:child_process"
import net from "node:net"

const PORT = 1815

function forward(client) {
  const upstream = net.connect({ host: "::1", port: PORT })
  const stop = () => {
    client.destroy()
    upstream.destroy()
  }
  client.pipe(upstream)
  upstream.pipe(client)
  client.on("error", stop)
  upstream.on("error", stop)
  client.on("close", () => upstream.destroy())
  upstream.on("close", () => client.destroy())
}

function listen() {
  const server = net.createServer(forward)
  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.log("[hmr-bridge] 127.0.0.1:1815 is already open")
      return
    }
    console.error("[hmr-bridge]", error)
    process.exitCode = 1
  })
  server.listen(PORT, "127.0.0.1", () => {
    console.log("[hmr-bridge] 127.0.0.1:1815 -> [::1]:1815")
  })
}

listen()

if (process.argv.includes("--with-plasmo")) {
  const child = spawn(
    "npx",
    ["plasmo", "dev", "--src-path=src", "--no-cs-reload"],
    { stdio: "inherit", shell: true }
  )
  child.on("exit", (code) => process.exit(code ?? 0))
}
