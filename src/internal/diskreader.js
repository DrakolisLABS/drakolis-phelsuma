import {isWindows} from './platform'
const os = window.require('os')
const fs = window.require('fs')
const path = window.require('path')

export const SUPPORTED_FORMATS = ['.jpg', '.png']

export function getDirectories () {
  if (!isWindows) {
    return ['/', os.homedir()]
  }
}

export function getDirectoryImages (dir = path.join(os.homedir(), 'Pictures')) {
  const files = fs.readdirSync(dir)
  var ret = files.filter(file => SUPPORTED_FORMATS.some(ext =>
    file.endsWith(ext))
  ).map(file => {
    var filepath = path.normalize(path.join(dir, file))
    if (isWindows) {
      filepath = filepath.replace(/\\/g, '/')
    }
    return {
      path: 'file://' + filepath,
      name: file,
      isFolder: false,
      isOpen: false,
      isSupported: true
    }
  }
  )
  return ret
}