export default function Size(
  height: number,
  width: number,
  weight: number,
  length: number,
) {
  const size = height + 0.8 * width + 0.7 * length + 0.5 * weight;
  if (size < 120) {
    return 'Small';
  } else if (size < 190) {
    return 'Medium';
  } else {
    return 'Large';
  }
}
