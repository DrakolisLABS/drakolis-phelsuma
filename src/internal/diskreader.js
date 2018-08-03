import {isWindows} from './platform'
const os = window.require('os')
const fs = window.require('fs')
const fsPromises = fs.promises

export const SUPPORTED_FORMATS = ['.jpg', '.png']

export function getDirectories () {
  if (!isWindows) {
    return ['/', os.homedir()]
  }
}

export function getDirectoryImages (dir = os.homedir() + '/Pictures') {
  const files = fs.readdirSync(dir)
  return files.filter(file => SUPPORTED_FORMATS.some(ext => file.endsWith(ext))).map(file =>
    ({path: 'file://' + dir + '/' + file, file})
  )
}
