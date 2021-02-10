
export default value => {
  const date = new Date(value)
  return date.toLocaleString(['en-uS'], { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}
// import { toLocaleString } from "core-js/fn/number/epsilon"
