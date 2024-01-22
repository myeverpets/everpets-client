export default function CalculateAge(birthday: number | Date) {
  const bday = new Date(birthday);
  const today = new Date();

  const distance = today.getTime() - bday.getTime();
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365);

  return years;
}
