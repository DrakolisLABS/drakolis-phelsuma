const os = window.require('os')

export const PLATFORM = {WINDOWS: 'win32', MACOS: 'darwin', LINUX: 'linux', FREEBSD: 'freebsd', SUNOS: 'sunos'}

export function isWindows () {
  return os.platform() === PLATFORM.WINDOWS
}

export function getOS () {
  return os.platform()
}

export function getOSFullName () {
  switch (getOS()) {
    case PLATFORM.WINDOWS:
      return `Windows ${os.release()}`
    case PLATFORM.MACOS:
      return `MacOS ${os.release()}`
    case PLATFORM.LINUX:
      return `Linux ${os.release()}`
    default:
      break
  }
}
