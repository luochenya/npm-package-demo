/**
 * @Description 禁用滚动条
 * @Author luochen_ya
 * @Date 2025-01-11
 */
export function handleStopScroll () {
  var mo = function (e) { e.preventDefault() }
  document.body.style.overflow = 'hidden'
  document.addEventListener("touchmove", mo, false)
}

/**
 * @Description 恢复滚动条
 * @Author luochen_ya
 * @Date 2025-01-11
 */
export function handleCanScroll () {
  var mo = function (e) { e.preventDefault() }
  document.body.style.overflow = ''
  document.removeEventListener("touchmove", mo, false)
}