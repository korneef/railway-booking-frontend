interface ImultiRangeSliderValuePosition {
  val: number,
  min: number,
  max: number
}
export default function multiRangeSliderValuePosition(args: ImultiRangeSliderValuePosition): number {
  const { min, max, val } = args;
  const position: number = (val - min) / (max - min) * 100;
  console.log(position)
  if (position < 14) {
    return 14
  } else if (position > 74) {
    return 74
  }
  return position
}